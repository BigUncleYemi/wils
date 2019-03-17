import React from 'react'

const About = ({img}) => (
  <section className=" bg-svg">
    <div className="d-flex container flex-row" style={{paddingBottom: '150px'}}>
      <div className="feature mx-4">
        <div className="cir"></div>
        <div className="mt-5">
          <p className="feature-text">
          Sending parcels from point A to point B is 
          done by centralized logistics providers like DHL, 
          UPS or even government run services like USPS. 
          </p>
          <button className="btn text-capitalize my-5 re">read more</button>
        </div>
      </div>
      <div className="feature mx-4">
        <div className="cir"></div>
        <div className="mt-5">
          <p className="feature-text">
          Sending parcels from point A to point B is 
          done by centralized logistics providers like DHL, 
          UPS or even government run services like USPS. 
          </p>
          <button className="btn text-capitalize my-5 re">read more</button>
        </div>
      </div>
      <div className="feature mx-4">
        <div className="cir"></div>
        <div className="mt-5">
          <p className="feature-text">
          Sending parcels from point A to point B is 
          done by centralized logistics providers like DHL, 
          UPS or even government run services like USPS. 
          </p>
          <button className="btn text-capitalize my-5 re">read more</button>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 text-center">
        <h3 className="my-5 d-flex flex-row align-items-center justify-content-center">
          <span className="who">Who's using </span>
          <span className="carrier"><img src={img.Logo} alt="logo" height="40" width="40" />arrier</span>
        </h3>
        <div className="my-5">
          <p className="feature-text p-0 mx-auto py-5" style={{width: '310px'}}>
            Sending parcels from point A to point B is 
            done by centralized logistics providers like DHL, 
            UPS or even government run services like USPS. 
          </p>
        </div>
        <div className="d-flex flex-row align-items-center my-0 justify-content-center">
          {
            [
              {src: img.amazon, srcSet: `${img.amazon2x} ${img.amazon3x}`, name: 'amazon'},
              {src: img.walmart, srcSet: `${img.walmart2x} ${img.walmart3x}`, name: 'walmart'},
              {src: img.okreeka, srcSet: `${img.okreeka2x} ${img.okreeka3x}`, name: 'okreeka'},
              {src: img.zalando, srcSet: `${img.zalando2x} ${img.zalando3x}`, name: 'zalando'},
              {src: img.Hm, srcSet: `${img.Hm2x} ${img.Hm3x}`, name: 'Hm'},
            ].map((item, index) => <img src={item.src} srcSet={item.srcSet} alt={item.name} className="img-fluid px-4"/>)
          }
        </div>
      </div>
    </div>
  </section>
);

export default About;