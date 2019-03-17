import React from 'react';

const Header = ({img}) => (
  <header className="m-header">
    <nav className="navbar navbar-expand-xl navbar-light my-5">
      <a className="navbar-brand" href="/#">
        <img 
          src={img.Logo}
          srcSet={`${img.logo2x}, ${img.logo3x}`}
          className="Logo" 
          alt="logo"
          width="30" height="30"
        />          
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mx-auto mt-2 mt-lg-0" id="menu">
          <li className="nav-item active">
            <a className="nav-link" href="/#">About <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">How It Works</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">Platform</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">Whitepaper</a>
          </li>
        </ul>
        <ul className="navbar-nav mt-2 mt-lg-0">
          <li className="nav-item active mx-sm-3 my-2">
            <button type="button" className="btn btn-pink-barge">
              <span className="badge badge-light rounded-circle mr-1" id="circle"> </span> Pre-order E-bags 
            </button>
          </li>
          <li className="nav-item mx-sm-3 my-2">
            <button type="button" className="btn btn-pink-barge">
              <span className="badge badge-light rounded-circle mr-1" id="circle"> </span> Download App 
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <div style={{marginTop: '230px', marginBottom: '200px'}}>
      <h1 className="position-relative">
        <span className="evolve">EVOLVING THE WAY WE</span><br/>
        <span className="text-capitalize position-absolute ho">home</span><br/>
        <span className="te">Travel & Explore</span>
      </h1>
      <div className="user pl-4">
        <button type="button" className="btn btn-lg m-5 py-3 px-3 logi">Login</button>
        <button type="button" className="btn btn-lg m-5 py-3 px-3 sign">Sign Up</button>
      </div>
    </div>
  </header>
);

export default Header;