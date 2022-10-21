import { useState } from "react"
import { useNavigate } from "react-router-dom"



export const EmployeeForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [newHire, update] = useState({
      fullName: ""
    })

    const [employee, updateEmployee] = useState({
      locationId: null,
      startDate: null
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const honeyUserObject = JSON.parse(localKandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        // TODO: Create the object to be saved to the API 
        const userToSendToAPI = {
          fullName: newHire.fullName,
          isStaff: true
        }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userToSendToAPI)
        })
          .then(response => response.json())
          .then(createdUser => {
            if (createdUser.hasOwnProperty("id")) {
                handleSaveButtonClick2(createdUser)
            }
        })
          
    }

    const handleSaveButtonClick2 = (userObj) => {
      // TODO: Create the object to be saved to the API
      const ticketToSendToAPI = {
        userId: userObj.id,
        startDate: employee.startDate,
        payRate: employee.payRate,
        locationId: employee.locationId,
      }

      // TODO: Perform the fetch() to POST the object to the API
      return fetch(`http://localhost:8088/employees`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(ticketToSendToAPI)
      })
        .then(response => response.json())
        .then(() => {
          navigate("/employees")
        })
        
  }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Hire Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="newhireName">Enter New Hire Name</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="i.e. John Doe"
                        value={newHire.fullName}
                        onChange={  
                          (evt) => {
                            const copy = {...newHire}
                            copy.fullName = evt.target.value
                            update(copy)
                          }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="newHireLocationId">Enter Store Location ID</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="1 or 2"
                        value={employee.locationId}
                        onChange={  
                          (evt) => {
                            const copy = {...employee}
                            copy.locationId = parseInt(evt.target.value)
                            updateEmployee(copy)
                          }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Enter Start Date</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        placeholder="1 or 2"
                        value={employee.startDate}
                        onChange={  
                          (evt) => {
                            const copy = {...employee}
                            copy.startDate = evt.target.value
                            updateEmployee(copy)
                          }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Enter Start Date</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Pay rate (INT)"
                        value={employee.payRate}
                        onChange={  
                          (evt) => {
                            const copy = {...employee}
                            copy.payRate = evt.target.value
                            updateEmployee(copy)
                          }
                        } />
                </div>
            </fieldset>
            <button
              onClick={
                (clickEvent) => handleSaveButtonClick(clickEvent)
              }
              className="btn btn-primary">
                Submit Hire Form
            </button>
        </form>
    )
}