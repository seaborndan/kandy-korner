import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Products = ({ searchTermState }) => {
   const [products, setProducts] = useState([])
   const [pricedProducts, setPricedProducts] = useState(false)
   const [filteredProducts, setFilteredProducts] = useState([])
   function compareStrings(a, b) {
    // Assuming you want case-insensitive comparison
    a = a.toLowerCase();
    b = b.toLowerCase();
  
    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }
  
   filteredProducts.sort(function(a, b) {
    return compareStrings(a.name, b.name);
   })
   useEffect(
    () => {
      fetch(`http://localhost:8088/products?_expand=productType`)
      .then(response => response.json())
      .then((productsArray) => {
        setProducts(productsArray)
      })
    },
    []
   )

   useEffect(
    () => {
        const searchKandy = products.filter(product => { 
            return product.name.toLowerCase().startsWith(searchTermState.toLowerCase())
        })
        setFilteredProducts(searchKandy)
    },
    [ searchTermState ]
)

   useEffect(
    () => {
      if(pricedProducts) {
        const moreThanTwo = filteredProducts.filter(product => product.price > 2)
        setFilteredProducts(moreThanTwo)
      }
    },
    [pricedProducts]
   )

   return <>
    <h2>List of Our Products  </h2>
    <article className="products">
      <button onClick = {() => setPricedProducts(true)}>Top Priced</button>
      {
        filteredProducts.map((product) => {
          return <section className="product">
            {searchTermState === "" ? <header>{product.productType.category}: {product.name}</header>
            : <header>{product.name}</header>
             }
            
            
            <footer>{product.price} Dollars</footer>
          </section>
        })
      }
    </article>
   </>
}

