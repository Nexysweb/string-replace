import React, { useState } from 'react';

import * as U from '@nexys/uibs4';
import { replaceInFile } from './lib/replace';
import { toUrl } from './export';

const { Form } = U;

const mapDefault = {a: 'replaced a', b: 'replaced b'};
const nameDefault = `default-i18n('a') and i18n('b') with\nbreak line`;
const filename = 'en.html';

/**
 * read file content, wrapped in future
 * @param  event (result of input type file)
 * @return Promise(file content)
 */
const readFile = async event => new Promise((resolve, reject) => {
  const file = event.target.files[0];

  const fileReader = new FileReader();
  fileReader.onloadend = a => {
    const data = fileReader.result;
    return resolve(data);
  };
    
  // this function calls `onloadend`
  fileReader.readAsText(file);
});

function App() {
  const [ name, setName ] = useState(nameDefault);
  const [ dict, setDict ] = useState(JSON.stringify(mapDefault));
  //const [ result, setResult ] = useState('');
  const [ dl, setDl ] = useState(null);

  const handleSubmit = evt => {
    evt.preventDefault();

    const jDict = JSON.parse(dict);

    const r = replaceInFile(name, jDict);

    // display button to download
    setDl(toUrl(r));
    // displays result
    //setResult(r);
  }

  const loadFile = evt => {
    // here loader if necessary

    readFile(evt).then(data => {
      setName(data);
    });
  }

  const renderLink = () => {
    if (!dl) {
      return null;
    }

    return <a href={dl} download={filename}>Download</a>
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            {/*<Form.Textarea name="name" value={name} onChange={e => setName(e.value)}/>*/}
            <input type="file" onChange={a => loadFile(a)}/>
          </div>

          <div className="col-md-6">
            <Form.Textarea name="dict" value={dict} onChange={e => setDict(e.value)}/>
          </div>
        </div>
        <input type="submit" className="btn btn-primary"/>
      </form>
      {/*renderResult()*/}
      {renderLink()}
    </div>
  );
}

export default App;
