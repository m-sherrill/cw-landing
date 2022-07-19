import React from 'react'
import { Footer, Icon } from 'react-materialize'

const FooterFunction = () => {
  return (
      <Footer
    className="footer"
    copyrights="ⓒ 2022 Cartridge World NW"
    links={<ul><li><a className="white-text text-darken-2" href="#!">Link 1</a></li><li><a className="white-text white-darken-2" href="#!">Link 2</a></li><li><a className="white-text text-darken-2" href="#!">Link 3</a></li></ul>}
  >
    <p className="yellow-text text-lighten-3">
      <h5>Serving the Puget Sound and Spokane Areas</h5>
      <h6>We look forward to working with you!</h6>
    </p>
  </Footer>
  )
}

export default FooterFunction