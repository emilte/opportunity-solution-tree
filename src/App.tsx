import { FieldSet, Record } from 'airtable';
import { useEffect, useState } from 'react';
import { getData } from './api';
import './App.css';


function App() {

  const [data, setData] = useState<Record<FieldSet> | undefined>(undefined);

  useEffect(() => {
    getData().then((data)=>setData(data));
  }, []);

  if (!data) {
    return <></>;
  }
  
  const d = JSON.parse(data?.fields.data as string);
  console.log(d);
  
  
  
  return (
    <>
      <div className='layer layer-upper'/>
      <div className='layer layer-middle'/>
      <div className='layer layer-bottom'/>
      <div>
        <button>
        post
        </button>
        <button>
        post
        </button>
      </div>
    </>
  );
}

export default App;
