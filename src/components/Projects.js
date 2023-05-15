import React from "react";
import neoplants from "../images/neoplants.png";
import movieBattle from "../images/movieBattle.png";
import weatherApp from "../images/weatherApp.png";
import projectThree from "../images/project3.png";
import codingQuiz from "../images/codingQuiz.png";
import passwordGen from "../images/passwordGen.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.module.css";

function Projects() {
	return (
	
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<div className="card">
						<img src={neoplants} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">NeoPlants</h5>
							<p className="card-text">
								<a href="https://grey-stones.herokuapp.com/">
									Deployed Application
								</a>
							</p>
							<p className="card-text">
								<a href="https://github.com/alexander1262/NeoPlants-Interactive-Web-Game">
									Github Repo
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card">
						<img src={movieBattle} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Movie Battle</h5>
							<p className="card-text">
								<a href="https://kelseyra.github.io/movie-battle/">
									Deployed Application
								</a>
							</p>
							<p className="card-text">
								<a href="https://github.com/KelseyRA/movie-battle">
									Github Repo
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card">
						<img src={weatherApp} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Weather Application</h5>
							<p className="card-text">
								<a href="https://kelseyra.github.io/weather-application/">
									Deployed Application
								</a>
							</p>
							<p className="card-text">
								<a href="https://github.com/KelseyRA/weather-application">
									Github Repo
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<div className="card">
						<img src={projectThree} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">My Yearly List</h5>
							<p className="card-text">
								<a href="https://gentle-falls-37134.herokuapp.com/">
									Deployed Application
								</a>
							</p>
							<p className="card-text">
								<a href="https://github.com/FranklynSuriel/My_Yearly_Record">
									Github Repo
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card">
						<img src={codingQuiz} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Coding Quiz</h5>
							<p className="card-text">
								<a href="https://kelseyra.github.io/coding-quiz/">
									Deployed Application
								</a>
							</p>
							<p className="card-text">
								<a href="https://github.com/KelseyRA/coding-quiz">
									Github Repo
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card">
						<img src={passwordGen} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Password Generator</h5>
							<p className="card-text">
								<a href="https://kelseyra.github.io/password-generator/">
									Deployed Application
								</a>
							</p>
							<p className="card-text">
								<a href="https://github.com/KelseyRA/password-generator">
									Github Repo
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
