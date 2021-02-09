import React from "react";

export function Card() {
	return (
		<div className="d-flex justify-content-around">
			<div className="card mx-3" style={{ width: "18rem" }}>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/230px-HTML5_logo_and_wordmark.svg.png"
					className="card-img-top"
					alt="..."
					height="266.23px"
				/>
				<div className="card-body">
					<h5 className="card-title">HTML</h5>
					<p className="card-text">
						HTML, siglas en inglés de HyperText Markup Language
						(‘lenguaje de marcas de hipertexto’), hace referencia al
						lenguaje de marcado para la elaboración de páginas web.
						Es un estándar que sirve de referencia del software que
						conecta con la elaboración de páginas web en sus
						diferentes versiones, define una estructura básica y un
						código (denominado código HTML) para la definición de
						contenido de una página web, como texto, imágenes,
						videos, juegos, entre otros
					</p>
					<a
						href="https://es.wikipedia.org/wiki/HTML"
						className="btn btn-info">
						Aprende más
					</a>
				</div>
			</div>

			<div className="card mx-3" style={{ width: "18rem" }}>
				<img
					height="266.23px"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
					className="card-img-top"
					alt=""
				/>
				<div className="card-body">
					<h5 className="card-title">CSS</h5>
					<p className="card-text">
						CSS (siglas en inglés de Cascading Style Sheets), en
						español «Hojas de estilo en cascada», es un lenguaje de
						diseño gráfico para definir y crear la presentación de
						un documento estructurado escrito en un lenguaje de
						marcado.2​ Es muy usado para establecer el diseño visual
						de los documentos web, e interfaces de usuario escritas
						en HTML o XHTML; el lenguaje puede ser aplicado a
						cualquier documento XML, incluyendo XHTML, SVG, XUL,
						RSS, etcétera.
						<br />
						<br />
					</p>
					<a
						href="https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada"
						className="btn btn-info">
						Aprende más
					</a>
				</div>
			</div>

			<div className="card mx-3" style={{ width: "18rem" }}>
				<img
					src="https://i.blogs.es/544e7d/650_1000_javascript_logo/450_1000.png"
					className="card-img-top"
					alt="..."
					height="266.23px"
				/>
				<div className="card-body">
					<h5 className="card-title">JAVASCRIPT</h5>
					<p className="card-text">
						JavaScript (abreviado comúnmente JS) es un lenguaje de
						programación interpretado, dialecto del estándar
						ECMAScript. Se define como orientado a objetos,2​ basado
						en prototipos, imperativo, débilmente tipado y dinámico.
						Se utiliza principalmente del lado del cliente,
						implementado como parte de un navegador web permitiendo
						mejoras en la interfaz de usuario y páginas web
						dinámicas3​ y JavaScript del lado del servidor
						(Server-side JavaScript o SSJS).
					</p>
					<a
						href="https://es.wikipedia.org/wiki/JavaScript"
						className="btn btn-info">
						Aprende más
					</a>
				</div>
			</div>

			<div className="card mx-3" style={{ width: "18rem" }}>
				<img
					src="https://e7.pngegg.com/pngimages/452/495/png-clipart-react-javascript-angularjs-ionic-github-text-logo-thumbnail.png"
					className="card-img-top"
					alt="..."
					height="266.23px"
				/>
				<div className="card-body">
					<h5 className="card-title">REACT</h5>
					<p className="card-text">
						React (también llamada React.js o ReactJS) es una
						biblioteca Javascript de código abierto diseñada para
						crear interfaces de usuario con el objetivo de facilitar
						el desarrollo de aplicaciones en una sola página. Es
						mantenido por Facebook y la comunidad de software libre.
						En el proyecto hay más de mil desarrolladores libres.
						React intenta ayudar a los desarrolladores a construir
						aplicaciones que usan datos que cambian todo el tiempo.
						Su objetivo es ser sencillo, declarativo y fácil de
						combinar.
						<br />
						<br />
						<br />
					</p>
					<a
						href="https://es.wikipedia.org/wiki/React"
						className="btn btn-info">
						Aprende más
					</a>
				</div>
			</div>
		</div>
	);
}
