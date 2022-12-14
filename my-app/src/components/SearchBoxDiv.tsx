import React from "react"
import {useState, useEffect} from "react";
import emptyHeart from "../assets/img/icons8-favorite-60.png"
import fillHeart from "../assets/img/icons8-heart-60.png"
// import fillHeart from "../assets/img/"
// import Data from "./Data";
// type SearchBoxDivPropTypes = {
//     fakerData : any;
// };
const SearchBoxDiv = (props : any) => {
    const checkList = ["★★★★★", "★★★★☆", "★★★☆☆", "★★☆☆☆", "★☆☆☆☆"];
    const [checked, setChecked] = useState<any>([]);
    const [filteredData, setFilteredData] = useState<any>([]);
    const [filters, setFilters] = useState({
        rating: [false, false, false, false, false],
      });
      const [displayData, setDisplayData] = useState(props.fakerData.productData);
    const [fav, setFav] = useState(true);
    const handleCheck = (event:any) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };    

    useEffect(() => {
        setFilteredData(props.fakerData.productData);
        const newFilterData:any = [];
        for (let i = 0; i < filters.rating.length; i++) {
            console.log(newFilterData);
            
            if (filters.rating[i]) {
                filteredData.forEach((element:any) => {
                if (element.rating === i+1) {
                    newFilterData.push(element);
                }
                });
            }
        }
        setDisplayData(newFilterData);
    }, [filters]);
    console.log(displayData);
    
    return(
        <div className="WhiteBackgroundForQuery">
              <div className="FilterFunction">
                <div>Search Result</div>
                <div className="FilterOptions">
                    <div className="Rating">Rating
                       <div className="ListContainer">
                        {
                            checkList.map((item, index)=>
                                <div key= {index}>
                                   <input type="checkbox" onChange={()=> {
                                    const newFilters = [...filters.rating];
                                    newFilters[4 - index] = !newFilters[4 - index];
                                    setFilters({rating: newFilters});
                                   }}/>
                                    <span>{item}</span>
                                </div>
                            )
                        }
                        </div> 
                    </div>
                </div>
              </div>
              <div className="ImagesToRender">
                <div className="ImageContainer">
                    {
                        displayData.map((element: any, index: number) => 
                            <div className= "ProductContainer" key={index}>
                              <img src={element.imgUrl} className="ProductImages" alt="Not Found" />
                              <div className="Product-Name-Images">{element.productName}</div>
                              <img className ="HeartContainer" src ={fav ? emptyHeart : fillHeart} alt="brokenHeart" onClick={()=>setFav(!fav)}/>
                              <div className=""></div>
                              <span className="RatingProducts">{element.noOfReviews}</span>
                              <span className="RatingStars">{
                                checkList[5-element.rating]
                                }</span>
                              <span className="OriginalPrice"><s>{element.originalPrice}</s></span>
                              <span className="DiscountedPrice">{element.discountedPrice}</span>
                        </div>)
                    }
                </div>
                </div>  
        </div>
    )
}
export default SearchBoxDiv;        