import React, { Component } from 'react'
import Rout from './Rout'
import Footer from './Footer'


export class About extends Component {
  render() {
    return (
      <div>
        <div style={{ backgroundImage: 'url("https://thumb.canalplus.pro/http/unsafe/866x322/filters:quality(80)/canalplus-cdn.canal-plus.io/p1/brand/19748409/canal-ouah_50036/MEASOIR/Mangas_HeadersMyCanal_1920x848_2021-01150_VinlandSaga-S1")', backgroundSize: 'cover',backgroundPosition: '50%', minHeight: '50vh' }} class="card text-center">
        <Rout />
        <div className="card-body">

        </div>
      </div>
      <div className="card-body"></div>
      <center>
      <br/>
      <h5 className="card-title text-black"><ins>About Us</ins></h5> <br/> <br/>
          <p className="card-text text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus neque vel blandit fermentum.
            Nulla facilisi. Sed non odio at justo tristique scelerisque.
          </p>
          <p className="card-text text-black">
            Proin tincidunt sapien eu mauris varius, ac luctus ligula ultricies. Integer pharetra justo vel ante
            volutpat, non auctor sapien tempor.
          </p>
          </center>
          <br/> <br/> <br/>

          <Footer />
      </div>
      
    )
  }
}

export default About