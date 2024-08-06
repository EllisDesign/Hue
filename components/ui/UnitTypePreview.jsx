// Dependencies
import { useState, useRef, useEffect } from 'react'
import { motion, useCycle } from 'framer-motion'

//
const unitInfo = [
	{ first: 3, second: 12, third: 6 },
	{ first: 15, second: 3, third: 3 },
	{ first: 5, second: 7, third: 15 }
]

// Component
export default function UnitTypePreview() {
	const firstStatNumber = useRef(null)
	const secondStatNumber = useRef(null)
	const thirdStatNumber = useRef(null)
	const [activeUnitIndex, setActiveUnitIndex] = useState(0)
	const [wipeActive, cycleWipeActive] = useCycle('hidden', 'visible')
	const updateActiveUnitIndex = index => setActiveUnitIndex(index)

	//
	const countNumber = (el, currentNumber, finalNumber) => {
		const operation = finalNumber > currentNumber ? 'add' : 'minus'
		const newVal = operation === 'add' ? currentNumber + 1 : currentNumber - 1

		//
		el.innerText = newVal

		//
		if (newVal !== finalNumber) {
			setTimeout(() => countNumber(el, newVal, finalNumber), 75)
		}
	}

	//
	const updateStatNumbers = () => {
		const info = unitInfo[activeUnitIndex]
		const firstValue = parseInt(firstStatNumber.current.innerText)
		const secondValue = parseInt(secondStatNumber.current.innerText)
		const thirdValue = parseInt(thirdStatNumber.current.innerText)

		countNumber(firstStatNumber.current, firstValue, info.first)
		countNumber(secondStatNumber.current, secondValue, info.second)
		countNumber(thirdStatNumber.current, thirdValue, info.third)

		cycleWipeActive()
		setTimeout(() => cycleWipeActive(), 600)
	}

	//
	useEffect(() => {
		updateStatNumbers()
	}, [activeUnitIndex])

	//
	return (
		<div className="unit-type-preview">
			<div className="wrap--wide">
				<nav className="wrap--flex">
					<button data-active={activeUnitIndex === 0} onClick={() => updateActiveUnitIndex(0)}>
						<span className="unit-type text--md">Studio</span>
						<span className="subtitle">Starting from $349,900</span>
					</button>

					<button data-active={activeUnitIndex === 1} onClick={() => updateActiveUnitIndex(1)}>
						<span className="unit-type text--md">One Bedroom</span>
						<span className="subtitle">Starting from $349,900</span>
					</button>

					<button data-active={activeUnitIndex === 2} onClick={() => updateActiveUnitIndex(2)}>
						<span className="unit-type text--md">Two Bedroom</span>
						<span className="subtitle">Starting from $349,900</span>
					</button>
				</nav>

				<div className="active-unit-details">
					<figure>
						<div
							className="bg-image"
							data-active={activeUnitIndex === 0}
							style={{ background: `url(/img/index/tmp-image-4.jpg)` }}
						></div>

						<div
							className="bg-image"
							data-active={activeUnitIndex === 1}
							style={{ background: `url(/img/index/tmp-image-3.jpg)` }}
						></div>

						<div
							className="bg-image"
							data-active={activeUnitIndex === 2}
							style={{ background: `url(/img/index/tmp-image-2.jpg)` }}
						></div>

						<motion.div
							className="wipe"
							animate={wipeActive}
							variants={{
								hidden: {
									width: '0',
									transition: { duration: 0.3, ease: [0.66, 0.09, 0.2, 0.94] }
								},
								visible: {
									width: '100%',
									transition: { duration: 0.3, ease: [0.66, 0.09, 0.2, 0.94] }
								}
							}}
						></motion.div>
					</figure>

					<aside>
						<div className="stat-block">
							<span className="value text--xl">
								<span ref={firstStatNumber}>0</span>X
							</span>
							<span className="label">More Space</span>
						</div>

						<div className="stat-block">
							<span className="value text--xl">
								<span ref={secondStatNumber}>0</span>X
							</span>
							<span className="label">More Storage</span>
						</div>

						<div className="stat-block">
							<span className="value text--xl">
								<span ref={thirdStatNumber}>0</span>
							</span>
							<span className="label">Layout Options</span>
						</div>
					</aside>
				</div>
			</div>
		</div>
	)
}
