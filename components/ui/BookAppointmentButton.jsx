// Dependencies
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

//
export default function BookAppointmentButton() {
	const [animate, setAnimate] = useState('visible')

	//
	useEffect(() => {
		const onScroll = () => {
			const { top } = document.querySelector('footer').getBoundingClientRect()
			if (top - window.innerHeight < 0 && animate === 'visible') setAnimate('hidden')
			if (top - window.innerHeight > 0 && animate === 'hidden') setAnimate('visible')
		}
		onScroll()
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [animate])

	//
	return (
		<motion.div initial="hidden" animate={animate} variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}>
			<motion.a
				href="https://calendly.com/hue-sg"
				target="_blank"
				className="btn__global-book"
				initial="hidden"
				// whileHover="visible"
				variants={{
					hidden: {
						transition,
						width: 68
					},
					visible: {
						transition,
						width: 'auto'
					}
				}}
			>
				<motion.span
					className="icon material-icons"
					variants={{
						hidden: {
							left: '50%'
						},
						visible: {
							left: '14%'
						}
					}}
				>
					calendar_month
				</motion.span>

				<motion.span
					className="label"
					variants={{
						hidden: {
							opacity: 0,
							x: '50%'
						},
						visible: {
							opacity: 1,
							x: 0
						}
					}}
				>
					<span>Book an Appointment</span>
				</motion.span>
			</motion.a>
		</motion.div>
	)
}

//
const transition = { duration: 0.4 }
