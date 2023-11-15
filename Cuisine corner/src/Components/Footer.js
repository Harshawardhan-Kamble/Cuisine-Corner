// const Footer = () => {
//   return <div className="footer">&copy;Cuisines Corner</div>;
// };
import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p className='footer-name' >Made by ❤️ <a href='https://in.linkedin.com/in/harshawardhan-kamble'>Harshawardhan</a>  &copy; {new Date().getFullYear()} Cuisine Corner</p>
        <div className="social-links">
          <a href="https://github.com/Harshawardhan-Kamble" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://in.linkedin.com/in/harshawardhan-kamble" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a href="https://twitter.com/k_harsh08" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

// export default Footer;

export default Footer;
