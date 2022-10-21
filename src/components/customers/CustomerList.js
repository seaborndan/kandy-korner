import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const CustomerList = () => {
  const [customers, setCustomers] = useState([])
  const navigate = useNavigate()

  useEffect(
    () => {
      fetch(`http://localhost:8088/customers?_expand=user`)
      .then(response => response.json())
      .then((customersArray) => {
        setCustomers(customersArray)
      })
    },
    []
  )

  return <>
    <h2>List of Our Customers</h2>
    <article className="customers">
      {
        customers.map((customer) => { 
         return <>
         <div>{customer.user.fullName}</div>
         </>
        })
      }
    </article>
  </>
}