// Dependencies
import SVG from 'react-inlinesvg'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'

// Store
import { CDN, DEFAULT_ST_SCRUB } from 'store/constants'
import { uiUpdateRegisterOverlay } from 'store/actions'

// Components
import { BgImage } from 'components/ui'

// Component
export default function Cover({ setRtoActive }) {
	const dispatch = useDispatch()
	const hueCanvasContainer = useRef(null)
	const logo = useRef(null)
	const left = useRef(null)
	const background = useRef(null)
	const btnEarlyAccess = useRef(null)
	const gradient = useRef(null)
	const introMessaging = useRef(null)
	const firstScrollTagline = useRef(null)
	const [animationSteps, setAnimationSteps] = useState({
		index: 0,
		steps: [
			{ key: 'gradient', delay: 0, visible: true },
			{ key: 'messaging', delay: 800, visible: true },
			{ key: 'messaging', delay: 3500, visible: false },
			{ key: 'logo', delay: 1000, visible: true },
			{ key: 'topBar', delay: 250, visible: true }
		],
		states: {
			gradient: 'hidden',
			messaging: 'hidden',
			topBar: 'hidden',
			logo: 'hidden'
		}
	})

	//
	const getTopBarState = () => animationSteps.states.topBar

	//
	const playNextAnimationStep = () => {
		const step = animationSteps.steps[animationSteps.index]

		//
		if (!step) {
			document.documentElement.classList.remove('no-scroll')
			return console.log('Intro Animation Finished')
		}

		//
		setTimeout(
			() =>
				setAnimationSteps({
					index: animationSteps.index + 1,
					steps: animationSteps.steps,
					states: {
						...animationSteps.states,
						[step.key]: step.visible ? 'visible' : 'hidden'
					}
				}),
			[step.delay]
		)
	}

	//
	useEffect(() => {
		const [h2] = left.current.children

		//
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: hueCanvasContainer.current,
				scrub: DEFAULT_ST_SCRUB,
				pin: true,
				invalidateOnRefresh: true,
				start: 0,
				end: () => window.innerHeight / 1.5
			}
		})

		//
		tl.fromTo(introMessaging.current, { display: 'flex' }, { display: 'none' }, 0)
		tl.fromTo(logo.current, { y: 0, opacity: 1 }, { y: '-100vh', opacity: -1 }, 0)
		tl.fromTo([h2, btnEarlyAccess.current], { y: 0 }, { y: '-10rem' }, 0.1)
		tl.fromTo(
			gradient.current,
			{ opacity: 1, backgroundPosition: '100% 50%' },
			{ opacity: 0, backgroundPosition: '0% 50%', duration: 2 },
			0
		)
		tl.fromTo(background.current, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1 }, 0)
		tl.fromTo(firstScrollTagline.current, { y: 300 }, { y: 0 }, 0.2)

		//
		return () => tl.kill()
	}, [])

	//
	useEffect(() => {
		playNextAnimationStep()
	}, [animationSteps])

	//
	return (
		<>
			<section className="page__index__cover" ref={hueCanvasContainer}>
				<motion.div
					className="intro-messaging"
					initial="hidden"
					animate={animationSteps.states.messaging}
					variants={introMessagingVariants}
					ref={introMessaging}
				>
					<div className="text-top">
						<p>
							<motion.span variants={introMessagingChildVariants}>Colours</motion.span>{' '}
							<motion.span variants={introMessagingChildVariants}>breathe</motion.span>
						</p>
						<p>
							<motion.span variants={introMessagingChildVariants}>with</motion.span>{' '}
							<motion.span variants={introMessagingChildVariants}>changing</motion.span>{' '}
							<motion.span variants={introMessagingChildVariants}>light</motion.span>
						</p>
					</div>

					<div className="text-bottom">
						<p>
							<motion.span variants={introMessagingChildVariants}>&mdash; they</motion.span>{' '}
							<motion.span variants={introMessagingChildVariants}>absorb,</motion.span>
						</p>
						<p>
							<motion.span variants={introMessagingChildVariants}>reflect,</motion.span>{' '}
							<motion.span variants={introMessagingChildVariants}>and</motion.span>{' '}
							<motion.span variants={introMessagingChildVariants}>echo</motion.span>
						</p>
						<p>
							<motion.span variants={introMessagingChildVariants}>their</motion.span>{' '}
							<motion.span variants={introMessagingChildVariants}>surroundings.</motion.span>
						</p>
					</div>
				</motion.div>

				<motion.div className="top" initial="hidden" animate={getTopBarState()} variants={topBarVariants}>
					<div className="left" ref={left}>
						<span className="tagline">Now Selling</span>
					</div>

					<div className="right">
						{/* <button
							className="btn btn--outline btn--rounded btn--white btn__early-access"
							ref={btnEarlyAccess}
							onClick={() => dispatch(uiUpdateRegisterOverlay({ active: true }))}
						>
							<span>Register</span>
							<SVG src="/img/common/icon-arrow-01-103x78.svg" />
						</button> */}

						<a
							href="/register"
							className="btn btn--outline btn--rounded btn--white btn__early-access"
							ref={btnEarlyAccess}
						>
							<span>Register</span>
							<SVG src="/img/common/icon-arrow-01-103x78.svg" />
						</a>
					</div>
				</motion.div>

				<motion.figure
					className="logo"
					ref={logo}
					initial="hidden"
					animate={animationSteps.states.logo}
					variants={logoVariants}
				>
					<SVG src="/img/common/hue-logo.svg" />
				</motion.figure>

				<div className="bg-wrap" ref={background}>
					<div className="first-scroll-tagline" ref={firstScrollTagline}>
						<p>A playful exploration of light, colour, and art in Port Moody.</p>
						<p>Final homes now selling.</p>
					</div>

					<BgImage src={`${CDN}/img/renderings/exteriors/21050_HeroNorthB02_st%281.50%29_5K05.jpg`} />
				</div>

				<motion.div
					className="gradient-wrap"
					ref={gradient}
					initial="hidden"
					animate={animationSteps.states.gradient}
					variants={gradientWrapVariants}
				></motion.div>
			</section>
		</>
	)
}

//
const gradientWrapVariants = {
	hidden: {
		backgroundPosition: '0% 50%',
		transition: {
			duration: 1,
			ease: [0.66, 0.11, 0.29, 0.8]
		}
	},
	visible: {
		backgroundPosition: '100% 50%',
		transition: {
			duration: 1,
			ease: [0.66, 0.11, 0.29, 0.8]
		}
	}
}

//
const introMessagingVariants = {
	hidden: {
		transition: {
			staggerChildren: 0.05
		}
	},
	visible: {
		transition: {
			staggerChildren: 0.1
		}
	}
}

//
const introMessagingChildVariants = {
	hidden: {
		opacity: 0,
		transition: { duration: 0.5 }
	},
	visible: {
		opacity: 1,
		transition: { duration: 1 }
	}
}

//
const topBarVariants = {
	hidden: {
		opacity: 0,
		transition: { duration: 1, ease: 'easeInOut' }
	},
	visible: {
		opacity: 1,
		transition: { duration: 1, ease: 'easeInOut' }
	}
}

//
const logoVariants = {
	hidden: {
		opacity: 0,
		transition: { duration: 1 }
	},
	visible: {
		opacity: 1,
		transition: { duration: 1 }
	}
}
