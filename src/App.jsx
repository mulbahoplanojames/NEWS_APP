import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layouts/Layout";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/*' element={<Layout />}>
						<Route index element={<Layout />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
