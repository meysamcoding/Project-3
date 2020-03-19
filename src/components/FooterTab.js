import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTwitter,
  faEnvelope

} from '@fortAwesome/free-brands-svg-icons';

export default function footer() {
  return (
    <div className="FooterTabs-container">
      <a className="grey-text text-lighten-4 right" href="#!">Connect with us</a>
   
  links={
    <ul>
      <li><a className="YouTube" href="#!"><FontAwesomeIcon icon={faYoutube} size="2x"></FontAwesomeIcon></a></li>
      <li><a className="Facebook" href="#!"><FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon></a></li>
      <li><a className="Instagram" href="#!"><FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon></a></li>
      <li><a className="Twitter" href="#!"><FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon></a></li>
      <li><a className="Email" href="#!"><FontAwesomeIcon icon={faEnvelope} size="2x"></FontAwesomeIcon></a></li>
    </ul>  
     }

    <h5 className="white-text">© 2020 Copyright</h5>
   </div>
  )
}
