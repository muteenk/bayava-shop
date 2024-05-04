import Router from "./Routers/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</>
	);
}

export default App;
