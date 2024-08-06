// Dependencies
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Store
import { DEFAULT_ST_SCRUB } from 'store/constants'

//
export default function Intro({ rtoActive }) {
	const intro = useRef(null)

	//
	useEffect(() => {
		const threshold = 200
		const paragraphs = [...intro.current.children[0].children]
		const start = () => intro.current.offsetTop - (window.innerHeight - threshold)
		const end = () => start() + intro.current.clientHeight / 2
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: intro.current,
				scrub: DEFAULT_ST_SCRUB,
				invalidateOnRefresh: true,
				start,
				end
			}
		})

		//
		tl.fromTo(paragraphs, { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 })
	}, [])

	//
	return (
		<section className="page__splash__intro" ref={intro}>
			<div className="wrap--narrow">
				<p>
					Whatever happened to those quiet, human-scale neighbourhoods where life unfolds one moment at a time? The
					charm of Port Moody rests in its small-town feel. At hue, you'll find a modern home, bound by nature in a
					complete community.
				</p>

				<p>Get early access for hue.</p>

				{/* {rtoActive ? <p>Rent to Own opportunities coming soon.</p> : <p>Jr. 1-3 Bedroom Homes Coming Soon</p>} */}
			</div>
		</section>
	)
}
