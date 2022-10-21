import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const KandyForm = () => {

  const navigate = useNavigate()

  const [kandy, update] = useState({
    name: "",
    productTypeId: null,
    price: null

  })

  const handleSubmitClick = (evt) => {
    evt.preventDefault()

    const KandyToSendToAPI = {
      name: kandy.name,
      productTypeId: kandy.productTypeId,
      price: kandy.price
    }

    return fetch(`http://localhost:8088/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(KandyToSendToAPI)
    })
      .then(response => response.json())
      .then(() => {
        navigate("/products")
      })
  }

  return (
    <form className="kandyForm">
      <h2 className="kandyForm_title">New Kandy Form</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            required autoFocus
            type="text"
            className="form-control"
            placeholder="Enter Kandy Name"
            value={kandy.name}
            onChange={
              (evt) => {
                const copy = {...kandy}
                copy.name = evt.target.value
                update(copy)
              }
            }>
          </input>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <input
            required autoFocus
            type="text"
            className="form-control"
            placeholder="1: Hard Candy 2: Chocolate 3: Gum"
            value={kandy.productTypeId}
            onChange={
              (evt2) => {
                const copy2 = {...kandy}
                copy2.productTypeId = evt2.target.value
                update(copy2)
              }
            }>
          </input>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            required autoFocus
            type="text"
            className="form-control"
            placeholder="Enter dollar amount here"
            value={kandy.price}
            onChange={
              (evt) => {
                const copy = {...kandy}
                copy.price = evt.target.value
                update(copy)
              }
            }>
          </input>
        </div>
      </fieldset>
      <button
        onClick={
          (clickEvent) => handleSubmitClick(clickEvent)
        }
        className="btn btn-primary">
          Submit Kandy
        </button>
    </form>
  )
}