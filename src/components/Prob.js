import React from 'react'

const Prob = ({img}) => (
  <section className="bg-map position-relative">
    <div className="row">
      <div className="col-lg-6 col-md-8 mb-5">
        <div className="rec-card p-3">
          <h2 className="pro ms ml-5">The Problem with Logistics</h2>
          <div className="mb-5 mt-4 ml-5 mr-5 de">
            <p>
            Sending parcels from point A to point B is done by centralized logistics providers like DHL, UPS or even government run services like USPS. 
            </p>
            <p>
            Transporting an item internationally will require you to fill in some tedious paper-work and definitely pay some pocket-itching bucks. Your friend on the other end will also probably wait for about 30 days before receiving the parcel you sent through. The same goes for e-commerce logistics and other supply chain related businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="ml-auto col-lg-6 col-md-8 mt-5" style={{zIndex: 999}}>
        <div className="rec-card p-3 text-right">
          <h2 className="pro ms mr-5 text-right">The New Economy</h2>
          <div className="mb-5 mt-4 ml-5 mr-5 de text-right">
            <p>
            Carrier is a decentralized platform by Witbex that incorporates modern integrated technology such as Deep learning, IoT and Block chain which allows individuals and organizations the ability to send and receive freight/goods/packages  around the world with ease  with a fast , reliable and reliable and secured manner using people in a transit as a  proxy. In a decentralized ecosystem where anyone and everyone can be a carrier, this network will allow the safe and secure transit of goods from one part of the globe to another in the shortest possible time.  
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row align-items-center justify-content-center flex-lg-row flex-column-reverse  il">
      <div className="col-lg-3 pr-5 nb">
        <img src={img.playBtn} alt="playBtn" className="Play_btn img-fluid float-right mr-5" />
      </div>
      <div className="col-lg-3">
        <p className="send p-lg-0 p-5 ">
          Sending parcels from point A to point B is 
          done by centralized logistics providers like DHL, 
          UPS or even government run services like USPS. 
        </p>
      </div>
      <div className="col-lg-6">
        <img src={img.Illstr} srcSet={`${img.illstr2x} ${img.illstr3x}`} alt="illstration" className="img-fluid" />
      </div>
    </div>
  </section>
);

export default Prob;