#!/usr/bin/env node
const request = require('request');
const fs = require('fs');
const path = require('path');

const option = process.argv.splice(2);

if (option.length && option[0].includes('//at.alicdn.com/')) {
  const uri = option[0];

  // 改写 IconFont.tsx 文件
  fs.readFile(
    path.resolve(__dirname, '../src/components/IconFont.tsx'),
    function (err, data) {
      if (err) {
        return console.log(err);
      }
      const result = data
        .toString()
        .replace(/uri=\'.+?\'/g, `uri='${uri}'`);
      fs.writeFile(
        path.resolve(__dirname, '../src/components/IconFont.tsx'),
        result,
        function (err) {
          if (err) return console.log(err);
        }
      );
    }
  );

  // 写入一个个的 ICON 组件
  request(`http:${uri}`, (error, res, body) => {
    if (!error) {
      const regex = /id=\".+?\"/g;
      let data = body.match(regex);
      data = data.map((e) => e.replace('id="', '').replace('"', ''));
      let indexTSResult = '';
      let iconsMDXImportResult = '';
      let OutlinedIcons = '';
      let FilledIcons = '';
      let MulticoloredIcons = '';
      let iconsMDXUseResult = '';
      delDir(path.resolve(__dirname, '../src/icons'));
      data.forEach(async (e) => {
        indexTSResult =
          indexTSResult + `export {default as ${e}} from './${e}'\n`;
        iconsMDXImportResult =
          iconsMDXImportResult + `import { ${e} } from './'\n`;
        if (e.includes('Outlined')) {
          OutlinedIcons =
            OutlinedIcons + `<div className="font" onClick={() => copyName('${e}')}><${e} /><p>${e}</p></div>\n`;
        } else if (e.includes('Filled')) {
          FilledIcons =
            FilledIcons + `<div className="font" onClick={() => copyName('${e}')}><${e} /><p>${e}</p></div>\n`;
        } else if (e.includes('Multicolored')) {
          MulticoloredIcons =
            MulticoloredIcons +
            `<div className="font" onClick={() => copyName('${e}')}><${e} /><p>${e}</p></div>\n`;
        }

        let data = await fs.readFileSync(__dirname + '/template.tsx', {
          encoding: 'utf-8',
          flag: 'r',
        });
        data = data.toString().replace(/iconName/g, e);
        await fs.writeFileSync(
          path.resolve(__dirname, `../src/icons/${e}.tsx`),
          data
        );
      });
      iconsMDXUseResult = `<div className="tabs"><input type="radio" id="tab1" name="tab-control" defaultChecked /><input type="radio" id="tab2" name="tab-control" /><input type="radio" id="tab3" name="tab-control" /><ul><li title="线框风格"><label htmlFor="tab1" role="button"><span>线框风格</span></label></li><li title="实底风格"><label htmlFor="tab2" role="button"><span>实底风格</span></label></li><li title="双色风格"><label htmlFor="tab3" role="button"><span>双色风格</span></label></li></ul><div className="slider"><div className="indicator"></div></div><div className="content"><section>${OutlinedIcons}</section><section>${FilledIcons}</section><section>${MulticoloredIcons}</section></div></div>`;
      const iconsMDXResult = `---
name: Icon 图标
route: /icons
order: 1
sidebar: true
---

import '../styles/icons.css'
import '../styles/tabs.css'

${iconsMDXImportResult}
import { copyName } from "../copy.ts";


# Icon 图标

${iconsMDXUseResult}
`;
      // index.ts
      fs.writeFileSync(
        path.resolve(__dirname, '../src/icons/index.ts'),
        indexTSResult
      );
      // index.mdx
      fs.writeFileSync(
        path.resolve(__dirname, '../src/icons/index.mdx'),
        iconsMDXResult
      );
      // example.mdx
      fs.copyFileSync(
        __dirname + '/example.txt',
        path.resolve(__dirname, '../src/icons/example.mdx')
      );
      console.log('更新成功！');
    } else {
      console.log('输入的地址不正确');
    }
  });
} else {
  console.log('输入的地址不正确');
}

function delDir(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      let curPath = path + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath); //递归删除文件夹
      } else {
        fs.unlinkSync(curPath); //删除文件
      }
    });
  }
}
