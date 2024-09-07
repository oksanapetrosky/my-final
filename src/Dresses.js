function Dresses({itemsForSale}) {
  return(<div className="products">
      {itemsForSale.map((item => {
        const {id, name, searchTerm, price, imageone} = item;
        return(<div className="product-card" key={id}>
          <div className="buynow">
            <button className="btn2">Quick Review</button>
          </div>
            <img src={imageone} width="355px" height="500px" alt="clothes" />
        <div className="product-info">
        <h3>{searchTerm} </h3>
        <h3>{name} - {price}</h3>
        </div>
        </div>)
      }))}
  </div>
  )
}

export default Dresses;