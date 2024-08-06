// Dependencies
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

// Component
export default function Hotspots({ data, background }) {
	const map = useRef(null)
	const [hotspots, setHotspots] = useState([])

	//
	const positionHotspots = () => {
		const imageWidth = 1785
		const imageHeight = 1102
		const imageAspectRatio = imageWidth / imageHeight
		const containerHeight = window.innerWidth < 992 ? map.current.clientHeight / 2 : map.current.clientHeight
		const windowAspectRatio = window.innerWidth / containerHeight

		const newHotspots = data.map(hotspot => {
			let xPos = hotspot.x
			let yPos = hotspot.y

			if (windowAspectRatio > imageAspectRatio) {
				yPos = (yPos / imageHeight) * 100
				xPos = (xPos / imageWidth) * 100
			} else {
				yPos = (yPos / (windowAspectRatio / imageAspectRatio) / imageHeight) * 100
				xPos = (xPos / (windowAspectRatio / imageAspectRatio) / imageWidth) * 100
			}

			return {
				...hotspot,
				x: xPos,
				y: yPos
			}
		})

		setHotspots(newHotspots)
	}

	//
	useEffect(() => {
		positionHotspots()
		window.addEventListener('resize', positionHotspots)
		return () => window.removeEventListener('resize', positionHotspots)
	}, [])

	//
	return (
		<section className="top-down" ref={map}>
			<div className="hotspots">
				{hotspots.map((hotspot, i) => (
					<>
						<div
							className="hotspot"
							style={{
								marginTop: `${hotspot.y}%`,
								marginLeft: `${hotspot.x}%`
							}}
							key={i}
						>
							<div className="tooltip">
								<figure>
									<Image {...hotspot.image} />
								</figure>

								<aside>
									<span className="title">{hotspot.title}</span>

									<button className="btn__view-gallery" onClick={hotspot.cb}>
										View Gallery
									</button>
								</aside>
							</div>

							<div className="dot"></div>
						</div>
					</>
				))}
			</div>

			<figure className="base-image">
				<img src={background} />
			</figure>
		</section>
	)
}
