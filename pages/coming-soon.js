import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import FooterGray from '../components/footer-gray'

const ComingSoon = (props) => {
  return (
    <>
      <div className="coming-soon-container">
        <Head>
          <title>ComingSoon - Profile/Portfolio | Mr. Umer Qaiser</title>
          <meta
            property="og:title"
            content="ComingSoon - Profile/Portfolio | Mr. Umer Qaiser"
          />
        </Head>
        <Header></Header>
        <div className="coming-soon-container1">
          <div className="coming-soon-main">
            <div className="coming-soon-container2">
              <h1 className="coming-soon-text headingOne">You Work With</h1>
              <h1 className="coming-soon-text1">Soft Design System</h1>
              <p className="coming-soon-text2 lead">
                <span className="coming-soon-text3">
                  The time is now for it be okay to be great. Subscribe now and
                  get notified when it&apos;s launched!
                </span>
              </p>
              <div className="coming-soon-container3">
                <input
                  type="text"
                  placeholder="Email here"
                  className="coming-soon-textinput small input"
                />
                <SecondaryButton button="Subscribe"></SecondaryButton>
              </div>
            </div>
            <div className="coming-soon-grid">
              <img
                alt="image"
                src="/playground_assets/iphone-3-1000w.png"
                className="coming-soon-image"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-2-1000w.png"
                className="coming-soon-image01"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-4-1000w.png"
                className="coming-soon-image02"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-1-1000w.png"
                className="coming-soon-image03"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-2-1000w.png"
                className="coming-soon-image04"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-4-1000w.png"
                className="coming-soon-image05"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-1-1000w.png"
                className="coming-soon-image06"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-3-1000w.png"
                className="coming-soon-image07"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-2-1000w.png"
                className="coming-soon-image08"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-4-1000w.png"
                className="coming-soon-image09"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-1-1000w.png"
                className="coming-soon-image10"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-3-1000w.png"
                className="coming-soon-image11"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-4-1000w.png"
                className="coming-soon-image12"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-1-1000w.png"
                className="coming-soon-image13"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-3-1000w.png"
                className="coming-soon-image14"
              />
              <img
                alt="image"
                src="/playground_assets/iphone-2-1000w.png"
                className="coming-soon-image15"
              />
            </div>
          </div>
        </div>
        <FooterGray></FooterGray>
      </div>
      <style jsx>
        {`
          .coming-soon-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-900);
          }
          .coming-soon-container1 {
            width: 100%;
            height: 100vh;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .coming-soon-main {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 0;
            position: relative;
            max-width: 1320px;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: flex-end;
          }
          .coming-soon-container2 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            z-index: 2;
            align-self: flex-end;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
            margin-left: var(--dl-space-space-tripleunit);
            padding-top: var(--dl-space-space-tripleunit);
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
          }
          .coming-soon-text {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-halfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .coming-soon-text1 {
            color: var(--dl-color-secondary-700);
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .coming-soon-text2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .coming-soon-text3 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .coming-soon-container3 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .coming-soon-textinput {
            width: 100%;
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-secondary-100);
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-triplequarterunit);
            border-radius: var(--dl-radius-radius-radius5);
            padding-right: var(--dl-space-space-triplequarterunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .coming-soon-textinput:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          .coming-soon-grid {
            top: -20%;
            left: -35%;
            width: 70%;
            display: grid;
            grid-gap: var(--dl-space-space-doubleunit);
            position: absolute;
            transform: rotate(20deg);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .coming-soon-image {
            width: 100%;
          }
          .coming-soon-image01 {
            width: 100%;
            margin-top: -200px;
          }
          .coming-soon-image02 {
            width: 100%;
            margin-top: -50px;
          }
          .coming-soon-image03 {
            width: 100%;
          }
          .coming-soon-image04 {
            width: 100%;
          }
          .coming-soon-image05 {
            width: 100%;
            margin-top: -200px;
          }
          .coming-soon-image06 {
            width: 100%;
            margin-top: -50px;
          }
          .coming-soon-image07 {
            width: 100%;
          }
          .coming-soon-image08 {
            width: 100%;
          }
          .coming-soon-image09 {
            width: 100%;
            margin-top: -200px;
          }
          .coming-soon-image10 {
            width: 100%;
            margin-top: -50px;
          }
          .coming-soon-image11 {
            width: 100%;
          }
          .coming-soon-image12 {
            width: 100%;
          }
          .coming-soon-image13 {
            width: 100%;
            margin-top: -200px;
          }
          .coming-soon-image14 {
            width: 100%;
          }
          .coming-soon-image15 {
            width: 100%;
          }
          @media (max-width: 991px) {
            .coming-soon-container1 {
              background-size: auto;
            }
            .coming-soon-main {
              justify-content: flex-start;
            }
            .coming-soon-container2 {
              width: 70%;
              align-self: flex-start;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              padding-left: var(--dl-space-space-tripleunit);
              margin-bottom: 0px;
              padding-right: var(--dl-space-space-tripleunit);
            }
            .coming-soon-grid {
              top: 40%;
              left: auto;
              right: -6rem;
              bottom: -6rem;
            }
            .coming-soon-image {
              width: 120px;
            }
            .coming-soon-image01 {
              width: 120px;
            }
            .coming-soon-image02 {
              width: 120px;
            }
            .coming-soon-image03 {
              width: 120px;
            }
            .coming-soon-image04 {
              width: 120px;
            }
            .coming-soon-image05 {
              width: 120px;
            }
            .coming-soon-image06 {
              width: 120px;
            }
            .coming-soon-image07 {
              width: 120px;
            }
            .coming-soon-image08 {
              width: 120px;
            }
            .coming-soon-image09 {
              width: 120px;
            }
            .coming-soon-image10 {
              width: 120px;
            }
            .coming-soon-image11 {
              width: 120px;
            }
            .coming-soon-image12 {
              width: 120px;
            }
            .coming-soon-image13 {
              width: 120px;
            }
            .coming-soon-image14 {
              width: 120px;
              margin-top: -50px;
            }
            .coming-soon-image15 {
              width: 120px;
            }
          }
          @media (max-width: 767px) {
            .coming-soon-container2 {
              width: 100%;
            }
            .coming-soon-grid {
              right: 0;
            }
            .coming-soon-image {
              width: 100px;
            }
            .coming-soon-image01 {
              width: 100px;
            }
            .coming-soon-image02 {
              width: 100px;
            }
            .coming-soon-image03 {
              width: 100px;
            }
            .coming-soon-image04 {
              width: 100px;
            }
            .coming-soon-image05 {
              width: 100px;
            }
            .coming-soon-image06 {
              width: 100px;
            }
            .coming-soon-image07 {
              width: 100px;
            }
            .coming-soon-image08 {
              width: 100px;
            }
            .coming-soon-image09 {
              width: 100px;
            }
            .coming-soon-image10 {
              width: 100px;
            }
            .coming-soon-image11 {
              width: 100px;
            }
            .coming-soon-image12 {
              width: 100px;
            }
            .coming-soon-image13 {
              width: 100px;
            }
            .coming-soon-image14 {
              width: 100px;
            }
            .coming-soon-image15 {
              width: 100px;
            }
          }
          @media (max-width: 479px) {
            .coming-soon-container3 {
              flex-direction: column;
            }
            .coming-soon-textinput {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default ComingSoon
