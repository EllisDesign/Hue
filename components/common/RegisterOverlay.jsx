// Dependencies
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'

// Store
import { uiUpdateRegisterOverlay } from 'store/actions'

// Components
import { LassoForm, Overlay } from 'components/ui'

// Component
export default function RegisterOverlay() {
	const ui = useSelector(state => state.ui)
	const dispatch = useDispatch()

	//
	return (
		<Overlay state={ui.registerOverlay}>
			<motion.div
				className="global__overlay__header"
				initial="hidden"
				animate={ui.registerOverlay.active ? 'visible' : 'hidden'}
				variants={{
					hidden: {
						opacity: 0,
						y: 50,
						transition: { duration: 0.2, ease: 'easeOut' }
					},
					visible: {
						opacity: 1,
						y: 0,
						transition: { duration: 0.2, delay: 0.2, ease: 'easeOut' }
					}
				}}
			>
				<button
					className="btn__close"
					onClick={() => dispatch(uiUpdateRegisterOverlay({ active: false }))}
				></button>
			</motion.div>

			<motion.div
				className="global__overlay__register"
				initial="hidden"
				animate={ui.registerOverlay.active ? 'visible' : 'hidden'}
				variants={{
					hidden: {
						opacity: 0,
						y: 50,
						transition: { duration: 0.2 }
					},
					visible: {
						opacity: 1,
						y: 0,
						transition: { duration: 0.2, delay: 0.3 }
					}
				}}
			>
				<div className="wrap--narrow">
					<h3>Register</h3>

					<p>Provide your details to receive project updates.</p>

					<LassoForm />
				</div>
			</motion.div>
		</Overlay>
	)
}
