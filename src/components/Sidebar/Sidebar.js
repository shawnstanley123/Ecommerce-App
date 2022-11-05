import React,{useState,useEffect} from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'

export default function Sidebar(props) {
const [list,setList]=useState([]);

const getData = () =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0a9da94ceemsh836942c187408cbp16aaeajsn9157cc9b68d5',
            'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
        }
    };
    
    fetch("https://dummyjson.com/products/categories")
  .then((res) => res.json())
  .then((json) => setList(json));
    }
    useEffect(()=>{
        getData();
      },[])
 
  
const toggle = () =>{
  props.setSopen(!props.sopen)
}
    //   let keys=Object.keys(list.categories)
    //   console.log(keys)
    
  return (
    <div className="sidebar">
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
</style>
        <div className="list">
        {list.map((id)=>
                {return( 
                    
                <Link to={`category/${id}`}>
                  <div className="list-item" onClick={toggle}>
                  
            <h5 style={{fontSize:"20px",fontWeight:"800",fontFamily:"Open Sans, sans-serif",paddingLeft:"60px",outline:"none"}}>{id}</h5>
            </div>
            </Link>
            
                 )}
                  
                )}
                
                
           
           
        </div>
    </div>
  )
}
