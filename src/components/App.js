import React from "react";
import Nav from "./Nav";
import HogList from "./HogList";

import hogs from "../porkers_data";

/* 
	Components:
		1. List of tiles of hogs
		2. Hog tiles
		3. Filter
		4. Sort

		App
		|--List of tiles of hogs
		|	|--Hog Tiles
		|--Filter
		|--Sort
*/

function App() {
	return (
		<div className="App">
			<Nav />
			<HogList data={hogs}/>
		</div>
	);
}

export default App;
