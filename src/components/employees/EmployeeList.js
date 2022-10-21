import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { EmployeeLocationFind } from "./EmployeeLocationFind"

export const EmployeeList = () => {
  const [employees, setemployees] = useState([])
  const navigate = useNavigate()
  useEffect(
    () => {
      fetch(`http://localhost:8088/employees?_expand=user`)
      .then(response => response.json())
      .then((employeesArray) => {
        setemployees(employeesArray)
      })
    },
    []
  )

  return <>
    <button onClick={() => navigate("/employee/create")}>Create Employee</button>
    <h2>List of Our Employees</h2>
    <article className="employees">
      {
        employees.map((employee) => { 
         return <EmployeeLocationFind employeeObj={employee} />
        })
      }
    </article>
  </>
}