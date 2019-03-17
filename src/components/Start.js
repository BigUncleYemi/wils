import React  from 'react'

const Start = ({img}) => (
  <section className="bg-gradients">
    <div className="row start-con">
      <div className="col-sm-12 my-5 text-center">
        <h3 className="my-5 d-flex flex-row align-items-center justify-content-center">
          <span className="who text-white">Start using </span>
          <span className="carrier text-white"><img src={img.Logo} alt="logo" height="40" width="40" />arrier</span>
        </h3>
        <div className="m">
          <p className="feature-text p-0 mx-auto py-3 text-white" style={{maxWidth: '460px'}}>
            Sending parcels from point A to point B is 
            done by centralized logistics providers like DHL, 
            UPS or even government run services like USPS. 
          </p>
        </div>
        <div className="d-flex flex-row align-items-center my-0 justify-content-center">
          <div className="start">
            <button type="button" className="btn btn-lg m-lg-5 m-3 py-3 px-3 logi reverse float-left">Login</button>
            <button type="button" className="btn btn-lg m-lg-5 m-3 py-3 px-3 sign reverse float-right">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Start;