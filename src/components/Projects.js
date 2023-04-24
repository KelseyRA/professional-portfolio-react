import React from "react";
import neoplants from "../images/neoplants.png";
import movieBattle from "../images/movieBattle.png";
import weatherApp from "../images/weatherApp.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.css";

function Projects() {
	return (
		// <main id="my-work">
		// 	<h2>My Work</h2>
		// 	<section id="card">
		// 		<div className="flex-box">
		// 			<div className="click-link">
		// 				<img
		// 					id="large-image"
		// 					src={weatherApp}
		// 					alt="cloud background with input fields"
		// 				/>
		// 				<a target="blank" href="https://kelseyra.github.io/weather-application/">
		// 					<h3>Weather Application</h3>
		// 				</a>
		// 			</div>
		// 		</div>
		// 		<div className="images flex-box">
		// 			<div class="click-link">
		// 				<img
		// 					className="project-images"
		// 					src="./assets/images/dell-LXI5kqCdEcE-unsplash.jpg"
		// 					alt="laptop"
		// 				/>
		// 				<a
		// 					target="blank"
		// 					href="https://kelseyra.github.io/horiseon-refactor-accessibility/"
		// 				>
		// 					<h3>Horiseon Refactor</h3>
		// 				</a>
		// 			</div>
		// 			<div className="click-link">
		// 				<img
		// 					className="project-images"
		// 					src="./assets/images/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg"
		// 					alt="glasses"
		// 				/>
		// 				<a
		// 					target="blank"
		// 					href="https://kelseyra.github.io/prework-study-guide/"
		// 				>
		// 					<h3>Prework Study-guide</h3>
		// 				</a>
		// 			</div>
		// 			<div className="click-link">
		// 				<img
		// 					className="project-images"
		// 					src={movieBattle}
		// 					alt="code"
		// 				/>
		// 				<a target="blank" href="https://kelseyra.github.io/movie-battle/">
		// 					<h3>Movie Battle</h3>
		// 				</a>
		// 			</div>
		// 			<div className="click-link">
		// 				<img
		// 					className="project-images"
		// 					src={neoplants} alt="screenshot of project"
		// 				/>
		// 				<a target="blank" href="https://grey-stones.herokuapp.com/">
		// 					<h3>NeoPlants</h3>
		// 				</a>
		// 			</div>
		// 		</div>
		// 	</section>
		// </main>
		<div class="container">
			<div className="row">
				<div className="col-md-4">
					<div class="card">
						<img src={neoplants} class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">NeoPlants</h5>
							<p class="card-text">
								<a href="https://grey-stones.herokuapp.com/">Deployed Application</a>
							</p>
							<p class="card-text">
							<a href="https://github.com/alexander1262/NeoPlants-Interactive-Web-Game">Github Repo</a>
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
								This card has supporting text below as a natural lead-in to
								additional content.
							</p>
							<p class="card-text">
								<small class="text-body-secondary">
									Last updated 3 mins ago
								</small>
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
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This card has even longer content
								than the first to show that equal height action.
							</p>
							<p class="card-text">
								<small class="text-body-secondary">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<div class="card">
						<img src="..." class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This card has even longer content
								than the first to show that equal height action.
							</p>
							<p class="card-text">
								<small class="text-body-secondary">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div class="card">
						<img src="..." class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This card has even longer content
								than the first to show that equal height action.
							</p>
							<p class="card-text">
								<small class="text-body-secondary">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div class="card">
						<img src="..." class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This card has even longer content
								than the first to show that equal height action.
							</p>
							<p class="card-text">
								<small class="text-body-secondary">
									Last updated 3 mins ago
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
