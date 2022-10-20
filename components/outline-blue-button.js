import React from 'react'

import PropTypes from 'prop-types'

const OutlineBlueButton = (props) => {
  return (
    <>
      <div className="outline-blue-button-container">
        <button className="outline-blue-button-button button buttonSmall">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .outline-blue-button-container {
            display: flex;
            position: relative;
          }
          .outline-blue-button-button {
            color: var(--dl-color-blue-500);
            cursor: pointer;
            background: white;
            transition: all 0.15s ease-in;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-blue-500);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius5);
            padding-right: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: transparent;
          }
          .outline-blue-button-button:hover {
            transform: scale(1.02);
          }
        `}
      </style>
    </>
  )
}

OutlineBlueButton.defaultProps = {
  button: 'Button',
}

OutlineBlueButton.propTypes = {
  button: PropTypes.string,
}

export default OutlineBlueButton
