import React from "react";
import { RWebShare } from "react-web-share";
  
export default function ShareButton(){
  return (
    <div>
    
      <RWebShare
        data={{
          text: "Web Share - GfG",
          url: "http://localhost:3000",
          title: "GfG",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button>Share on Web</button>
      </RWebShare>
    </div>
  );
};