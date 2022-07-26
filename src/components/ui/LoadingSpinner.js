import React from 'react';
import "./LoadingSpinner.css";
export default function LoadingSpinner({isInverted=false}) {
  return (
    <div className={"loader-container dark"}>
        <div id="dots2" style={{filter: `${isInverted ? 'invert(100%)' : ''}`}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>    
    </div>
)
}
