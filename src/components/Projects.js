import React from "react";
import neoplants from "../images/neoplants.png";
import movieBattle from "../images/movieBattle.png";
import weatherApp from "../images/weatherApp.png";
import planner from "../images/planner.png";
import codingQuiz from "../images/codingQuiz.png";
import passwordGen from "../images/passwordGen.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.css";

function Projects() {
	return (
	
		<div class="container">
			<div className="row">
				<div className="col-md-4">
					<div class="card">
						<img src={neoplants} class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">NeoPlants</h5>
							<p class="card-text">
								<a href="https://grey-stones.herokuapp.com/">
									Deployed Application
								</a>
							</p>
							<p class="card-text">
								<a href="https://github.com/alexander1262/NeoPlants-Interactive-Web-Game">
									Github Repo
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div class="card">
						<img src={movieBattle} class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">Movie Battle</h5>
							<p class="card-text">
								<a href="https://kelseyra.github.io/movie-battle/">
									Deployed Application
								</a>
							</p>
							<p class="card-text">
								<a href="https://github.com/KelseyRA/movie-battle">
									Github Repo
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div class="card">
						<img src={weatherApp} class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">Weather Application</h5>
							<p class="card-text">
								<a href="https://kelseyra.github.io/weather-application/">
									Deployed Application
								</a>
							</p>
							<p class="card-text">
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
					<div class="card">
						<img src={planner} class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">Daily Planner</h5>
							<p class="card-text">
								<a href="https://kelseyra.github.io/daily-planner/">
									Deployed Application
								</a>
							</p>
							<p class="card-text">
								<a href="https://github.com/KelseyRA/daily-planner">
									Github Repo
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div class="card">
						<img src={codingQuiz} class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">Coding Quiz</h5>
							<p class="card-text">
								<a href="https://kelseyra.github.io/coding-quiz/">
									Deployed Application
								</a>
							</p>
							<p class="card-text">
								<a href="https://github.com/KelseyRA/coding-quiz">
									Github Repo
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div class="card">
						<img src={passwordGen} class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">Password Generator</h5>
							<p class="card-text">
								<a href="https://kelseyra.github.io/password-generator/">
									Deployed Application
								</a>
							</p>
							<p class="card-text">
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
