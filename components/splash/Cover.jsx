// Dependencies
import SVG from 'react-inlinesvg'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'

// Store
import { DEFAULT_ST_SCRUB } from 'store/constants'

// Components
import { BgImage } from 'components/ui'
import Ticker from 'react-ticker'
import Link from 'next/link'

// Component
export default function Cover({ setRtoActive }) {
	const hueCanvasContainer = useRef(null)
	const logo = useRef(null)
	const left = useRef(null)
	const background = useRef(null)
	const btnEarlyAccess = useRef(null)
	const gradient = useRef(null)
	const cloudContainer = useRef(null)
	const introMessaging = useRef(null)
	const banner = useRef(null)
	const [showBanner, setShowBanner] = useState(false)
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
	const registerRTO = () => {
		scrollToForm()
		setRtoActive(true)
	}

	//
	const getTopBarState = () => {
		if (showBanner) {
			return 'bannerVisible'
		}

		return animationSteps.states.topBar
	}

	//
	const updateShowBanner = shouldShow => setShowBanner(shouldShow)

	//
	const scrollToForm = () => gsap.to(window, { duration: 1, scrollTo: '.page__splash__intro' })

	//
	const playNextAnimationStep = () => {
		const step = animationSteps.steps[animationSteps.index]

		//
		if (!step) {
			document.documentElement.classList.remove('no-scroll')
			//updateShowBanner(true)
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
		const clouds = [...cloudContainer.current.children]

		//
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: hueCanvasContainer.current,
				scrub: DEFAULT_ST_SCRUB,
				pin: true,
				invalidateOnRefresh: true,
				start: 0,
				end: () => window.innerHeight
			}
		})

		//
		tl.fromTo(introMessaging.current, { display: 'flex' }, { display: 'none' }, 0)
		tl.fromTo(logo.current, { y: 0, opacity: 1 }, { y: '-100vh', opacity: -1 }, 0)
		tl.fromTo([h2, btnEarlyAccess.current], { y: 0 }, { y: '-10rem' }, 0.1)
		//tl.fromTo(banner.current, { y: 0 }, { y: '-10rem' }, 0.2)
		tl.fromTo(
			gradient.current,
			{ opacity: 1, backgroundPosition: '100% 50%' },
			{ opacity: 0, backgroundPosition: '0% 50%', duration: 2 },
			0
		)
		tl.fromTo(clouds, { y: `100vh` }, { y: '-200vh' }, 0)
		tl.fromTo(background.current, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1 }, 0)

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
			<section className="page__splash__cover" ref={hueCanvasContainer}>
				{/* <motion.div
					className="banner"
					initial="hidden"
					animate={showBanner ? 'visible' : 'hidden'}
					variants={bannerVariants}
					ref={banner}
				>
					<p>
						Limited Rent to Own Opportunities Available –{' '}
						<Link href="/rent-to-own">
							<a className="btn__register">Register Now</a>
						</Link>
					</p>
				</motion.div> */}

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
						<button
							className="btn btn--outline btn--rounded btn--white btn__early-access"
							ref={btnEarlyAccess}
							onClick={scrollToForm}
						>
							<span>Get Early Access</span>
							<SVG src="/img/common/icon-arrow-01-103x78.svg" />
						</button>
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
					<BgImage src="/img/splash/21050_HeroNorthB02_st_5K04.jpg" />
				</div>

				<motion.div
					className="gradient-wrap"
					ref={gradient}
					initial="hidden"
					animate={animationSteps.states.gradient}
					variants={gradientWrapVariants}
				></motion.div>

				<div className="clouds" ref={cloudContainer}>
					<img src="/img/splash/cloud2.webp" style={{ top: `0` }} />

					<img src="/img/splash/cloud2.webp" style={{ left: `-50vw` }} />
					<img src="/img/splash/cloud2.webp" style={{ left: '50vw', transform: `rotate(180deg)` }} />
					<img src="/img/splash/cloud1.webp" style={{ top: `80vh`, left: '25vw' }} />
					<img
						src="/img/splash/cloud1.webp"
						style={{ top: `100vh`, left: '-25vw', transform: `rotate(180deg)` }}
					/>
					<img src="/img/splash/cloud2.webp" style={{ top: '50vh' }} />

					<img src="/img/splash/cloud3.webp" style={{ top: '50vh' }} />

					<img src="/img/splash/cloud2.webp" style={{ top: '50vh', left: `-50vw` }} />
					<img src="/img/splash/cloud2.webp" style={{ top: '50vh', left: '50vw', transform: `rotate(180deg)` }} />
					<img src="/img/splash/cloud1.webp" style={{ top: `90vh`, left: '25vw' }} />
					<img
						src="/img/splash/cloud1.webp"
						style={{ top: `100vh`, left: '-25vw', transform: `rotate(180deg)` }}
					/>
					<img src="/img/splash/cloud2.webp" style={{ top: '50vh' }} />

					<img src="/img/splash/cloud3.webp" style={{ top: `70vh`, left: '-25vw' }} />

					<img src="/img/splash/cloud2.webp" style={{ top: '100vh', left: '50vw', transform: `rotate(180deg)` }} />
					<img src="/img/splash/cloud1.webp" style={{ top: '130vh', left: '25vw' }} />

					<img src="/img/splash/cloud3.webp" style={{ top: '100vh', left: '50vw' }} />
				</div>
			</section>
		</>
	)
}

//
const bannerVariants = {
	hidden: {
		y: `-100%`,
		transition: {
			duration: 0.25,
			ease: 'easeOut'
		}
	},
	visible: {
		y: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut'
		}
	}
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
	},
	bannerVisible: {
		opacity: 1,
		y: 50,
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
