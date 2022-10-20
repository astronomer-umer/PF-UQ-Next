import React from 'react'

const Footer = (props) => {
  return (
    <>
      <footer className="footer-footer">
        <div className="footer-container">
          <div className="footer-container1">
            <span className="footer-text">SOFT</span>
            <span>Copyright © 2021 Soft by Creative Tim.</span>
          </div>
          <div className="footer-container2">
            <div className="footer-container3">
              <span className="footer-text02 large">Company</span>
              <span className="footer-text03 large">About Us</span>
              <span className="footer-text04 large">Careers</span>
              <span className="footer-text05 large">Press</span>
            </div>
            <div className="footer-container4">
              <span className="footer-text06 large">Pages</span>
              <span className="footer-text07 large">Login</span>
              <span className="footer-text08 large">Register</span>
              <span className="footer-text09 large">About</span>
            </div>
            <div className="footer-container5">
              <span className="footer-text10 large">Products</span>
              <span className="footer-text11 large">Free</span>
              <span className="footer-text12 large">PRO</span>
              <span className="footer-text13 large">Latest</span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="footer-image"
        />
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #141727, #3a416f);
          }
          .footer-container {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            max-width: 1320px;
            justify-content: space-between;
          }
          .footer-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-container2 {
            display: flex;
            justify-content: space-between;
          }
          .footer-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text02 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text03 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text03:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text04 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text04:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text05 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text05:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .footer-text06 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text07 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text07:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text08 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text08:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text09 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text09:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-container5 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .footer-text10 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text11 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text11:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text12 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text12:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text13 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text13:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-image {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            height: 100%;
            opacity: 0.7;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .footer-container {
              padding: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 767px) {
            .footer-container {
              flex-direction: column;
            }
            .footer-container1 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .footer-container4 {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .footer-container5 {
              margin-left: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Footer
