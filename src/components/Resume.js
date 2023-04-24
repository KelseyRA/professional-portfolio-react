import React from "react";

import "../styles/Resume.css"

function Resume() {
	return (
		<div>
			<h2>Resume</h2>
			    <a href="" download="">
				Download my resume here
			    </a>
			    <ul className = "proficiencies">
				    <li>HTML</li>
				    <li>CSS</li>
				    <li>JavaScript</li>
				    <li>React</li>
				    <li>responsive design</li>
				    <li>Bootstrap</li>
				    <li>Handlebars</li>
			    </ul>
		</div>
	);
}

export default Resume;
