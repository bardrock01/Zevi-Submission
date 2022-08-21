import { faker } from "@faker-js/faker";
import React from "react";
import {useState, useEffect} from "react";


const Data = () => {

    const [fakerData, setfakerData] = useState({}); 
    function ImagesReturn() {
        
        let newFakerData: any = {};
        
        return fakerData;
        // console.log(fakerData);
    }

    useEffect(() => {
        ImagesReturn();
      }, []);
    

    return (
       ImagesReturn()
    )
}

export default Data;
