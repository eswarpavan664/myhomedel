import React from 'react'

function Footer() {
  return (
    <footer>
      <div className='container mt-5'>
        <div className='row text-center'>

          <div className='col-md-6'>
            <h1>Food Mart</h1>
          </div>

          <div className='col-md-6'>
            <div className='btn-group'>
              <button className='btn'>India</button>
              <button className='btn'>English</button>
            </div>
          </div>

        </div>

        <div className='row text-center'>

          <div className='col-6 col-md-2 mb-4'>
            <h6>ABOUT ZOMATO</h6>
            <p className='m-0 text-weight-light'>Who We Are</p>
            <p className='m-0 text-weight-light'>Blog</p>
            <p className='m-0 text-weight-light'>Work With Us</p>
            <p className='m-0 text-weight-light'>Investor Relations</p>
            <p className='m-0 text-weight-light'>Report Fraud</p>
            <p className='m-0 text-weight-light'>Contact Us</p>
          </div>

          <div className='col-6 col-md-2 mb-4'>
            <h6>ZOMAVERSE</h6>
            <p className='m-0 text-weight-light'>Zomato</p>
            <p className='m-0 text-weight-light'>Feeding India</p>
            <p className='m-0 text-weight-light'>Hyperpure</p>
            <p className='m-0 text-weight-light'>zomaland</p>
          </div>

          <div className='col-6 col-md-4 mb-4'>
            <h6>FOR RESTAURANTS</h6>
            <p className='m-0 text-weight-light'>Partner With Us</p>
            <p className='m-0 text-weight-light'>Apps For You</p>
            <h6 className='m-0 mt-4 text-weight-light'>FOR ENTERPRISES</h6>
            <p className='m-0 text-weight-light'>Zomato For Work</p>
          </div>

          <div className='col-6 col-md-2 mb-4'>
            <h6>Learn More</h6>
            <p className='m-0 text-weight-light'>Privacy</p>
            <p className='m-0 text-weight-light'>Security</p>
            <p className='m-0 text-weight-light'>Terms</p>
            <p className='m-0 text-weight-light'>Sitemap</p>
          </div>

          <div className='col-6 col-md-2 d-none d-md-block mb-4'>
            <h6>SOCIAL LINKS</h6>
            <p className='footer_icon_parent'><i class="fa-brands fa-linkedin footer_icons"></i><i class="fa-brands fa-square-instagram footer_icons"></i><i class="fa-brands fa-square-twitter footer_icons"></i><i class="fa-brands fa-square-youtube footer_icons"></i><i class="fa-brands fa-square-facebook footer_icons"></i></p>
            <button className='btn btn-info mb-2'>App Store</button>
            <button className='btn btn-info'>Google Play</button>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer;