import React from "react";

function Bottom(params) {
  return (

    <div>
      <div className="bottom-container1">
        <h2 style={{textAlign: 'center'}} >Get in touch with Drywall Magana and follow us</h2>
        <a className="btn" href="mailto:pegaso1998-10@hotmail.com">EMAIL DRYWALL MAGANA!</a>
        <a className="btn" href="tel:+1-437-220-7887">CALL DRYWALL MAGANA!</a>
        <a className="btn" href="sms:+1-437-220-7887">TEXT DRYWALL MAGANA!</a>
      </div>
      <div className="bottom-container2">
        <p className="myname">Copyright © 2021 Drywall Magana.</p>
        <a className="footer-link" href="https://www.instagram.com/drywall.magana/"><img src="images/instalogo.png" alt="instalogo" width={40} height={40} /> </a>
        <a className="footer-link" href="https://www.facebook.com/Drywall-magana-103796534431548"><img src="images/facelogo.png" alt="facelogo" width={40} height={40} /> </a>
        <a className="footer-link" href="https://homestars.com/companies/2928674-drywall-magana"><img src="images/homestars.png" alt="" width={40} height={40} /> </a>
      </div>
    </div>


  );
}

export default Bottom;
