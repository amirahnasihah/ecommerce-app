import styled from "styled-components";

const MoreInfo = ({ myData }) => {
  const { name, page } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid">
          <header className="page-title">
            <h1>{page}</h1>
          </header>
          <section className="page-info-1">
            <p>
              Welcome to {name} - your go-to destination for the latest
              electronic gadgets! Explore a wide range of cutting-edge products
              that cater to your tech needs.
            </p>
            <p>
              Here, we pride ourselves on providing top-notch customer service
              and delivering high-quality electronic devices right to your
              doorstep. Discover the future of technology with our handpicked
              selection of smartphones, laptops, wearables, and more.
            </p>
          </section>

          <section className="body-info-2">
            <div>
              <p>
                Our commitment to innovation and customer satisfaction sets us
                apart. Whether you're a tech enthusiast or someone looking for
                reliable and efficient devices, {name} has something for
                everyone.
              </p>
              <p>
                Shop with confidence and experience a seamless online shopping
                journey. Join our community of tech-savvy individuals who trust
                us for the latest trends in electronic gadgets.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid {
    gap: 4rem;
  }

  .container {
    p {
      margin: 1rem 0;
    }
  }

  .page-title {
    text-align: center;
  }
`;

export default MoreInfo;
