import aboutUsImage from "../../assets/aboutus.png";
import profilepic from "../../assets/profilepic.jpg";
const About = () => {
  return (
    <>
      <div className="about-us">
        <div className="about-us-content">
          <h1>About us</h1>
          <p>
            Welcome to Cuisine Corner, the Premier Food Ordering Platform in
            Pune, Maharashtra. We are dedicated to providing a seamless and
            convenient experience for food lovers to explore and order from a
            wide range of local restaurants.
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
      <div className="founder-section">
        <div>
          <img className="founder-image" src={profilepic}></img>
        </div>
        <div className="founder-words" >
          <h2>Our Mission</h2>
          <p className="founder-text">
            At Cuisine Corner, our vision is to create a world where food
            becomes a gateway to joy, discovery, and connection. We strive to be
            the go-to platform that seamlessly introduces individuals to the
            diverse tapestry of global cuisines. Our mission is rooted in
            redefining the dining experience – making it not just a matter of
            convenience but a journey filled with excitement, innovation, and a
            celebration of flavors.
            </p>
            
        </div>
      </div>
    </>
  );
};
export default About;
