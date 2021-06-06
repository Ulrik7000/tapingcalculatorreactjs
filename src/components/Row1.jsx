import React from "react";

function Row1(params) {
  return (
    <div>
  <div className="mySlides fade">
    <div className="textslider">DRYWALL MAGANA CALCULATOR <span className="textsliderbottom">  <hr style={{width: '40%', borderWidth: '6px 0px 0px 0px', margin: '5px auto 5px auto'}} />  ACCURATE DRYWALL FINISHING CALCULATOR</span> </div>
    <img src="images/instbckgrnd.png" style={{width: '100%', maxHeight: '820px'}} />
  </div>
  <div className="mySlides fade">
    <div className="textslider">DRYWALL MAGANA CALCULATOR<span className="textsliderbottom">   <hr style={{width: '40%', borderWidth: '6px 0px 0px 0px', margin: '5px auto 5px auto'}} /> GET AN ACCURATE QUOTE FOR FREE</span> </div>
    <img src="images/IGdetailed.png" style={{width: '100%', maxHeight: '820px'}} />
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
  <p style={{textAlign: 'center', color:"white"}} className="content">Hi are you looking for a fast and reliable way to have your drywall finish project quoted?
    <br />
    <br />
  </p><div className="skill-row1">
    <img src="images/instaimg.png" alt="" style={{display: 'block', maxWidth: '100%', float: 'right', height: '10%', margin: '0 .5% .5% .5%'}} />
    <p className="content" style={{marginTop: '-10px', textAlign: 'left', color:"white"}}>
      If you are, take a look at this tool that DRYWALL MAGANA built for you.
      <img src="images/logoclean.png" alt="" style={{position: 'absolute', display: 'block', maxWidth: '100%', float: 'left', height: '100%', margin: '-6% 0 0 0', opacity: '0.2', zIndex: -1}} />
      <br />
      <br />
      This specialized calculator was built with the main purpose of saving you time and money by avoiding unethical and unexperienced contractors.
      <br />
      <br />
      For the best usage of this calculator, select the section on the horizontal menu above that best describes the way you want to calculate the cost of labour for your project.
      <br />
      <br />
      You can choose to either calculate by the number of sheets installed, the total square footage of the walls and ceilings of your project, or the repair details, on this last section you will be asked to specify more about
      the type of repairs you want DRYWALL MAGANA to take care of, be it potlight repairs, general repairs, single patches or popcorn removal and we will give you
      a FREE quote.
    </p>
  </div>
  <br />
  <hr />
  <br />
</div>



  );
}

export default Row1;
