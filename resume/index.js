import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"

import store from "./store.js"
import Resume from "./components/resume.jsx"
ReactDOM.render(
	<Provider store={store}>
		<Resume />
	</Provider>
	,
	document.getElementById("demo")
)
