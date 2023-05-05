import "./App.css";
import Datails from "./Datails";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useParams,
} from "react-router-dom";
import ImageDetails from "./ImageDetails";
import { useEffect, useState } from "react";

function App() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch('https://api.tvmaze.com/search/shows?q=all').then(res=>{return res.json()}).then(res=>{
      setData(res);
    }
    );
  },[])
  console.log(data);

    
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Datails data={data}/>} />
        <Route path="/imageDetails/:id" element={<ImageDetails  data={data}/>} />
      </Routes>
    </div>
  );
}

export default App;
