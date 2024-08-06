// Dependencies
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import gsap from 'gsap'
import { motion } from 'framer-motion'

// Setup gsap
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// Components
import { Seo } from 'components/common'
import {
	RevealFullImage,
	SectionIntro,
	CustomSectionIntro,
	ArrowButton
} from 'components/ui'
import { Cover } from 'components/index'

// Store
import { CDN } from 'store/constants'
import { useEffect, useState } from 'react'

// Component
export default function Index() {
	const [isMobile, setIsMobile] = useState(false)
	const [showPopup, setShowPopup] = useState(false)

	//
	useEffect(() => {
		const triggerWidth = 768
		const onResize = () => {
			if (isMobile && window.innerWidth > triggerWidth) setIsMobile(false)
			if (!isMobile && window.innerWidth < triggerWidth) setIsMobile(true)
		}
		onResize()
		window.addEventListener('resize', onResize)
		return () => window.addEventListener('resize', onResize)
	}, [isMobile])

	//
	useEffect(() => {
		setTimeout(() => {
			setShowPopup(true)
		}, 4000)
	}, [])

	//
	return (
		<>
			<Seo title="Now Selling" />

			<main className="page__index">
				<Cover />

				<section className="page__index__natural-boundaries" id="NaturalBoundaries"></section>
				<SectionIntro
					title="The homes at hue are separated from the adjacent urban fabric by natural forest."
					link={{ href: '/natural-boundaries', label: 'Natural Boundaries' }}
					gradient="green"
				/>

				<section className="page__index__design-summary" id="DesignSummary"></section>
				<RevealFullImage
					imagePath={`${CDN}/img/renderings/exteriors/21050_FacadeCloseupB03_st(1.66)_5K04.jpg`}
					title={``}
					copy={`hue seeks to create a memorable western entry into Moody Centre.`}
				/>
				<SectionIntro
					title="The contemporary design expression will directly engage the public through the play of light, colour, and art."
					link={{ href: '/design-summary', label: 'Design Summary' }}
					gradient="purple"
				/>

				<section className="page__index__inside-architecture" id="InsideArchitecture"></section>
				<RevealFullImage
					imagePath={`${CDN}/img/renderings/interiors/21050_2Bd_SchA_KitchenLiving_5K11.jpg`}
					imagePosition={isMobile ? 'left' : 'center'}
					title={``}
					copy={`Thoughtful interior architecture creates warm, welcoming homes.`}
				/>

				<CustomSectionIntro gradient="orange">
					<h2>The homes at hue are a delicate balance of design, technology, and aesthetics.</h2>

					<ArrowButton href="/interior-architecture" label="Interior Architecture" />
				</CustomSectionIntro>

				<section className="page__index__building-for-life" id="BuildingforLife"></section>
				<RevealFullImage
					imagePath={`${CDN}/img/renderings/interiors/21050_SchA_Kitchen+Desk_StudioA01_5K05.jpg`}
					title={``}
					copy={`hue is more than the sum of parts — a fresh, contemporary approach to suburban living.`}
				/>
				<SectionIntro
					title="At hue, we’re creating home ownership opportunities for a diverse mix of residents."
					link={{ href: '/building-for-life', label: 'Building for Life' }}
					gradient="red"
				/>
			</main>


			<motion.section
				className="popup"
				initial="hidden"
				animate={showPopup ? 'visible' : 'hidden'}
				variants={{
					visible: { opacity: 1, staggerChildren: 0.1, display: 'flex' },
					hidden: { opacity: 0, staggerChildren: 0.1, transitionEnd: { display: 'none' } }
				}}
        onClick={() => setShowPopup(false)}
			>
				<motion.div
					className="content"
          onClick={(event) => event.stopPropagation()}
					variants={{
						visible: { opacity: 1, y: 0 },
						hidden: { opacity: 0, y: 100 }
					}}
				>
					<button className="btn__close" onClick={() => setShowPopup(false)}>
						<span className="material-icons">close</span>
					</button>

					<figure style={{ backgroundImage: 'url("https://cdnmarcon.sfo3.cdn.digitaloceanspaces.com/hue/31-5/hue-popup.png")' }}></figure>

					<p className="text--xsm">
						<strong>Sales gallery now closed.</strong>
					</p>

					<p className="text--xsm">
						As 90% of homes are now sold, we have permanently closed our Sales Gallery at Outpost. Register today to connect with a Marcon Advisor to learn how you can own one of the final homes at hue with only a 5% deposit.
            <br />
            <a className="btn btn--outline btn--rounded" href="/register"><span>Register</span><svg width="103" height="79" viewBox="0 0 103 79" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63.2954 0.40625L55.2678 8.34291L64.8064 17.7735C68.7742 21.6963 73.7856 24.3967 79.2441 25.5531L84.6295 26.694V33.6536H0V45.6684H84.6295V52.6279L79.2441 53.7689C73.7856 54.9253 68.7742 57.6256 64.8064 61.5485L55.2678 70.9791L63.2954 78.9157L103 39.661L63.2954 0.40625Z" fill="black"></path></svg></a>

          </p>
				</motion.div>
			</motion.section>
		</>
	)
}
