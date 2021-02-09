import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron mx-3">
			<h1 className="display-4">Aprender a Programar Nunca es tarde.</h1>
			<p className="lead">
				Puedes empezar a programar apartir de tres lenguajes de
				programación basicos en el diseño Web.
			</p>
			<hr className="my-4" />

			<a
				className="btn btn-primary btn-lg"
				href="https://www.w3schools.com/"
				role="button">
				Aprender sobre otros lenguajes de programación!!
			</a>
		</div>
	);
}
