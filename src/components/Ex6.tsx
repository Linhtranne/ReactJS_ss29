import React, { useState } from "react";
export default function BT5() {
    const [valueButton,setBtn]=useState<boolean>(true)
    const changeValue=()=>{
        setBtn( valueButton === true ? false : true )
    }
  return (
    <>
      <div>
        <p>he</p>
        <button onClick={changeValue}>{valueButton=== true ? 'Hiện':'Ẩn'}</button>
      </div>
   
    </>
  );
}