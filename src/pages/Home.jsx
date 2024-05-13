import React, { useEffect } from 'react'
import Slider from '../UI/Slider'
import '../pagecss/Home.css';
import slideleft from '../assets/slideleft.webp';
import slideright from '../assets/slideright.avif';
import rotatepng from '../assets/rotatepng.avif'
import Aos from 'aos';
import "aos/dist/aos.css";

const Home = () => {

  useEffect(() => {
    Aos.init({
      offset: 400,
      duration: 600,
      easing: "ease-in"
    });
  }, [])
  return (
    <>
      <Slider />
      <section className="sec-padding">
        <div className="container text-center">
          <h2 className="text-dam lt-2 fs-2">PRECISION</h2>
          <div className="row justify-content-center">
            <div className="col-8">
              <p className="normal mt-2" style={{ color: "rgb(80, 77, 77)", letterSpacing: ".2px" }}>OMEGA ambassador Rory McIlroy has spent more than a decade at the summit of his sport, claiming multiple wins and setting the benchmark for precision, time and time again. Matching those standards of accuracy, Rory wears a Seamaster Aqua Terra Co-Axial Master Chronometer. This exacting timepiece is a perfect tribute to the game of golf, where attention to detail and meticulous levels of performance are essential to success.</p>

              <div className="d-flex justify-content-center mt-4">
                <button className="buttonread">
                  <span className="buttonread_lg">
                    <span className="buttonread_sl"></span>
                    <span className="buttonread_text">READ MORE</span>
                  </span>
                </button>
              </div>


            </div>
          </div>
        </div>
      </section>

      <section className="sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12 col-12">
              <div className="position-relative">
                <div className="card overflow-hidden featurecard rounded-0 border-0" style={{ height: "450px" }} >
                  <img src={slideleft} className="img-fluid object-fit-cover h-100" alt="" />
                  <div className="position-absolute playicon top-50 start-50" style={{ transform: "translate(-50%,-50%)" }}>
                    <i class="bi bi-play-fill  text-white" style={{ fontSize: "40px" }}></i>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-12">
              <div className="card rounded-0 border-0"  style={{ height: "450px" }}>
                <img src={slideright} className="img-fluid object-fit-cover h-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-padding overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 col-sm-12 col-12">
              <h2 className="text-dam lt-2 fs-2">FIND THE <br /> PERFECT GIFT</h2>
              <p className="normal mt-4" style={{ color: "rgb(80, 77, 77)", letterSpacing: ".2px" }}>If you know who you're buying for and why, our Gift Finder will help you find the perfect present in just a few clicks.</p>
              <button className="buttonread mt-4">
                <span className="buttonread_lg">
                  <span className="buttonread_sl"></span>
                  <span className="buttonread_text">FIND YOUR GIFT</span>
                </span>
              </button>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12 col-12">
              <div className="d-flex justify-content-center " style={{ height: "500px" }}>
                <div className="image-container">
                  <img src={rotatepng} className="img-fluid h-100 rotateani position-relative" alt="" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-padding">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-5 col-md-6 col-sm-12 col-12">
              <h2 className="text-dam lt-2 fs-2">SEAMASTER DIVER <br /> 300M “PARIS 2024”</h2>
              <p className="normal mt-4" style={{ color: "rgb(80, 77, 77)", letterSpacing: ".2px" }}>The dreams of gold have started, as OMEGA launches a sporty timepiece dedicated to the Olympic Games Paris 2024.</p>
              <button className="buttonread mt-4">
                <span className="buttonread_lg">
                  <span className="buttonread_sl"></span>
                  <span className="buttonread_text">DISCOVER THE WATCH</span>
                </span>
              </button>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-12 col-12">
              <div className="d-flex justify-content-start " style={{ height: "500px" }}>
                <div className="">
                  <img src="https://www.omegawatches.com/media/wysiwyg/52221422004001.jpg" className="img-fluid h-100" alt="" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="text-center">
                <span className="text-secondary lt-2 fs-5 py-3" style={{ fontWeight: "490" }}>NATO STRAPS</span>
                <h1 className="text-dam lt-2 fs-1 my-3 fw-normal">A NEW LOOK FOR YOUR WATCH</h1>
                <p className="text-secondary text-center normal">Your watch and strap should go together perfectly, but that doesn't mean you can't experiment with different combinations. Why not mix things up and see what happens? You may discover a look that's as individual as you are.

                </p>

                <button className="buttonread mt-4">
                  <span className="buttonread_lg">
                    <span className="buttonread_sl"></span>
                    <span className="buttonread_text">SHOP THE COLLECTION</span>
                  </span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="sec-padding">
          <div className="container">
             <div className="row">
                <div className="col-lg-8">
                    <div style={{height:"440px"}}>
                        <img src="https://www.omegawatches.com/media/wysiwyg/pushNato-ambiancev3-2-3-large.jpg"  className="img-fluid h-100 w-100" alt="" />
                    </div>
                </div>
                <div className="col-lg-4">
                <div style={{height:"440px"}}>
                        <img src="https://www.omegawatches.com/media/wysiwyg/image2-large.jpg"  className="img-fluid h-100" alt="" />
                    </div>
                </div>
             </div>
          </div>
      </section>
    </>
  )
}

export default Home