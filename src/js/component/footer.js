import React from "react";

export function Footer() {
	return (
		<ul className="nav justify-content-center  bg-light mt-3 p-2">
			<li className="nav-item">
				<a
					className="nav-link disabled"
					href="#"
					tabIndex="-1"
					aria-disabled="true">
					<b>Desarrolador: Milton A. Solis</b>
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="mailto:miltonsolis26@gmail.com">
					<i className="fas fa-envelope" /> Email
				</a>
			</li>
			<li className="nav-item">
				<a
					className="nav-link"
					href="https://github.com/miltonsolis1914"
					tabIndex="-1"
					aria-disabled="false">
					<i className="fab fa-github" /> GitHub
				</a>
			</li>
		</ul>
	);
}
