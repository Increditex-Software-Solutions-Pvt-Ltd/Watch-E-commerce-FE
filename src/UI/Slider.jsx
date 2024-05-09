import React from 'react'

const Slider = () => {
  return (
    <div>
<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
  <div className="carousel-inner">
    <div className="carousel-item active" style={{height:"450px"}}>
      <img src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw68b7111f/images/homepage/desktop/Wedding-Collection-D.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item"style={{height:"450px"}}>
      <img src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw9c6c29b4/images/homepage/desktop/Poze_Mens_D.jpg" className="d-block w-100 h-100" alt="..."/>
    </div>
    <div className="carousel-item"style={{height:"450px"}}>
      <img src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw9a40b6ca/images/homepage/desktop/NewArrivals-D.jpg" className="d-block w-100 h-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider