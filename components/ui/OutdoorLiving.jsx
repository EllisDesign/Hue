// Dependencies
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

//
const images = [
	{ image: 'img/index/tmp-image-1.jpg', caption: 'Lorem ipsum dolor', minutes: '1' },
	{ image: 'img/index/tmp-image-2.jpg', caption: 'Lorem ipsum dolor', minutes: '2' },
	{ image: 'img/index/tmp-image-3.jpg', caption: 'Lorem ipsum dolor', minutes: '3' },
	{ image: 'img/index/tmp-image-4.jpg', caption: 'Lorem ipsum dolor', minutes: '4' },
	{ image: 'img/index/tmp-image-5.jpg', caption: 'Lorem ipsum dolor', minutes: '5' },
	{ image: 'img/index/tmp-image-6.jpg', caption: 'Lorem ipsum dolor', minutes: '6' },
	{ image: 'img/index/tmp-image-1.jpg', caption: 'Lorem ipsum dolor', minutes: '7' },
	{ image: 'img/index/tmp-image-2.jpg', caption: 'Lorem ipsum dolor', minutes: '8' },
	{ image: 'img/index/tmp-image-3.jpg', caption: 'Lorem ipsum dolor', minutes: '9' },
	{ image: 'img/index/tmp-image-4.jpg', caption: 'Lorem ipsum dolor', minutes: '10' },
	{ image: 'img/index/tmp-image-5.jpg', caption: 'Lorem ipsum dolor', minutes: '11' },
	{ image: 'img/index/tmp-image-6.jpg', caption: 'Lorem ipsum dolor', minutes: '12' }
]

// Component
export default function OutdoorLiving() {
	const line = useRef(null)
	const [activeIndex, setActiveIndex] = useState(0)
	const [hoverIndex, setHoverIndex] = useState(0)

	//
	const getVal = () => line.current.clientWidth / images.length

	//
	const getNewIndex = (target, val) => {
		const i = Math.round(target / val)

		if (i < 0) return 0
		if (i > images.length - 1) return images.length - 1

		return i
	}

	//
	const onDragEnd = (event, info) => {
		const val = getVal()
		const newIndex = getNewIndex(info.point.x, val)

		setActiveIndex(newIndex)
		setHoverIndex(newIndex)
	}

	//
	const onDrag = (event, info) => {
		const val = getVal()
		const newIndex = getNewIndex(info.point.x, val)

		setHoverIndex(newIndex)
	}

	//
	const modifyTarget = target => {
		const val = getVal()
		const newIndex = getNewIndex(target, val)

		return newIndex * val
	}

	//
	return (
		<div className="outdoor-living section-mb">
			<div className="wrap--wide">
				<h2>Outdoor Living</h2>

				<div className="photo-roll">
					{images.map(({ image, caption }, i) => (
						<div className="photo" data-active={activeIndex === i} key={i}>
							<div className="bg-image" style={{ backgroundImage: `url(${image})` }}></div>
							<span className="caption">{caption}</span>
						</div>
					))}
				</div>

				<div className="minute-dragger">
					<div className="line" ref={line}>
						<div className="start-block">
							<span className="mark"></span>
							<span className="minutes text--xl">0</span>
						</div>

						<motion.div
							className="drag-trigger"
							drag="x"
							dragConstraints={line}
							dragElastic={0}
							dragTransition={{
								//bounceDamping: 10,
								//bounceStiffness: 500,
								//min: 0,
								//max: 2,
								power: 0,
								//restDelta: 0.1,
								timeConstant: 100,
								modifyTarget
							}}
							onDrag={onDrag}
							onDragEnd={onDragEnd}
						>
							<span className="circle"></span>

							<div className="label">
								<span className="number text--xl">
									{images[hoverIndex] ? images[hoverIndex].minutes : null}
								</span>
								<span className="text">Minutes</span>
							</div>
						</motion.div>

						<div className="end-block">
							<span className="mark"></span>
							<span className="minutes text--xl">15</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
