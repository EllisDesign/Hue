// Dependencies
import SVG from 'react-inlinesvg'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'

//
let lastSt = 10

// Component
export default function Header() {
	const ui = useSelector(state => state.ui)
	const dispatch = useDispatch()
	const router = useRouter()
	const [isHidden, setIsHidden] = useState(true)
	const [navOpen, setNavOpen] = useState(false)
	const [hasBackground, setHasBackground] = useState(false)
	const [showNavContent, setShowNavContent] = useState(false)
	const [pageTitle, setPageTitle] = useState('')

	//
	const closeNav = () => {
		setShowNavContent(false)
		setTimeout(() => setNavOpen(false), 500)
	}

	//
	useEffect(() => {
		const delayPages = ['/']
		const hiddenPages = ['/ipad/register']
		const bgOnlyPages = [
			'/interior-architecture/1-bed-den',
			'/interior-architecture/1-bed',
			'/interior-architecture/2-bed-den',
			'/interior-architecture/2-bed',
			'/interior-architecture/3-bed-den',
			'/interior-architecture/3-bed',
			'/interior-architecture/jr-1-bed',
			'/interior-architecture/jr-2-bed',
			'/interior-architecture/jr-3-bed',
			'/home-selection',
			'/thank-you',
			'/register',
			'/openhousexhappyhour',
			'/commercial',
			'/commercial/register',
			'/commercial/thank-you'
		]
		const shouldDelay = delayPages.includes(router.pathname)
		const shouldHide = hiddenPages.includes(router.pathname)
		const shouldShowWithBackground = bgOnlyPages.includes(router.pathname)

		//
		const onScroll = () => {
			//
			if (shouldHide) {
				if (!isHidden) return setIsHidden(true)
				return
			}

			//
			if (navOpen) {
				if (isHidden) return setIsHidden(false)
				return
			}

			// Hide the header on the homepage cover, show after
			if (shouldDelay) {
				if (window.pageYOffset < window.innerHeight && !isHidden) setIsHidden(true)
				if (window.pageYOffset > window.innerHeight && isHidden) setIsHidden(false)
			} else {
				if (isHidden) setIsHidden(false)
			}

			//
			if ((window.pageYOffset > (window.innerHeight - 75) * 0.8 && !hasBackground) || shouldShowWithBackground)
				setHasBackground(true)
			if (window.pageYOffset < (window.innerHeight - 75) * 0.8 && hasBackground && !shouldShowWithBackground)
				setHasBackground(false)

			//
			lastSt = window.pageYOffset < 10 ? 10 : window.pageYOffset
		}
		onScroll()
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [isHidden, navOpen, hasBackground, router.pathname])

	//
	useEffect(() => {
		if (navOpen && !showNavContent) setShowNavContent(true)
		if (!navOpen && showNavContent) setShowNavContent(false)

		if (navOpen) {
			document.documentElement.classList.add('no-scroll')
		}

		if (navOpen && document.documentElement.classList.contains('no-scroll')) {
			document.documentElement.classList.remove('no-scroll')
		}
	}, [navOpen])

	//
	useEffect(() => {
		const [blank, title] = router.pathname.split('/')
		const route = title.replace(/-/g, ' ') // Replace hyphens with spaces
		setPageTitle(route === 'openhousexhappyhour' ? '' : route)
	}, [router.pathname])

	//
	return (
		<>
			<header
				className="global__header"
				data-hidden={isHidden}
				data-nav-open={navOpen}
				data-background={hasBackground}
			>
				<div className="left">
					<Link href="/" scroll={false}>
						<a className="logo" onClick={closeNav}>
							<SVG src="/img/common/hue-logo.svg" />
						</a>
					</Link>
				</div>

				<div className="right">
					<h1>{pageTitle}</h1>
          <span><a href="/register">Register</a></span>
					<button className="btn__hamburger" onClick={() => setNavOpen(!navOpen)}>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</header>

			<nav className="global__nav" data-nav-open={navOpen}>
				<motion.div
					className="left"
					initial="hidden"
					animate={showNavContent ? 'visible' : 'hidden'}
					variants={{
						hidden: { opacity: 0, x: 20 },
						visible: {
							opacity: 1,
							x: 0,
							transition: { duration: 0.3, delay: 0, ease: [0.88, 0.15, 0.51, 0.99] }
						}
					}}
				>
					<span className="small-caps-title">Navigation</span>

					<nav>
						<Link href="/natural-boundaries" scroll={false}>
							<a onClick={closeNav}>Natural Boundaries</a>
						</Link>

						<Link href="/design-summary" scroll={false}>
							<a onClick={closeNav}>Design Summary</a>
						</Link>

						<Link href="/interior-architecture" scroll={false}>
							<a onClick={closeNav} className="half-mb">
								Interior Architecture
							</a>
						</Link>

						{/* <Link href="/interior-architecture/jr-1-bed" scroll={false}>
							<a onClick={closeNav} className="unit-type-link">
								<span>Jr. 1 Bedroom</span>
							</a>
						</Link> */}

						{/* <Link href="/interior-architecture/1-bed" scroll={false}>
							<a onClick={closeNav} className="unit-type-link">
								<span>1 Bedroom</span>
							</a>
						</Link> */}

						{/* <Link href="/interior-architecture/1-bed-den" scroll={false}>
							<a onClick={closeNav} className="unit-type-link">
								<span>1 Bedroom + Den</span>
							</a>
						</Link> */}

						<Link href="/interior-architecture/jr-2-bed" scroll={false}>
							<a onClick={closeNav} className="unit-type-link">
								<span>Jr. 2 Bedroom</span>
							</a>
						</Link>

						<Link href="/interior-architecture/2-bed" scroll={false}>
							<a onClick={closeNav} className="unit-type-link">
								<span>2 Bedroom</span>
							</a>
						</Link>

						<Link href="/interior-architecture/2-bed-den" scroll={false}>
							<a onClick={closeNav} className="unit-type-link">
								<span>2 Bedroom + Den</span>
							</a>
						</Link>

						{/* <Link href="/interior-architecture/jr-3-bed" scroll={false}>
							<a onClick={closeNav} className="unit-type-link">
								<span>Jr. 3 Bedroom</span>
							</a>
						</Link> */}

						{/* <Link href="/interior-architecture/3-bed" scroll={false}>
							<a onClick={closeNav} className="unit-type-link">
								<span>3 Bedroom</span>
							</a>
						</Link> */}

						{/* <Link href="/interior-architecture/3-bed-den" scroll={false}>
							<a onClick={closeNav} className="unit-type-link unit-type-link--last">
								<span>3 Bedroom + Den</span>
							</a>
						</Link> */}

						<Link href="/building-for-life" scroll={false}>
							<a onClick={closeNav}>Building For Life</a>
						</Link>

						<Link href="/commercial" scroll={false}>
							<a onClick={closeNav}>Commercial</a>
						</Link>
					</nav>
				</motion.div>

				<motion.div
					className="right"
					initial="hidden"
					animate={showNavContent ? 'visible' : 'hidden'}
					variants={{
						hidden: { opacity: 0, x: 20 },
						visible: {
							opacity: 1,
							x: 0,
							transition: { duration: 0.3, delay: 0.15 /*0.3*/, ease: [0.88, 0.15, 0.51, 0.99] }
						}
					}}
				>
					<span className="small-caps-title">Quick Links</span>

					<div>
						<Link href="/floorplans" scroll={false}>
							<a onClick={closeNav}>Floorplans</a>
						</Link>
						<br />
						<Link href="/realtors" scroll={false}>
							<a onClick={closeNav}>Realtors</a>
						</Link>
						<br />
						{/* <button onClick={() => dispatch(uiUpdateRegisterOverlay({ active: true }))}>Registration</button> */}
						<a href="/register">Registration</a>
						<br />
						<Link href="/home-selection" scroll={false}>
							<a onClick={closeNav}>Configure your home</a>
						</Link>
					</div>

					<hr />

					 <span className="small-caps-title">Sales Gallery</span>

					<div>
						<p>
							Permanently Closed
							<br />
							Available by Appointment

						</p>

						<p>
							<a href="tel:604-461-3445">604.461.3445</a>
						</p>
					</div>
				</motion.div>
			</nav>
		</>
	)
}
