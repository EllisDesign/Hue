// Dependencies
import Head from 'next/head'

// Component
export default function HeadComponent() {
	return (
		<Head>
			<meta charSet="utf-8" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="viewport" content="width=device-width,  initial-scale=1" />
			<meta property="og:type" content="website" />
			<meta name="twitter:card" content="summary_large_image" />

			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

			{process.env.NODE_ENV === 'production' && process.env.GTM_ID && (
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','${process.env.GTM_ID}');`
					}}
				></script>
			)}
		</Head>
	)
}
