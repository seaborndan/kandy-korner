import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../../locations/LocationList"
import { Products } from "../products/Products"
import { KandyForm } from "../products/KandyForm"
import { ProductContainer } from "../products/ProductContainer"
import { EmployeeViews } from "./EmployeeViews"
import { CustomerViews } from "./CustomerViews"
export const ApplicationViews = () => {

	const localKandyUser = localStorage.getItem("kandy_user")
	const kandyUserObj = JSON.parse(localKandyUser)

	if(kandyUserObj.staff) {
		return <EmployeeViews />
	}
	else {
		return <CustomerViews />
	}
}

