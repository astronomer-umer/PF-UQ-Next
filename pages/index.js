import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Profile/Portfolio | Mr. Umer Qaiser</title>
          <meta
            property="og:title"
            content="Profile/Portfolio | Mr. Umer Qaiser"
          />
        </Head>
        <Header rootClassName="header-root-class-name"></Header>
        <div className="home-hero">
          <div className="home-container01">
            <div className="home-card">
              <h1 className="home-text">Umer Qaiser</h1>
              <h1 className="home-text01">Your Certified Expert</h1>
              <span className="home-text02 lead">
                <span>
                  Find the story of Umer&apos;s creative + productive ways
                </span>
                <span>
                   of approaching problems, and all the work that makes their
                  solutions available.
                </span>
              </span>
              <div className="home-container02">
                <div className="tabRowHead">
                  <span className="home-text05">CERTIFICATIONS</span>
                </div>
                <div className="home-container04">
                  <div className="home-container05">
                    <img
                      alt="image"
                      src="/playground_assets/unnamed%20%5B1%5D%20%5B1%5D-200h.png"
                      className="home-image"
                    />
                    <img
                      alt="image"
                      src="/playground_assets/unnamed%20%5B5%5D%20%5B1%5D-200h.png"
                      className="home-image01"
                    />
                    <img
                      alt="image"
                      src="/playground_assets/1280px-pluralsight_logo.svg%20%5B1%5D-200h.png"
                      className="home-image02"
                    />
                    <img
                      alt="image"
                      src="/playground_assets/unnamed%20%5B6%5D%20%5B1%5D-200h.png"
                      className="home-image03"
                    />
                  </div>
                  <div className="home-container06">
                    <img
                      alt="image"
                      src="/playground_assets/unnamed%20%5B2%5D%20%5B1%5D-200h.png"
                      className="home-image04"
                    />
                    <img
                      alt="image"
                      src="/playground_assets/unnamed%20%5B3%5D%20%5B1%5D-200h.png"
                      className="home-image05"
                    />
                    <img
                      alt="image"
                      src="/playground_assets/unnamed%20%5B7%5D%20%5B1%5D-200h.png"
                      className="home-image06"
                    />
                    <img
                      alt="image"
                      src="/playground_assets/unnamed%20%5B4%5D%20%5B1%5D-200h.png"
                      className="home-image07"
                    />
                  </div>
                </div>
                <div className="home-container07"></div>
              </div>
            </div>
            <div className="home-container08">
              <div className="home-container09 tabRowHead">
                <span className="home-text06">CONNECT WITH HIM</span>
              </div>
              <div className="home-social-bar">
                <a
                  href="https://www.linkedin.com/in/umerqaiser"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <img
                    alt="image"
                    src="/playground_assets/li-in-bug1-200w.png"
                    className="home-image08"
                  />
                </a>
              </div>
              <a
                href="https://www.linkedin.com/in/umerqaiser"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <SecondaryButton
                  button="HIS LINKEDIN | TALK TO HIM TODAY"
                  rootClassName="secondary-button-root-class-name"
                  className="home-component1"
                ></SecondaryButton>
              </a>
            </div>
            <div className="home-container10">
              <div className="home-container11 tabRowHead">
                <span className="home-text07">
                  <span>SEE PORTFOLIO</span>
                  <br></br>
                  <span>AVAIL SERVICES</span>
                </span>
              </div>
              <div className="home-social-bar1">
                <a
                  href="https://www.upwork.com/freelancers/~010c64df3b363a2b54/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link2"
                >
                  <img
                    alt="image"
                    src="/playground_assets/6092b7514135708162a4be92_favicon%20256-200h.png"
                    className="home-image09"
                  />
                </a>
              </div>
              <a
                href="https://www.upwork.com/freelancers/~010c64df3b363a2b54/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                <SecondaryButton
                  button="HIS UPWORK | MAKE YOUR IDEA A REALITY"
                  rootClassName="secondary-button-root-class-name"
                  className="home-component2"
                ></SecondaryButton>
              </a>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bg%20edited%20photo-umer-qaiser-engineering-manager-900h.jpg"
          className="home-image10"
        />
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .home-container01 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            min-height: 85vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-card {
            flex: 0 0 auto;
            width: 790px;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: 62px;
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .home-text {
            font-size: 2rem;
            text-align: center;
            font-family: Poppins;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: 1.5;
            text-transform: uppercase;
            text-decoration: none;
            background-image: linear-gradient(
              180deg,
              rgb(0, 109, 255) 3%,
              rgba(0, 34, 155, 0.92) 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text01 {
            color: var(--dl-color-secondary-700);
            font-size: 2.3rem;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: 1.3;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 10px;
            letter-spacing: 1.5;
            padding-bottom: 0px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-text02 {
            color: var(--dl-color-secondary-600);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unitandahalfunit);
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 704px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-text05 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 700;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 417px;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 511px;
            height: 31px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image {
            width: 18%;
            align-self: center;
            object-fit: cover;
            padding-right: var(--dl-space-space-unit);
          }
          .home-image01 {
            width: 23%;
            align-self: center;
            object-fit: cover;
            padding-right: var(--dl-space-space-unit);
          }
          .home-image02 {
            width: 20%;
            align-self: center;
            object-fit: cover;
            padding-right: var(--dl-space-space-unit);
          }
          .home-image03 {
            width: 20%;
            height: auto;
            align-self: center;
            object-fit: cover;
            padding-right: var(--dl-space-space-unit);
          }
          .home-container06 {
            width: 466px;
            height: 42px;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image04 {
            width: 120px;
            height: auto;
            align-self: center;
            object-fit: cover;
            padding-right: var(--dl-space-space-unit);
          }
          .home-image05 {
            width: 65px;
            height: auto;
            align-self: center;
            object-fit: cover;
            padding-right: var(--dl-space-space-unit);
          }
          .home-image06 {
            width: 60px;
            height: auto;
            align-self: center;
            object-fit: cover;
            padding-right: var(--dl-space-space-unit);
          }
          .home-image07 {
            width: 170px;
            height: auto;
            align-self: center;
            object-fit: cover;
            padding-right: var(--dl-space-space-unit);
          }
          .home-container07 {
            width: 100px;
            height: 101px;
            display: flex;
            background-size: cover;
            background-image: url('/playground_assets/upwork-badge-200w.png');
            background-position: center;
          }
          .home-container08 {
            width: 745px;
            height: 51px;
            display: flex;
            align-self: flex-start;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            margin-left: var(--dl-space-space-doubleunit);
            margin-right: var(--dl-space-space-triplequarterunit);
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text06 {
            align-self: flex-start;
            font-style: normal;
            text-align: left;
            font-weight: 700;
          }
          .home-social-bar {
            width: 90px;
            height: 47px;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .home-link {
            display: contents;
          }
          .home-image08 {
            width: 40px;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link1 {
            display: contents;
          }
          .home-component1 {
            text-decoration: none;
          }
          .home-container10 {
            width: 734px;
            height: 51px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-left: var(--dl-space-space-doubleunit);
            margin-right: var(--dl-space-space-triplequarterunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text07 {
            align-self: flex-start;
            font-style: normal;
            font-weight: 700;
          }
          .home-social-bar1 {
            width: 90px;
            height: 47px;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .home-link2 {
            display: contents;
          }
          .home-image09 {
            width: 40px;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link3 {
            display: contents;
          }
          .home-component2 {
            text-decoration: none;
          }
          .home-image10 {
            top: 0;
            right: 0;
            width: 337px;
            height: 807px;
            margin: auto;
            position: absolute;
            object-fit: cover;
            object-position: right;
            border-bottom-left-radius: 20rem;
          }
          @media (max-width: 1200px) {
            .home-card {
              width: 70%;
              background-color: hsla(0, 0%, 100%, 0.6);
            }
            .home-text01 {
              color: var(--dl-color-secondary-700);
              font-size: 2.3rem;
              font-family: Poppins;
              font-weight: 500;
              line-height: 1.3;
              letter-spacing: 1.5px;
              text-transform: uppercase;
              text-decoration: none;
            }
            .home-text02 {
              margin-top: var(--dl-space-space-unitandahalfunit);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-text05 {
              color: #093d83;
              font-style: normal;
              font-weight: 800;
            }
            .home-container04 {
              padding-left: 20px;
            }
            .home-container07 {
              margin-left: 7px;
            }
            .home-container08 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-container09 {
              height: 100%;
            }
            .home-text06 {
              color: #093d83;
              font-style: normal;
              font-weight: 800;
            }
            .home-container11 {
              height: 100%;
            }
            .home-text07 {
              color: #093d83;
              font-style: normal;
              font-weight: 800;
            }
            .home-image10 {
              top: 0px;
              right: 0px;
              width: auto;
              z-index: 100;
              border-bottom-left-radius: var(--dl-radius-radius-round);
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .home-container01 {
              max-width: 960px;
            }
            .home-card {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-card {
              align-items: center;
            }
            .home-text02 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-image {
              width: 40%;
            }
            .home-image01 {
              width: 40%;
            }
            .home-image02 {
              width: 40%;
            }
            .home-image03 {
              width: 40%;
            }
            .home-image04 {
              width: 40%;
            }
            .home-image05 {
              width: 40%;
            }
            .home-image06 {
              width: 40%;
            }
            .home-image07 {
              width: 40%;
            }
            .home-social-bar {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-social-bar1 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-image10 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .home-card {
              padding: var(--dl-space-space-unit);
            }
            .home-container08 {
              align-items: center;
              flex-direction: column;
            }
            .home-social-bar {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-container10 {
              align-items: center;
              flex-direction: column;
            }
            .home-social-bar1 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
