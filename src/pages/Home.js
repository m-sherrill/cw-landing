import React from 'react'
import { Slide, Caption, Slider, Container, Button } from 'react-materialize'

const Home = () => {
  return (

<Slider
  fullscreen={false}
  options={{
    duration: 500,
    height: 400,
    indicators: true,
    interval: 6000
  }}
>
  <Slide image={<img alt="" src="./assets/images/54292.1.jpg"/>}>
    <Caption placement="right">
      <h3>
      Serving the Puget Sound<br/> and Spokane Areas
      </h3>
      <h5 className="light grey-text text-lighten-3">
      <Button>Learn more about our products and services</Button>
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="./assets/images/pexels-george-milton-7014401two.jpg"/>}>
    <Caption placement="left">
      <h3>
        Order Online Now
      </h3>
      <h5 className="light grey-text text-lighten-3">
        <Button>Click here to start</Button>
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="./assets/images/pexels-george-milton-7014401.jpg"/>}>
    <Caption placement="right">
    <h3>
        We would love to hear from you!
      </h3>
      <h5 className="light grey-text text-lighten-3">
        <Button>Contact us today </Button>
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://lorempixel.com/580/250/nature/4"/>}>
    <Caption placement="center">
      <h3>
        This is our big Tagline!
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Here's our small slogan.
      </h5>
    </Caption>
  </Slide>
</Slider>

  )
}

export default Home