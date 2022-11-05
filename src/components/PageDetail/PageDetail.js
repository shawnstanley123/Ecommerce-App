import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Carousel from './Carousel';
import Rating from '@mui/material/Rating';
import './PageDetail.css'
export default function PageDetail() {
    const [pdetail,setPdetail]=useState({});
    const [loading,setLoading]=useState();
    const [value, setValue] = useState(4);
    const {id}=useParams();
  console.log(pdetail.rating)

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
       
        const newproduct = data.products.find((item)=>item.id===parseInt(id));
      setLoading(true);
      
      setPdetail(newproduct)
      }
     
      );
      
        }
        
        useEffect(()=>{
            getData();
            
          },[])
         
          const add=()=>{
            window.alert("Product sucessfully added")
          }
  return (

    <div className="page-detail" style={{background:"",marginLeft:"5px",marginTop:"65px",height:"960px",display:"flex"}}>
   
       <Carousel images={pdetail.thumbnail} style={{marginTop:"30px"}}/>
       <div className="details" style={{marginTop:"50px",marginLeft:"40px"}}><h2>{pdetail.brand}</h2>
        <h3>{pdetail.title}</h3>
                <p>{pdetail.description}</p>
                <h6>${pdetail.price}</h6>
                <Rating name="simple-controlled" defaultValue={parseInt(pdetail.rating)} precision={0.5}
                 value={value}
                 onChange={(event, newValue) => {
                   setValue(newValue)}}
                readOnly style={{marginLeft:"-5px"}}/>
                <p style={{fontSize:"13px"}}>Stock:  {pdetail.stock}</p>
                
                <button onClick={add}>Add to Cart</button>
                
                </div>
                
               
               
                
        </div>
  )
}
