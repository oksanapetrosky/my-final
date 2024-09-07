import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import Buttons from "./Buttons";
import { DataAllItems } from './DataAllItems';
import Dresses from "./Dresses";


function Home() {
  const [clothes, setClothes] = useState(DataAllItems);
  
    const chosenClothes = (searchTerm) =>  {
      const newClothes = DataAllItems.filter(element => element.searchTerm === searchTerm);
      setClothes(newClothes);
    } 

    return(
    <div>
      <div className="banner">
        <h3>Labor Day Sale</h3>
        <h3>Extra 40% Off All Sale Items</h3>
        <h3>Use Code: Summer-Sale2024</h3>
      </div>
    
     <ImageSlider />
     <Buttons filteredClothes={chosenClothes} />
     <Dresses itemsForSale={clothes} />
    </div>
    )
}

export default Home;