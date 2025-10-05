import React from "react";
import styled from "styled-components";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { useProductContext } from "../../context/productcontext";
import { Button } from "../../styles/Button";

const Footer = () => {
  const { myName } = useProductContext();

  return (
    <Wrapper>
      <div className="container">
        <div className="logo-section">
          <h3>{myName}</h3>
          <p>
            Discover the latest electronic gadgets at{" "}
            <span aria-label={myName}>{myName}</span>.
          </p>
        </div>
        <div className="subscribe-section">
          <h3>Subscribe</h3>
          <div className="subscribe-form">
            <input type="email" name="email" placeholder="YOUR E-MAIL" />
            <Button type="button" className="subscribe-btn">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="social-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaDiscord className="icons" role="img" aria-label="Discord" />
            <FaInstagram className="icons" role="img" aria-label="Instagram" />
            <FaYoutube className="icons" role="img" aria-label="YouTube" />
          </div>
        </div>
        <div className="contact-section">
          <h3>Contact Support</h3>
          <p>
            For assistance, call <span>+123456789</span> or email{" "}
            <a href="mailto:support@raya.com">support@raya.com</a>
          </p>
        </div>
      </div>
      <div className="bottom-section">
        <hr />
        <div className="terms-section">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <a href="https://github.com/amirahnasihah/ecommerce-app">
            github link
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer_bg};
  padding: 2rem;

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }

  .logo-section,
  .subscribe-section,
  .social-section,
  .contact-section {
    flex: 1;
    padding: 1rem;
  }

  .subscribe-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .subscribe-btn {
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  }

  .social-section {
    padding-left: 1rem;

    .icons {
      color: ${({ theme }) => theme.colors.black};
      font-size: 2.5rem;
      cursor: pointer;
      margin: 0.2rem;
    }
  }

  .social-icons {
    display: flex;
    gap: 1rem;
  }

  .bottom-section {
    margin-top: 1rem;
    text-align: center;
  }

  .terms-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .container {
      grid-template-columns: 1fr;
    }

    .contact-section {
      text-align: center;
    }
  }
`;

export default Footer;
