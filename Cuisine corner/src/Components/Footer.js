// const Footer = () => {
//   return <div className="footer">&copy;Cuisines Corner</div>;
// };
import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Cuisine Corner. All rights reserved.</p>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

// export default Footer;

export default Footer;
