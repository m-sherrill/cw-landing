import React from 'react'
import { Container, Row, Col, Button } from 'react-materialize'

const Order = () => {
  return (
    <div className="order">
    <Container >
    <Row>
    <Col>
    <h1>Order Online</h1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<br />
<br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<br />
<br />
      <Button size="sm" href="http://cworldredmond.com">Order Now</Button>
  </Col>
  <Col xs="auto" md={4}>
      <img className="orderImage" src="./assets/images/image.jpg" />
  </Col>
  </Row>
  </Container>
  </div>
  )
}

export default Order