import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = props => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getBubbles()
  },[])

  // const updateColorList = color => {
  //   setColorList([...colorList, color])
  // }

  const getBubbles = () => {
    axiosWithAuth()
        .get('/colors')
        .then(res => {
            setColorList(res.data)
            // props.updateColorList(res.data)
        })
        .catch(err => console.log(err));
}

  return (
    <>
      <ColorList colors={colorList} setColorList={setColorList} getBubbles={getBubbles} />
      <Bubbles colors={colorList} />
      
    </>
  );
};

export default BubblePage;
