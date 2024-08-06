// Dependencies
import { Provider } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'

// Store
import { useStore } from 'store'

// Components
import { Head, Header, Footer, RegisterOverlay } from 'components/common'

// Styles
import 'styles/main.scss'

// Component
export default function App({ Component, pageProps, router }) {
	const store = useStore(pageProps.initialReduxState)

	//
	return (
		<Provider store={store}>
			<Head />
			<Header />

			<AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
				<motion.div
					key={router.route}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>

			<RegisterOverlay />
			<Footer />
		</Provider>
	)
}
