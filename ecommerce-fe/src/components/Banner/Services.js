import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <ul className="grid">
          <li className="service">
            <TbTruckDelivery className="icon" />
            <h3>Super Fast and Free Delivery</h3>
          </li>

          <li className="service">
            <MdSecurity className="icon" />
            <h3>Non-contact Shipping</h3>
          </li>

          <li className="service">
            <GiReceiveMoney className="icon" />
            <h3>Money-back Guaranteed</h3>
          </li>

          <li className="service">
            <RiSecurePaymentLine className="icon" />
            <h3>Super Secure Payment System</h3>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0;

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    h3 {
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  .service {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

    h3 {
      margin: 2rem;
      font-size: 2rem;
    }

    .icon {
      width: 8rem;
      height: 8rem;
      padding: 2rem;
      color: ${({ theme }) => theme.colors.mainLogo};
    }
  }
`;

export default Services;
