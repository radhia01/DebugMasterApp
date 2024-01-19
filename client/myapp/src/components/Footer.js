// import React from "react";
// import { Card } from "react-bootstrap";
// function Footer() {
//   return (
//     <div className="text-dark">
//       <div>DebuggingMasters</div>
//       <p style={{ textAlign: "center" }}>
//         {" "}
//         Copyright © 2023 DebuggingMasters. Tous droits réservés.
//       </p>
//     </div>
//   );
// }

// export default Footer;
import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="text-center">
          <div>DebuggingMasters</div>
          <p style={{ textAlign: "center" }}>
            Copyright © 2023 DebuggingMasters. Tous droits réservés.
          </p>{" "}
        </div>
      </footer>
    </>
  );
};

export default Footer;
