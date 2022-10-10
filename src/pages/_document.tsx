import Document, { Head, Html, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="pt-br">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap"
						rel="stylesheet"
					/>
					<link rel="shortcut icon" href="img/LogoHover.svg" type="image/svg" />
					{/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> */}
					<meta charSet="utf-8" />

					<meta name="title" content="AgroFlux - Um jeito simples de fazer tecnologia" />
					<meta name="description" content="Oferecendo soluções que facilitam a vida do agricultor" />
					<meta name="keywords" content="Fluxometro, AgroFlux, Fluxin" />
					<meta name="author" content="AgroFlux Equipamentos de Controle Agricola Ltda" />
					<meta name="copyright" content="AgroFlux Equipamentos de Controle Agricola Ltda" />
					<meta name="robots" content="index" />
					<meta name="language" content="Portuguese" />
					<meta name="geo.region" content="BR-PR" />
					<meta name="geo.placename" content="Campo Mourão" />
					<meta name="geo.position" content="-24.04583 -52.38278" />
					<meta name="ICBM" content="-24.04583 -52.38278" />
					<meta name="theme-color" content="##111827" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="##111827" />
					<meta name="apple-mobile-web-app-title" content="AgroFlux" />
					<meta name="application-name" content="AgroFlux" />
					<meta name="msapplication-TileColor" content="##111827" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="AgroFlux - Um jeito simples de fazer tecnologia" />
					<meta property="og:description" content="Oferecendo soluções que facilitam a vida do agricultor." />
					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:title" content="AgroFlux - Um jeito simples de fazer tecnologia" />
					<meta
						property="twitter:description"
						content="Oferecendo soluções que facilitam a vida do agricultor."
					/>
					
				</Head>

				<body>
					
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
