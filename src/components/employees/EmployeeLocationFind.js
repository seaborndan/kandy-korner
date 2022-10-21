import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const EmployeeLocationFind = ( {employeeObj} ) => {
  const [locations, setLocations] = useState([])
  //const [filteredLocations, setFilteredLocations] = useState([])
  useEffect(
    () => {
      fetch(`http://localhost:8088/locations`)
      .then(response => response.json())
      .then((locationsArray) => {
        setLocations(locationsArray)
      })
    },
    []
  )

    return <>
      {
        locations.map((location) => {
          if(location.id === employeeObj.locationId) {
            return <div>{employeeObj.user.fullName} works at {location.address}</div>
          }
          
        })
      }
    </>

          
}