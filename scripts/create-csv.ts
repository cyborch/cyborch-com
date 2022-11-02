#!/usr/bin/env npx ts-node

import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'json2csv';
import { experience } from '../src/lib/experience';

function createCsv(): string {
  const flattened = experience.flatMap(e => e)
  const fields = ['title', 'from', 'to', 'company', 'description', 'keywords']
  const opts = { fields }
  return parse(flattened, opts)
}

const folder = path.resolve(__dirname + '/../public');
fs.mkdirSync(folder, { recursive: true });
fs.writeFileSync(
  folder + '/cv.csv',
  createCsv(),
  {
    encoding: 'utf8',
    flag: 'a+',
  }
)
console.log(`Created ${folder}/cv.csv!`);
