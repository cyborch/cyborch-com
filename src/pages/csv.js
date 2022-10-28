import React, { useEffect } from 'react';
import Layout from '../components/layout';
import { experience } from '../lib/experience';
import { parse } from 'json2csv';
import './csv.styl';

function createCsv() {
  const flattened = experience.flatMap((e) => e);
  const fields = ['title', 'from', 'to', 'company', 'description', 'keywords'];
  const opts = { fields };
  return parse(flattened, opts);
}

function downloadFile() {
  const element = document.createElement("a");
  const file = new Blob([createCsv()],
              {type: 'text/csv;charset=utf-8'});
  element.href = URL.createObjectURL(file);
  element.download = "anders-borch-cv.csv";
  document.body.appendChild(element);
  element.click();
}

export default function Index() {
  useEffect(() => {
    downloadFile();
  }, []); 

  return (
    <Layout>
      <div id="csv">
        <p>
          Download should begin immediately, if not, then 
          press <a href="?" onClick={downloadFile}>here</a>.
        </p>
      </div>
    </Layout>
  );
}
