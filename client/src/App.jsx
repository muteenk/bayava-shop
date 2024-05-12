import Router from "./Routers/Router";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.withCredentials = true;

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
