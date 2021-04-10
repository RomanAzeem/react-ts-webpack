import * as React from 'react';
import { Fragment } from 'react';

export const ContactForm = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <div className="contact-form">
        <div className="content">
          <h2>GET IN TOUCH</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
            modi! Expedita explicabo necessitatibus laboriosam beatae tenetur
            blanditiis nulla tempora reprehenderit eius est illo cupiditate,
            assumenda repudiandae, corporis magni consequatur velit!
          </p>
        </div>
        <div className="card">
          <h3>Contact Form</h3>
          <form onSubmit={onSubmit}>
            <div className="form">
              <div className="name col-1">
                <div className="name-label">
                  <label>
                    Name <span style={{ color: 'red' }}>*</span>
                  </label>
                </div>
                <div className="name-input">
                  <input type="text" id="name"></input>
                </div>
              </div>
              <div className="email col-2">
                <div className="email-label">
                  <label>
                    Email <span style={{ color: 'red' }}>*</span>
                  </label>
                </div>
                <div className="email-input">
                  <input type="email" id="email"></input>
                </div>
              </div>
              <div className="message">
                <div className="message-label">
                  <label>
                    Message <span style={{ color: 'red' }}>*</span>
                  </label>
                </div>
                <div className="message-area">
                  <textarea></textarea>
                </div>
              </div>
              <div className="button col-2">
                <button type="submit">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
