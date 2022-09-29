import { FieldSet, Record } from 'airtable';
import { useEffect, useState } from 'react';
import { getData } from './api';
import './App.css';
import { Background, RecursiveTree } from './Components';
import { TreeRoot } from './Components/RecursiveTree/RecursiveTree';



function App() {

  const [data, setData] = useState<Record<FieldSet> | undefined>(undefined);

  useEffect(() => {
    getData().then((data)=>setData(data));
  }, []);

  
  if (!data) {
    return <></>;
  }
  
  /** Parse json data to object. */
  const d: TreeRoot = JSON.parse(data?.fields.data as string);

  return (
    <>
      <Background/>
      <div className='app--tree_wrapper'>
        <RecursiveTree data={d}/>
      </div>
    </>
    
  );
  
}

export default App;
