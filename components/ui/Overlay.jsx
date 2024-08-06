// Dependencies
import { motion } from 'framer-motion'
import { useEffect } from 'react'

// Component
export default function Overlay({ children, state }) {
	//
	useEffect(() => {
		if (state.active && !document.documentElement.classList.contains('no-scroll')) {
			document.documentElement.classList.add('no-scroll')
		}

		if (state.active && document.documentElement.classList.contains('no-scroll')) {
			document.documentElement.classList.remove('no-scroll')
		}
	}, [state.active])

	//
	return (
		<motion.section
			className="global__overlay"
			initial="hidden"
			animate={state.active ? 'visible' : 'hidden'}
			variants={{
				hidden: {
					opacity: 0,
					scale: 0.8,
					transitionEnd: { display: 'none' },
					transition: { duration: 0.2 }
				},
				visible: { display: 'block', opacity: 1, scale: 1, transition: { duration: 0.2 } }
			}}
		>
			{children}
		</motion.section>
	)
}
