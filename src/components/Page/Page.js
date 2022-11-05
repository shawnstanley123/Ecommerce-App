import React,{useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import CircularProgress from '@mui/material/CircularProgress';
import Button from 'react-bootstrap/Button';
import './Page.css'
import Card from './Card'
export default function Page() {
const [aobject,setAobject]=useState([])
const [loading,setLoading]=useState();
const [yes,setYes]=useState(false);
  const {id}=useParams();
  
  const getData = () =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0a9da94ceemsh836942c187408cbp16aaeajsn9157cc9b68d5',
            'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
        }
    };
    
    fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const newproduct = data.products.filter((item)=>item.category===id);
  setLoading(true);
  setAobject(newproduct)
  setYes(false)
  console.log(newproduct.length)
  if(newproduct.length===0)
setYes(true)
  }
 
  );
  
    }
    
    useEffect(()=>{
        getData();
        
      },[id])
 
  return (
    <div className="page" style={{background:"",marginLeft:"5px",marginTop:"65px",height:"960px"}}>
      {yes&&(<h1 style={{paddingTop:"312px",marginLeft:"500px"}}>More items coming soon...</h1>)}
     <div className="cards" style={{paddingTop:"80px"}}>
     {loading?aobject.map((item)=>(<div className="card" >
      {/* <h5 style={{marginLeft:"400px"}}>{item.title}</h5>
      <img src={item.thumbnail}/> */}
      <Card thumbnail={item.thumbnail} title={item.title} description={item.description} price={item.price} cid={item.id} pid={id} discountPercentage={item.discountPercentage}/>
      </div>
      )
      ): (<CircularProgress color="inherit" style={{position:"absolute",marginTop:"35%",marginLeft:"50%"}} />)}
       
     </div>
      
      </div>
  )
}
