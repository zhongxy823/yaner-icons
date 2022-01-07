#!/usr/bin/env node
const request = require('request');
const fs = require('fs');
const path = require('path');

const option = process.argv.splice(2);

if (option.length && option[0].includes('//at.alicdn.com/')) {
  const uri = option[0];

  // 改写 IconFont.jsx 文件
  fs.readFile(
    path.resolve(__dirname, '../src/components/IconFont.jsx'),
    function (err, data) {
      if (err) {
        return console.log(err);
      }
      const result = data
        .toString()
        .replace(/uri=\'.+?\'/g, `uri='${uri}'`);
      fs.writeFile(
        path.resolve(__dirname, '../src/components/IconFont.jsx'),
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
      let indexJSResult = '';
      delDir(path.resolve(__dirname, '../src/icons'));
      data.forEach(async (e) => {
        // index.js
        indexJSResult =
          indexJSResult + `export {default as ${e}} from './${e}'\n`;

        let data = await fs.readFileSync(__dirname + '/template.jsx', {
          encoding: 'utf-8',
          flag: 'r',
        });
        data = data.toString().replace(/iconName/g, e);
        await fs.writeFileSync(
          path.resolve(__dirname, `../src/icons/${e}.jsx`),
          data
        );
      });

      // index.js
      fs.writeFileSync(
        path.resolve(__dirname, '../src/icons/index.js'),
        indexJSResult
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
