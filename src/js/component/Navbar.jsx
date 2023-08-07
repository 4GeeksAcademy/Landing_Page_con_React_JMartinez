import React from "react";


const MyCard = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid bg-secondary">
          <a className="navbar-brand text-white bg-secondary" href="#"><strong>Start Boostrap</strong></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end bg-body-secondary" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <a className="nav-link active text-white bg-secondary" aria-current="page " href="#">Home</a>
              <a className="nav-link text-white bg-secondary" href="#">Features</a>
              <a className="nav-link text-white bg-secondary" href="#">Pricing</a>
              <a className="nav-link disabled text-white bg-secondary" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </div>
      </nav>
    );
    }

export default MyCard; 

