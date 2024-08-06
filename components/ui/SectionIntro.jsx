// Dependencies
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

// Store
import { DEFAULT_ST_SCRUB } from 'store/constants'

// Components
import { ArrowButton } from 'components/ui'

// Component
export default function SectionIntro({
	title,
	copy,
	gradient,
	link = { href: null, label: null },
	scroll = true,
	pagination = false
}) {
	const container = useRef(null)

	//
	useEffect(() => {
		const children = [...container.current.children[0].children]
		const args = scroll
			? {
					scrollTrigger: {
						container: container.current,
						scrub: DEFAULT_ST_SCRUB,
						start: () => container.current.offsetTop - window.innerHeight,
						end: () => container.current.offsetTop
					}
			  }
			: {}
		const tl = gsap.timeline(args)

		//
		tl.fromTo(container.current, { backgroundPosition: '0% 50%' }, { backgroundPosition: '100% 50%' }, 0)

		if (pagination) {
			tl.fromTo(children, { y: 100, opacity: 0 }, { y: 0, opacity: 2 }, 0)
		} else {
			tl.fromTo(children, { y: '25vh', opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 }, 0.5)
		}

		//
		return () => tl.kill()
	}, [])

	//
	return (
		<div className={`section-intro gradient--${gradient} `} ref={container} data-pagination={pagination}>
			<div className="content">
				{title && <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>}

				{link.href ? (
					<ArrowButton href={link.href} label={link.label} />
				) : (
					<p className="text--lg" dangerouslySetInnerHTML={{ __html: copy }}></p>
				)}
			</div>
		</div>
	)
}
