import React from "react";

function Slide(params) {
  return (
<div>
  <div className="slideshow-container">
    <div className="mySlides fade">
      <div className="textslider">DRYWALL MAGANA CALCULATOR<span className="textsliderbottom"> <hr style={{width: '40%', borderWidth: '6px 0px 0px 0px', margin: '5px auto 5px auto'}} />  FREE DRYWALL FINISHING CALCULATOR</span> </div>
      <img src="images/IGpatio.png" style={{width: '100%', maxHeight: '820px'}} />
    </div>
    <div className="mySlides fade">
      <div className="textslider">DRYWALL MAGANA CALCULATOR <span className="textsliderbottom">  <hr style={{width: '40%', borderWidth: '6px 0px 0px 0px', margin: '5px auto 5px auto'}} />  ACCURATE DRYWALL FINISHING CALCULATOR</span> </div>
      <img src="images/instbckgrnd.png" style={{width: '100%', maxHeight: '820px'}} />
    </div>
    <div className="mySlides fade">
      <div className="textslider">DRYWALL MAGANA CALCULATOR<span className="textsliderbottom">   <hr style={{width: '40%', borderWidth: '6px 0px 0px 0px', margin: '5px auto 5px auto'}} /> GET AN ACCURATE QUOTE FOR FREE</span> </div>
      <img src="images/IGdetailed.png" style={{width: '100%', maxHeight: '820px'}} />
    </div>
  </div>
  <div style={{textAlign: 'center z-index:-2 position:absolute'}}>
    <span className="dot" />
    <span className="dot" />
    <span className="dot" />
  </div>
  <div style={{textAlign: 'center  position:absolute', margin: '30px'}}>
    <span className="dot" />
    <span className="dot" />
    <span className="dot" />
  </div>
</div>

  );
}

export default Slide;
