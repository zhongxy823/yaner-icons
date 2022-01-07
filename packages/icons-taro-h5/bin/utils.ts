import * as fs from 'fs';
import { XmlData } from 'iconfont-parser';
import { camelCase } from 'lodash';
const ATTRIBUTE_FILL_MAP = ['path'];

export const replaceHexToRgb = (hex) => {
  const rgb: number[] = [];

  //去除前缀 # 号
  hex = hex.substr(1);

  if (hex.length === 3) {
    // 处理 '#abc' 成 '#aabbcc'
    hex = hex.replace(/(.)/g, '$1$1');
  }

  hex.replace(/../g, (color: string) => {
    // 按16进制将字符串转换为数字
    rgb.push(parseInt(color, 0x10));

    return color;
  });

  return 'rgb(' + rgb.join(',') + ')';
};

const whitespace = (repeat: number) => {
  return ' '.repeat(repeat);
};

export const generateCase = (data: XmlData['svg']['symbol'][number], baseIdent: number = 4) => {
  let template = `\n${whitespace(baseIdent)}<svg viewBox="${data.$.viewBox}" width={size} height={size} style={style} {...rest}>\n`;

  for (const domName of Object.keys(data)) {
    if (domName === '$') {
      continue;
    }

    const counter = {
      colorIndex: 0,
      baseIdent,
    };

    if (data[domName].$) {
      template += `${whitespace(baseIdent + 2)}<${domName}${addAttribute(domName, data[domName], counter)}\n${whitespace(baseIdent + 2)}/>\n`;
    } else if (Array.isArray(data[domName])) {
      data[domName].forEach((sub) => {
        template += `${whitespace(baseIdent + 2)}<${domName}${addAttribute(domName, sub, counter)}\n${whitespace(baseIdent + 2)}/>\n`;
      });
    }
  }

  template += `${whitespace(baseIdent)}</svg>\n`;

  return template;
};

export const addAttribute = (domName: string, sub: XmlData['svg']['symbol'][number]['path'][number], counter: { colorIndex: number, baseIdent: number }) => {
  let template = '';

  if (sub && sub.$) {
    if (ATTRIBUTE_FILL_MAP.includes(domName)) {
      sub.$.fill = sub.$.fill || '#333333';
    }

    for (const attributeName of Object.keys(sub.$)) {
      if (attributeName === 'fill') {
        let color :string | undefined;
        color = replaceHexToRgb(sub.$[attributeName]);
        template += `\n${whitespace(counter.baseIdent + 4)}${camelCase(attributeName)}={getIconColor(color,0,'${color}')}`;
        counter.colorIndex += 1;
      } else {
        template += `\n${whitespace(counter.baseIdent + 4)}${camelCase(attributeName)}='${sub.$[attributeName]}'`;
      }
    }
  }

  return template;
};

export const delDir = (path) => {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path) as any;
    files.forEach((file) => {
      let curPath = path + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath); //递归删除文件夹
      } else {
        fs.unlinkSync(curPath); //删除文件
      }
    });
  }
}