import React from "react";

import "../styles/Resume.css";

function Resume() {
	return (
		<div className="resume">
			<h2>Resume</h2>
			<a
				href="https://drive.google.com/file/d/1i7jpNdgu703_2rbhPNYVGzoYgRk8jofv/view"
				download
			>
				Download my resume here
			</a>
			<div className="proficiencies">
				<div>
					<ul className="frontend">
						<h5>Frontend Proficiencies</h5>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React</li>
						<li>responsive design</li>
						<li>Bootstrap</li>
						<li>Handlebars</li>
					</ul>
				</div>
				<div>
					<ul className="backend">
						<h5>Backend Proficiencies</h5>
						<li>Mongoose</li>
						<li>MySQL</li>
						<li>MongoDB</li>
						<li>NoSQL</li>
						<li>Apollo</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Resume;
