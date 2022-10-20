import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard = (props) => {
  return (
    <>
      <div className="feature-card-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="feature-card-image"
        />
        <h5 className="feature-card-text headingThree">{props.new_prop}</h5>
        <span className="feature-card-text1">{props.text}</span>
      </div>
      <style jsx>
        {`
          .feature-card-container {
            flex: 0 0 auto;
            width: 25%;
            display: flex;
            margin-top: var(--dl-space-space-triplequarterunit);
            align-items: center;
            padding-left: var(--dl-space-space-triplequarterunit);
            padding-right: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .feature-card-image {
            height: 30px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
          }
          .feature-card-text {
            color: var(--dl-color-secondary-600);
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .feature-card-text1 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 767px) {
            .feature-card-container {
              width: 50%;
            }
          }
          @media (max-width: 479px) {
            .feature-card-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard.defaultProps = {
  image_src: '0c545438-dccd-4f3c-8e7c-92d8d4113c1d',
  image_alt: 'image',
  text: 'Get the latest design ideas and turn it into reality.',
  new_prop: 'Design',
}

FeatureCard.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  new_prop: PropTypes.string,
}

export default FeatureCard
