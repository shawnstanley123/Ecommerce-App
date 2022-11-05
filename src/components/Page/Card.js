import React from 'react';
import "./Page.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function BasicExample(props) {
 
  return (
    <Card style={{ width: '19rem'}}>
      <Card.Img variant="top" src={props.thumbnail} style={{height:"180px"}} className="image" />
      <Card.Body>
        <Card.Title style={{height:"60px"}}>{props.title}</Card.Title>
        
        <Card.Title >${props.price}</Card.Title>
        <div className="flex" style={{display:"flex",justifyContent:"space-between"}}>
        <button variant="primary" className='button' style={{color:"white",textDecoration:"none"}}>
          <Link to={`/category/${props.pid}/${props.cid}`} style={{textDecoration:"none",color:"inherit"}}>
          Add to cart
          </Link>
          </button>
<Card.Title style={{top:"5px",fontSize:"15px",color:"green"}}>{props.discountPercentage}% off</Card.Title>
        </div>
        
      </Card.Body>
    </Card>
  );
}

export default BasicExample;