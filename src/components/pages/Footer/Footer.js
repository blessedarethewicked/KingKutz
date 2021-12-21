import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  // FaYoutube,
  // FaTwitter,
  // FaLinkedin
} from 'react-icons/fa';
import { BiCut } from 'react-icons/bi';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Address </h2>
            <Link to={
              '//www.google.com/maps/place/90+Midland+Rd,+Bedford+MK40+1QH/@52.1355309,-0.476086,17z/data=!4m13!1m7!3m6!1s0x4877b6ce4963c343:0x6436b246fe2ae330!2s90+Midland+Rd,+Bedford+MK40+1QH!3b1!8m2!3d52.1355309!4d-0.4738973!3m4!1s0x4877b6ce4963c343:0x6436b246fe2ae330!8m2!3d52.1355309!4d-0.4738973'
            }>90 Midland Road</Link>
            <Link to={
              '//www.google.com/maps/place/90+Midland+Rd,+Bedford+MK40+1QH/@52.1355309,-0.476086,17z/data=!4m13!1m7!3m6!1s0x4877b6ce4963c343:0x6436b246fe2ae330!2s90+Midland+Rd,+Bedford+MK40+1QH!3b1!8m2!3d52.1355309!4d-0.4738973!3m4!1s0x4877b6ce4963c343:0x6436b246fe2ae330!8m2!3d52.1355309!4d-0.4738973'
            }>Bedford</Link>
            <Link to={
              '//www.google.com/maps/place/90+Midland+Rd,+Bedford+MK40+1QH/@52.1355309,-0.476086,17z/data=!4m13!1m7!3m6!1s0x4877b6ce4963c343:0x6436b246fe2ae330!2s90+Midland+Rd,+Bedford+MK40+1QH!3b1!8m2!3d52.1355309!4d-0.4738973!3m4!1s0x4877b6ce4963c343:0x6436b246fe2ae330!8m2!3d52.1355309!4d-0.4738973'
            }>Bedfordshire</Link>
            <Link to={
              '//www.google.com/maps/place/90+Midland+Rd,+Bedford+MK40+1QH/@52.1355309,-0.476086,17z/data=!4m13!1m7!3m6!1s0x4877b6ce4963c343:0x6436b246fe2ae330!2s90+Midland+Rd,+Bedford+MK40+1QH!3b1!8m2!3d52.1355309!4d-0.4738973!3m4!1s0x4877b6ce4963c343:0x6436b246fe2ae330!8m2!3d52.1355309!4d-0.4738973'
            }>MK40 1QH</Link>
          </div>
          
          <div className='footer-link-items'>
            <h2>Opening Hours </h2>

            <Link to='/'>Mon : 10am-7pm</Link>
            <Link to='/'>Tue : 10am-7pm</Link>
            <Link to='/'>Wed : 10am-7pm</Link>
            <Link to='/'>Thu : 10am-7pm</Link>
            <Link to='/'>Fri : 10am-7pm</Link>
            <Link to='/'>Sat : 10am-7pm</Link>
            <Link to='/'>Sun : 11am-4pm</Link>

          </div>
          
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>07957146400</Link>
            {/* <Link to='/' >d.t.njambi@gmail.com</Link> */}
            <a href="mailto:d.t.njambi@gmail.com">d.t.njambi@gmail.com</a>

          </div>

          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={
                '//www.instagram.com/official_kingkutz/'
              }>Instagram</Link>
            <Link to={
                '//www.facebook.com/pages/category/Barber-Shop/King-Kutz-111347514359243/'
              }>Facebook</Link>
          </div>
          
        </div>
        <div className='footer-link-wrapper'>

        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <BiCut className='navbar-icon' />
              KING KUTZ
            </Link>
          </div>
          <small className='website-rights'>KING KUTZ © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={
                '//www.facebook.com/pages/category/Barber-Shop/King-Kutz-111347514359243/'
              }
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.instagram.com/official_kingkutz/'
              }
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            {/* <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
