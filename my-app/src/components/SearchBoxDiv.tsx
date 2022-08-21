import react from "react"
import {useState} from "react";
// import Data from "./Data";
// type SearchBoxDivPropTypes = {
//     fakerData : any;
// };
const SearchBoxDiv = (props : any) => {
    const checkList = ["★★★★★", "★★★★☆", "★★★☆☆", "★★☆☆☆", "★☆☆☆☆"];
    const [checked, setChecked] = useState<any>([]);
    const handleCheck = (event:any) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };    
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
                                   <input value={item} type="checkbox" onChange={handleCheck} />
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
                        props.fakerData.productData.map((element: any, index: number) => (
                            <div key={index}>
                              <img src={element.imgUrl} className="ProductImages" alt="Not Found" />
                              <div className="Product-Name-Images">{element.name}</div>
                        </div>
                    ))
                };
                </div>
                </div>  
        </div>
    )
}
export default SearchBoxDiv;        