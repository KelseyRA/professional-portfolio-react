import React, { useState } from "react";
import Bio from "./Bio";
import Form from "./Form";
import Projects from "./Projects";
import Resume from "./Resume";

import "./Projects.module.css";
import "../styles/Header.css";

function Header() {
	const [contact, setContact] = useState(false);
	const [aboutMe, setAboutMe] = useState(true);
	const [myWork, setMyWork] = useState(false);
    const [resume, setResume] = useState(false);

	function aboutMeClick() {
		setContact(false);
		setAboutMe(true);
		setMyWork(false);
		setResume(false);
	}

	function contactClick() {
		setContact(true);
		setAboutMe(false);
		setMyWork(false);
		setResume(false);
	}

	function myWorkClick() {
		setContact(false);
		setAboutMe(false);
		setMyWork(true);
		setResume(false);
	}

    function resumeClick() {
		setContact(false);
		setAboutMe(false);
		setMyWork(false);
        setResume(true);
	}

	return (
		<header className ="main-header-styles">
			<ul>
				<li>
					<a href="#contact-me" onClick={contactClick}>
						Contact Me
					</a>
				</li>
				<li>
					<a href="#portfolio" onClick={myWorkClick}>
						Portfolio
					</a>
				</li>
				<li>
					<a href="#about-me" onClick={aboutMeClick}>
						About Me
					</a>
				</li>
                <li>
                    <a href="#resume" onClick={resumeClick}>
                        Resume
                    </a>
                </li>
			</ul>
            <h1>Kelsey Alderman</h1>
			{contact && <Form />}
			{aboutMe && <Bio />}
			{myWork && <Projects />}
            {resume && <Resume />}
		</header>
	);
}

export default Header;
