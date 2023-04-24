import React, { useState } from "react";
import "../styles/Form.css";

import { validateEmail } from "../utils/helpers";

function Form() {
	const [email, setEmail] = useState("");
	const [fullName, setFullName] = useState("");
	const [message, setMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleInputChange = (e) => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		if (inputType === "email") {
			setEmail(inputValue);
		} else if (inputType === "fullName") {
			setFullName(inputValue);
		} else {
			setMessage(inputValue)
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!validateEmail(email) || !fullName || !message) {
			setErrorMessage("Email, name, message is not valid");

			return;
		}

		setEmail("");
		setFullName("");
		setMessage("");
	};

	return (
		<div>
			<form className="form">
				<input
					value={fullName}
					name="fullName"
					onChange={handleInputChange}
					type="text"
					placeholder="Full Name"
				/>
				<input
					value={email}
					name="email"
					onChange={handleInputChange}
					type="email"
					placeholder="Email"
				/>
				<input
					value={message}
					name="message"
					onChange={handleInputChange}
					type="textarea"
					placeholder="Message"
				/>
				<button type="button" onClick={handleFormSubmit}>
					Submit
				</button>
			</form>
			{errorMessage && (
				<div>
					<p className="error-text">{errorMessage}</p>
				</div>
			)}
		</div>
	);
}

export default Form;
