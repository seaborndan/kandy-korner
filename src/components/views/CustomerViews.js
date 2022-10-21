import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../../locations/LocationList"
import { Products } from "../products/Products"
import { KandyForm } from "../products/KandyForm"
import { ProductContainer } from "../products/ProductContainer"
export const CustomerViews = () => {
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
			</Route>
</Routes>
)
}

