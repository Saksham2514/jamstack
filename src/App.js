import React , {useEffect, useState} from 'react';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';

function App() {
const [links, setLinks] = useState([])

  const loadLinks = async ()=>{

  try{  const res = await fetch("/api/getLinks");
    const links = await res.json();
    setLinks(links)
  }  catch (err){
    console.error(err);
  }


  }
  
  useEffect(() => {
    loadLinks()
  }, [])
  

  return (
    <div className="container py-5">
      <h1 className=" mb-5">List O' Links</h1>
      <LinkForm  refreshLinks={loadLinks}/>
      <LinkList links={links} refreshLinks={loadLinks}/>
    </div>
  );
}

export default App;
