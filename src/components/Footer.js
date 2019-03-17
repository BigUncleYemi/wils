import React from 'react'

const Footer  =  ( ) => (
  <footer className="px-5 py-5 d-flex flex-row align-items-center bg-gradients">
    <p className="text-white m-0"> A product of  Witbex Inc., Delaware, USA</p>
    <ul className="nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="/#">
          <i className="fab fa-facebook-f" aria-hidden="true"></i>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">
          <i className="fab fa-instagram" aria-hidden="true"></i>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">
          <i className="fab fa-twitter" aria-hidden="true"></i>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">
          <i className="fab fa-github" aria-hidden="true"></i>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">
          <i className="fab fa-youtube" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;