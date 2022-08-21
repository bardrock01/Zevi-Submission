import React from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import { faker } from "@faker-js/faker";
import AppLogo from "./components/AppLogo";
import SearchBoxDiv from "./components/SearchBoxDiv"


type FakerDataType = {
  trendingQueries: string[];
  trendingProducts: TrendingProducts[];
};
type TrendingProducts = {
  name: string;
  imgUrl: string;
};

function App() {
  const [query, setQuery] = useState("");
  const [boolChildWindow, setboolChildWindow] = useState(false);
  const [boolOnClick, setBoolOnClick] = useState(false);
  const [fakerData, setFakerData] = useState<FakerDataType>({
    trendingProducts: [],
    trendingQueries: [],
  });

  const generateFakerData = () => {
    let newFakerData: any = {};
    const TrendingQueries: string[] = [];

    const SIZE_OF_TRENDING_QUERIES = 5;

    for (let i = 0; i < SIZE_OF_TRENDING_QUERIES; i++)
      TrendingQueries.push(faker.commerce.productName());

    newFakerData.trendingQueries = TrendingQueries;

    const TrendingProducts = [];

    for (let i = 0; i < 5; i++) {
      TrendingProducts.push({
        imgUrl: faker.image.fashion(100, 150, true),
        name: faker.commerce.productName(),
        isFavourite: false,
      });
    }

    newFakerData.trendingProducts = TrendingProducts;

    const ProductData : any = [];
    for (let i = 0; i < 20; i++) {
      const imgUrl : string = faker.image.people(300, 400);
      const productName : string = faker.commerce.productName();
      // Hard-coded the value for demo purposes
      const currencyPrefix : string = 'Rs.';
      const originalPrice : string = faker.commerce.price(100, 5000);
      const discountedPrice : string =
        faker.commerce.price(100, Number(originalPrice));
      const rating =
        Math.round(Math.random() * (5 - 1) + 1);
      const noOfReviews = Math.floor(Math.random() * 1000 + 1);
      const isFavourite = false;
      const setDisplayActive = true;
  
      ProductData.push({
        imgUrl: imgUrl,
        productName: productName,
        currencyPrefix: currencyPrefix,
        originalPrice: originalPrice,
        discountedPrice: discountedPrice,
        rating: rating,
        noOfReviews: noOfReviews,
        isFavourite: isFavourite,
      });
    };
    newFakerData.productData = ProductData;
    setFakerData(newFakerData);


  };

  useEffect(() => {
    generateFakerData();
  }, []);

  // const fakerData = Faker();
  // console.log(boolChildWindow);
  console.log(fakerData);
  // console.log(query);
  return (
    <div className="App">
      {/* <Data/> */}
      <div className="main">
        <div className="ZeviName">
          <AppLogo />
        </div>
        <div className="SearchBar">
          <div className="ButtonAndSearchBar">
            <input
              type="text"
              placeholder="Search"
              className="search"
              onClick={() => setboolChildWindow(!boolChildWindow)} //Activating the trending div
              onChange={(e) => setQuery(e.target.value) } //Taking the input query
            ></input>
            <button className="ButtonClickMe" onClick={()=>{
              setBoolOnClick(!boolOnClick)}}>Clik Me</button>
              
          </div>
          {boolChildWindow && (
            <div className="OverlayFather">
              <div className="OverlayDiv">
                <div className="LatestTrendsTag">Latest Trends</div>
                <div className="trending-products-container">
                  {fakerData.trendingProducts.map((element, index) => (
                    <div key={index}>
                      <img src={element.imgUrl} className="ProductName" />
                      <div className="ProductName">{element.name}</div>
                    </div>
                  ))}
                </div>
                <div className="Popular-Suggestion">
                  <div className="PopularSuggestionTag">PopularSuggestions</div>
                  <div className="PopularQueries">
                    <div className="TrendingQueriesStyle">
                      {fakerData.trendingQueries}
                    </div>
                    <div className="TrendingQueriesStyle">
                      {fakerData.trendingQueries}
                    </div>
                    <div className="TrendingQueriesStyle">
                      {fakerData.trendingQueries}
                    </div>
                    <div className="TrendingQueriesStyle">
                      {fakerData.trendingQueries}
                    </div>
                    <div className="TrendingQueriesStyle">
                      {fakerData.trendingQueries}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
       {boolOnClick &&( !boolChildWindow && (
       <div className="SearchBoxContainer">
        <SearchBoxDiv/>
     </div>
       ))}
      </div>
    </div>
  );
}

export { App };
