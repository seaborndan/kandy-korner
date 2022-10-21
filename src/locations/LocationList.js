import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const LocationList = () => {
  const [locations, setLocations] = useState([])

  useEffect(
    () => {
      fetch(`http://localhost:8088/locations`)
      .then(response => response.json())
      .then((locationArray) => {
        setLocations(locationArray)
      })
    },
    []
  )

  return <>
    <h2>List of Our Locations</h2>
    <article className="locations">
      {
        locations.map((location) => {
          return <section className="location">
            <header>{location.address}</header>
            <footer>{location.squareFeet}SqFt</footer>
          </section>
        })
      }
    </article>
  </>
}