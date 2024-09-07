function Buttons ({filteredClothes}) {
    return(<div className="cont">
        <button className="change" onClick={() => filteredClothes("Bestsellers")}>Bestsellers</button>
        <button className="change" onClick={() => filteredClothes("Dresses")}>Dresses</button>
        <button className="change" onClick={() => filteredClothes("Shoes")}>Shoes</button>
        <button className="change" onClick={() => filteredClothes("Weddings")}>Weddings</button>
        <button className="change" onClick={() => filteredClothes("Tops")}>Tops</button>
        <button className="change" onClick={() => filteredClothes("Bottoms")}>Bottoms</button>
    </div>)
  }

export default Buttons;