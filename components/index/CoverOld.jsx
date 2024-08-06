// Dependencies
import SVG from 'react-inlinesvg'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Ticker from 'react-ticker'
import { useDispatch, useSelector } from 'react-redux'

// Store
import { DEFAULT_ST_SCRUB } from 'store/constants'
import { uiUpdateRegisterOverlay } from 'store/actions'

// Components
import { HueCanvas } from 'components/ui'

// Component
export default function Cover() {
	const ui = useSelector(state => state.ui)
	const dispatch = useDispatch()
	const hueCanvasContainer = useRef(null)
	const logo = useRef(null)
	const left = useRef(null)

	//
	useEffect(() => {
		const [tagline] = left.current.children

		//
		const tl = gsap.timeline({
			scrollTrigger: {
				container: hueCanvasContainer.current,
				scrub: DEFAULT_ST_SCRUB,
				start: 0,
				end: () => window.innerHeight
			}
		})

		//
		tl.fromTo(tagline, { y: 0 }, { y: '-100vh' }, 0)
		tl.fromTo(logo.current, { y: 0 }, { y: '-50vh' }, 0)

		return () => tl.kill()
	}, [])
	//

	//
	return (
		<section className="page__index__cover" ref={hueCanvasContainer}>
			<div className="top">
				<div className="ticker">
					<Ticker speed={5} mode="smooth">
						{({ index }) => (
							<>
								<p>
									<span className="color-block" style={{ backgroundColor: '#ACCFD1' }}></span>
									In the morning, as the sun climbs and the warm tints of dawn disappear, the cold
									morning light creates a crystal-clear glow with a hint of blue.{' '}
									<span className="color-block" style={{ backgroundColor: '#9F9C6E' }}></span>
									The first colour contrast appears when the grey light changes to blue and yellow,
									shortly followed by the beginnings of red and green — there is colour.{' '}
									<span className="color-block" style={{ backgroundColor: '#F0B193' }}></span>
									The afternoon sees the emergence of a bright, saturated RGB palette of red, green
									and blue light. Green reaches its most saturated point.{' '}
									<span className="color-block" style={{ backgroundColor: '#F2654B' }}></span>
									By late-afternoon, the colours are no longer descriptive: the RGB palette has made
									way for cyan, magenta and lemon yellow, the secondary colours that occur when red,
									green and blue light overlap.{' '}
									<span className="color-block" style={{ backgroundColor: '#8C94AF' }}></span>
									In the evening, the warm air creates an orange, red and purple light. Surface
									colours and spatial colours flow into each other.
								</p>
							</>
						)}
					</Ticker>
				</div>

				<div className="left" ref={left}>
					<span className="tagline">Fall 2021</span>
				</div>

				<div className="right">
					<button
						className="btn__early-access"
						onClick={() => dispatch(uiUpdateRegisterOverlay({ active: true }))}
					>
						<span>Register</span>
						<SVG src="/img/common/icon-arrow-right.svg" />
					</button>
				</div>
			</div>

			<figure className="logo" ref={logo}>
				<SVG src="/img/common/hue-logo.svg" />
			</figure>

			<HueCanvas container={hueCanvasContainer} />
		</section>
	)
}
