// Dependencies
import { useEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import gsap from 'gsap'

// Setup gsap
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// Components
import { Seo } from 'components/common'
import { Cover, Intro } from 'components/splash'
import { ArrowButton, LassoForm } from 'components/ui'
import Link from 'next/link'

// Component
export default function Splash() {
	const [rtoActive, setRtoActive] = useState(false)

	//
	useEffect(() => {
		document.documentElement.classList.add('no-scroll')
	}, [])

	//
	return (
		<>
			<Seo title="Now Selling" />

			<main className="page__splash">
				<Cover setRtoActive={setRtoActive} />
				<Intro rtoActive={rtoActive} />

				<section className="global__register-form">
					<div className="wrap--narrow">
						<LassoForm />
					</div>
				</section>
			</main>
		</>
	)
}
