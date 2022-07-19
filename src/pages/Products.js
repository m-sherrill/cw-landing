import React from 'react'
import { Container, Row, Col } from 'react-materialize'

const Products = () => {
  return (
    <div className="order" id="products">
    <Row>
    <h1>Products and Services</h1>
      </Row>
      <Row>
    <Col s={12} m={4}>
      <img className="orderImage" src="./assets/images/image.jpg" />
  </Col>
    <Col s={12} m={8}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<br />
<br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<br />
  </Col>
  
  </Row>
  </div>
  )
}

export default Products