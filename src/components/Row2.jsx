import React from "react";

function Row2(params) {
  return (
<div>
    <div className="skill-row2">
      <img src="images/instaimg2.png" style={{display: 'block', position: 'inherit', float: 'left', maxWidth: '100%', width: '1000px', height: '500px', paddingRight: '10px'}} alt="" />
      <h1 style={{textAlign: 'left'}}><span style={{fontSize: '30%', color: '#4e579c'}}> ABOUT <br /> </span>DRYWALL MAGANA</h1>
      <p className="the" style={{lineHeight: '1.4em'}}>DRYWALL MAGANA is represented by a professional skilled taper trained by veteran specialists of the trade, whose projects are focused on Toronto and the GTA, the services part of my scope of work are:
        <img src="images/logoclean.png" alt="" style={{position: 'absolute', display: 'block', maxWidth: '100%', float: 'right', height: '100%', margin: '-10% 0 0 20%', opacity: '0.2', zIndex: -1}} />
        <br className="the"/>
        ✔️ Taping mudding and sanding.
        <br className="the"/>
        ✔️ Drywall repairs.
        <br className="the"/>
        ✔️ Immediate availability on basements, new houses, repairs, warehouses, offices and garages.
        <br className="the"/>
        ✔️ Stucco and general texture removal (level 5 skimming and full surface smoothing)
        <br className="the"/>
        There is no job too big or too small, I take specialized focus on every different project depending on its needs. DRYWALL MAGANA is a full-service drywall finish business supplying all around the GTA.
        <br className="the"/>
        I take pride on delivering the best finish on each proyect.
      </p>
    </div>
</div>

  );
}

export default Row2;
