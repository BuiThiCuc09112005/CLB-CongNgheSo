import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <div className="info-item">
          <div className="icon-wrapper">
            <img src="./anh/vitri.png" alt="Map Icon" />
          </div>
          <div>
            <h4>Address</h4>
            <p>Khu phố Thượng, Phường Đình Bảng, Từ Sơn, Bắc Ninh</p>
          </div>
        </div>
        <div className="info-item">
          <div className="icon-wrapper">
            <img src="./anh/call.png" alt="Phone Icon" />
          </div>
          <div>
            <h4>Call Us</h4>
            <p>—</p> {/* Bạn có thể điền số nếu có */}
          </div>
        </div>
        <div className="info-item">
          <div className="icon-wrapper">
            <img src="./anh/email.png" alt="Email Icon" />
          </div>
          <div>
            <h4>Email Us</h4>
            <p>contact@lic.edu.vn</p>
          </div>
        </div>
        <div className="info-item">
          <div className="icon-wrapper">
            <img src="./anh/web.png" alt="Globe Icon" />
          </div>
          <div>
            <h4>Website</h4>
            <p><a href="https://www.lic.edu.vn" target="_blank" rel="noopener noreferrer">www.lic.edu.vn</a></p>
          </div>
        </div>
        <div className="info-item">
          <div className="icon-wrapper">
            <img src="./anh/fb.png" alt="Facebook Icon" />
          </div>
          <div>
            <h4>Facebook</h4>
            <p><a href="https://www.facebook.com/caodanglythaito" target="_blank" rel="noopener noreferrer">fb.com/caodanglythaito</a></p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <form>
          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
