// Dependencies
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

//
export default function ScrollingBlock({
	pageReady,
	type,
	extended = false,
	full = false,
	startY = null,
	children
}) {
	const container = useRef(null)

	//
	useEffect(() => {
		if (!pageReady) return

		//
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container.current,
				scrub: 0.5,
				invalidateOnRefresh: true,
				start: () => container.current.offsetTop,
				end: () => container.current.offsetTop + container.current.clientHeight + window.innerHeight / 2
			}
		})

		//
		tl.fromTo(container.current, { y: startY || '100%', opacity: 0 }, { y: 0, opacity: 2 })

		return () => tl.kill()
	}, [pageReady])

	//
	return (
		<div
			ref={container}
			className={`block block--${type} ${extended ? 'block--extended' : ''} ${full ? 'block--full' : ''}`}
		>
			{children}
		</div>
	)
}
