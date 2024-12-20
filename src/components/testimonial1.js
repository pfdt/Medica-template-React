import React from 'react'

import PropTypes from 'prop-types'

import './testimonial1.css'

const Testimonial1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial1-max-width thq-section-max-width">
        <img
          alt={props.company1LogoAlt}
          src={props.company1LogoSrc}
          className="testimonial1-logo"
        />
        <p className="testimonial1-text1 thq-body-large">{props.review1}</p>
        <div className="testimonial1-avatar">
          <img
            alt={props.author1Alt}
            src={props.author1Src}
            className="testimonial1-avatar-image thq-img-round thq-img-ratio-1-1"
          />
          <div className="testimonial1-avatar-content">
            <span className="testimonial1-text2 thq-body-small">
              {props.author1Name}
            </span>
            <span className="testimonial1-text3 thq-body-small">
              {props.author1Position}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial1.defaultProps = {
  author1Name: 'Emily Smith',
  review1:
    'I had a great experience using the platform to book a virtual appointment. The doctor was attentive and provided me with valuable insights into my health concerns.',
  author1Alt: 'Image of the patient',
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author1Src:
    'https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDQ0OTgxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  company1LogoAlt: 'Platform logo',
  author1Position: 'Patient',
}

Testimonial1.propTypes = {
  author1Name: PropTypes.string,
  review1: PropTypes.string,
  author1Alt: PropTypes.string,
  company1LogoSrc: PropTypes.string,
  author1Src: PropTypes.string,
  company1LogoAlt: PropTypes.string,
  author1Position: PropTypes.string,
}

export default Testimonial1
