// Dependencies
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

// Store
import { DEFAULT_ST_SCRUB } from 'store/constants'

// Component
export default function RevealFullImage({ imagePath, imagePosition = 'center', title, copy }) {
	const container = useRef(null)
	const image = useRef(null)
	const titleEl = useRef(null)
	const copyEl = useRef(null)
	const bgWrap = useRef(null)

	//
	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				container: container.current,
				scrub: DEFAULT_ST_SCRUB,
				start: () => container.current.offsetTop - window.innerHeight,
				end: () => container.current.offsetTop + container.current.clientHeight / 2.5
			}
		})

		//
		//tl.fromTo(bgWrap.current, { width: '80%', height: '50%' }, { width: '100%', height: '100%' }, 0)
		tl.fromTo(bgWrap.current, { y: 100, opacity: 0 }, { y: 0, duration: 0.2, opacity: 1 }, 0)
		if (title) tl.fromTo(titleEl.current, { y: '25vh', opacity: 0 }, { y: '-10vh', opacity: 1 }, 0.2)
		if (copy) tl.fromTo(copyEl.current, { y: '0', opacity: 0 }, { y: '-10vh', opacity: 1 }, 0.2)

		return () => tl.kill()
	}, [])

	//
	return (
		<figure className="full-width-image fullscreen" ref={container}>
			<div className="content">
				{title && <h2 dangerouslySetInnerHTML={{ __html: title }} ref={titleEl}></h2>}
				{copy && <p ref={copyEl} dangerouslySetInnerHTML={{ __html: copy }}></p>}
			</div>

			<div className="bg-wrap" ref={bgWrap}>
				<div
					ref={image}
					className="bg-image"
					style={{ backgroundImage: `url('${imagePath}')`, backgroundPositionX: imagePosition }}
				></div>
			</div>
		</figure>
	)
}
