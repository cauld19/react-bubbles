import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getBubbles()
  },[])

  const updateColorList = color => {
    setColorList([...colorList, color])
  }

  const getBubbles = () => {
    axiosWithAuth()
        .get('/colors')
        .then(res => {
            // console.log(res.data)
            setColorList(res.data)
        })
        .catch(err => console.log(err));
}

  return (
    <>
      <ColorList colors={colorList} setColorList={setColorList} getBubbles={getBubbles} updateColorList={updateColorList}/>
      <Bubbles colors={colorList} />
      
    </>
  );
};

export default BubblePage;
