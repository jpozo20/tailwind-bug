import "./app.module.css";
import Button from "./button";
import Spinner from "./Spinner";

const App = (): JSX.Element => {
	return (
		<div className="app w-96 h-96 flex content-center items-center justify-center">
			<div className="login">
				<Button />
				<Spinner />
			</div>
		</div>
	);
};

export default App;
