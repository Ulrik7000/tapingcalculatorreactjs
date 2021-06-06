import React from "react";
import myFunction from "./myfunc.js";


function Topdiv(params) {
  return (
    <div className="topnav" id="myTopnav">

<img
 className="logDM"
 alt="banner"
 src="/images/logoclean.png"/>
 <a href="index.html" className="active">Home</a>
<a href="calcsheet.html">Calculate by number of sheets installed</a>
<a href="calcsqft.html">Calculate by sq/ft</a>
<a href="calcrep.html">Calculate by repair</a>
<a href="#top" className="icon" onClick={myFunction}>
 <i className="fa fa-bars"></i>
</a>
 
  </div>

  );
}

export default Topdiv;
