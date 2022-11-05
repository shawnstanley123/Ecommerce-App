import React from 'react'

export default function Carousel(props) {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style={{height:"50%",width:"40%",border:"1px solid #aaa",marginTop:"30px"}}>
    <div class="carousel-inner" style={{height:"100%",width:"100%",border:"1px solid #aaa"}}>
      <div class="carousel-item active">
        <img class="d-block w-100" src={props.images} alt="First slide" style={{height:"479px"}}/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src={props.images} alt="Second slide" style={{height:"479px"}}/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src={props.images} alt="Third slide" style={{height:"479px"}}/>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  )
}
