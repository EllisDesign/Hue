// Dependencies
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

// Store
import { DEFAULT_ST_SCRUB } from 'store/constants'

// Component
export default function SectionIntro({ children, gradient, scroll = true }) {
	const container = useRef(null)

	//
	useEffect(() => {
		const childElms = [...container.current.children[0].children]
		const args = scroll
			? {
					scrollTrigger: {
						container: container.current,
						scrub: DEFAULT_ST_SCRUB,
						start: () =>
							container.current.offsetTop - window.innerHeight + window.innerHeight * 0.3,
						end: () => container.current.offsetTop - window.innerHeight + window.innerHeight
					}
			  }
			: {}
		const tl = gsap.timeline(args)

		//
		tl.fromTo(
			container.current,
			{ backgroundPosition: '0% 50%' },
			{ backgroundPosition: '100% 50%' },
			0
		)

		childElms.forEach((elm, i) => {
			tl.fromTo(elm, { y: '25vh', opacity: 0 }, { y: 0, opacity: 1 }, 0.5 + i * 0.1)
		})

		if (!scroll) {
			tl.play()
		}

		return () => tl.kill()
	}, [])

	//
	return (
		<div className={`section-intro gradient--${gradient} `} ref={container} style={{}}>
			<div className="content">{children}</div>
		</div>
	)
}
