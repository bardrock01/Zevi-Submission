import React from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import { faker } from "@faker-js/faker";

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
  const [fakeUrl, setFakeUrl] = useState("");

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

    setFakerData(newFakerData);
  };

  useEffect(() => {
    generateFakerData();
  }, []);

  // const fakerData = Faker();
  // console.log(boolChildWindow);
  console.log(fakerData);

  return (
    <div className="App">
      <div className="main">
        <div className="ZeviName">
          <img
            src="/my-app/src/assets/img/zevi.png"
            className="ZeviImageTag"
            alt="Zevi"
          />
        </div>
        <div className="SearchBar">
          <input
            type="text"
            placeholder="Search"
            className="search"
            onClick={() => setboolChildWindow(!boolChildWindow)}
          ></input>
          {
            boolChildWindow && 
              <div className="OverlayFather">
                <div className="OverlayDiv">
                  <div className="LatestTrendsTag">Latest Trends</div>
                  <div className="trending-products-container">
                    {
                      fakerData.trendingProducts.map((element, index) => 
                        <div key={index}>
                          <img src={element.imgUrl} className = "ProductName"/>
                          <div className="ProductName">{element.name}</div>
                        </div>
                        )
                    }
                  </div>
              </div>
             </div>       
          }
        </div>
      </div>
    </div>
  );
}

export default App;
