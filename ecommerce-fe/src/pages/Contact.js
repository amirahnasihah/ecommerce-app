import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";

const Contact = () => {
  return (
    <Wrapper>
      <h1>Contact Us</h1>

      <section className="contact-form">
        <h3>Send us a message:</h3>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <textarea placeholder="Your message"></textarea>
          <Button type="submit">Send</Button>
        </form>
      </section>

      <section className="contact-info">
        <article className="info-item">
          <h3>
            <strong>Address:</strong> 123 Main Street, Cityville, State, Zip
            Code
          </h3>
        </article>
        <article className="info-item">
          <h3>
            <strong>Email:</strong> support@raya.com
          </h3>
        </article>
        <article className="info-item">
          <h3>
            <strong>Phone:</strong> +123456789
          </h3>
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: Arial, sans-serif;

  h1 {
    margin-bottom: 5rem;
    color: ${({ theme }) => theme.colors.heading};
  }

  .info-item {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.2rem;

    strong {
      margin-right: 1rem;
    }
  }

  .contact-form {
    margin-bottom: 5rem;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      input,
      textarea {
        width: 80%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 1rem;
      }

      button {
        width: 30%;
      }
    }
  }
`;

export default Contact;
