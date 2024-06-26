import React, { useState } from "react";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todoValues, setTodoValues] = useState([]);


	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li> <input type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							setTodoValues(todoValues.concat(inputValue));
							setInputValue("")
						}
					}}
					placeholder="What do you need to get done?"></input></li>

				{todoValues.map((item, index) => (
					<li>
						{item}{""}
						<i
							class="fa fa-solid fa-trash"
							onClick={() =>
								setTodoValues(
									todoValues.filter(
										(t, currentIndex) =>
											index != currentIndex
									)
								)
							}></i>
					</li>
				))}

			</ul>
			<div>{todoValues.length} tasks</div>
		</div>
	);
};

export default Home;
