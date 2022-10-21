import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../../locations/LocationList"
import { Products } from "../products/Products"
import { KandyForm } from "../products/KandyForm"
import { ProductContainer } from "../products/ProductContainer"
import { EmployeeList } from "../employees/EmployeeList"
import { EmployeeForm } from "../employees/EmployeeForm"
import { CustomerList } from "../customers/CustomerList"
export const EmployeeViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1>The Kandy Korner</h1>
					<div>Come get yer Kandy here!	</div>

					<Outlet />
				</>
			}>

			<Route path="locations" element={
				<LocationList /> 
			}	/>
			<Route path="products" element={
				<ProductContainer/>
			} />
			<Route path="kandy/create" element={ <KandyForm /> } />
      <Route path="employees" element={ <EmployeeList /> } />
      <Route path="employee/create" element={
        <EmployeeForm /> 
      } />
      <Route path="customers" element={ <CustomerList /> } />
      
			</Route>
</Routes>
)
}

