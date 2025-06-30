// ColBody.js
import React from 'react';

const ColBody = ({ children }) => {
  return (
    <div style={{width:"100%", display:"flex", justifyContent:"center"
    }}>
    <div style={{ paddingTop: "128px", maxWidth:"1095px", display:'flex', justifyContent:"center", marginTop: "60px" }}>
      {children}
    </div></div>
  );
};

export default ColBody;
