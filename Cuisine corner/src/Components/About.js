import aboutUsImage from "../../assets/aboutus.png";
const About = () => {
  return (
    <>
      <div className="about-us">
        <div className="about-us-content">
          <h1>About us</h1>
          <p>
            Welcome to Cuisine Corner, the premier food ordering app in Pune,
            Maharashtra. We are dedicated to providing a seamless and convenient
            experience for food lovers to explore and order from a wide range of
            local restaurants.
          </p>
          <br></br>
          <p>
            At Cuisine Corner, we understand the importance of good food and the
            joy it brings. Our platform is designed to connect hungry customers
            with their favorite cuisines, enabling them to satisfy their
            cravings with just a few taps on their mobile devices. With a
            user-friendly interface and a vast selection of restaurants, we
            strive to make every meal a delightful and hassle-free experience.
          </p>
        </div>
        <div>
          <img className="about-us-image" src={aboutUsImage}></img>
        </div>
      </div>
    </>
  );
};
export default About;
