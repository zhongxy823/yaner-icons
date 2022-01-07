#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import { fetchXml } from 'iconfont-parser';
import {delDir, generateCase} from './utils'

const option = process.argv.splice(2);
if (option.length && option[0].includes('//at.alicdn.com/')) {
  const uri = option[0];

  fetchXml(`https:${uri}`).then((result) => {
    delDir(path.resolve(__dirname, '../src/icons'));
    let indexTSResult = ''
    result.svg.symbol.forEach((item) => {
      const iconId = item.$.id;
      let data = fs.readFileSync(__dirname + '/template.tsx', {
        encoding: 'utf-8',
        flag: 'r',
      });
      data = data.toString().replace(/#iconContent#/g, generateCase(item));
      indexTSResult = indexTSResult + `export {default as ${iconId}} from './${iconId}'\n`;
      fs.writeFileSync(
        path.resolve(__dirname, `../src/icons/${iconId}.tsx`),
        data
      );
    });
    fs.writeFileSync(
      path.resolve(__dirname, '../src/icons/index.ts'),
      indexTSResult
    );

  }).catch((e) => {
    console.error(e.message || 'Unknown Error');
    process.exit(1);
  });
} else {
  console.log('输入的地址不正确');
}

