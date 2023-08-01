import React from 'react';
import SyncLoader from "react-spinners/SyncLoader";

import "./LoadingBox.scss"

export default function LoadingBox({size,color,text , block}) {
  return (
        <div className={`${"box"}   ${ block? "dim": "" } `}>
                <SyncLoader color={color}   size={size}  /> 
                {
                        text==="" ?
                        <span hidden>{text}</span>
                        :
                        <span>{text}</span>
                }
        </div>
  );
}


LoadingBox.defaultProps={
        size:10,
       color: "grey",
       text:"Loading..."
}