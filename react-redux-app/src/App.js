import React from "react";
import "./App.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer as reducer } from "./reducers/reducer";

import SoccerForm from "./components/SoccerForm";
import SoccerVideos from "./components/SoccerVideos";

const store = createStore(reducer, applyMiddleware(thunk))

function App() {

	return (
		<Provider store={store}>
			<div className='App'>
				<h1>Soccer Highlights</h1>
				<SoccerForm />
				<SoccerVideos />
			</div>
		</Provider>
	);
}

export default App;
