import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Carsel() {
  return (
    <Carousel>
      <Carousel.Item>
      <img
          height="400px"
          width="950px"
          src="https://i.ytimg.com/vi/gjHfGntnl90/maxresdefault.jpg"
          style={{ float: 'left', marginRight: '20px' }}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3><b>Pubs ONE PIECE</b></h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
         
          height="400px"
          width="950px"
          src="https://syfantasy.fr/uploads/images/chroniqueurs/alex-moon/p000-cov-071618-splash.jpg"
          style={{ float: 'left', marginRight: '20px' }}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3><b>Team Naruto Goku luffy</b></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
         
          height="400px"
          width="950px"
          src="https://i.ytimg.com/vi/jIOAKF_VGOs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCxRohLeH4iVl-yjI_LNjbV_smrvA"
          style={{ float: 'left', marginRight: '20px' }}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3><b>Regarder anime sans pub</b></h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carsel