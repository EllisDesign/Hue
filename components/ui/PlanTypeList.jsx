// Dependencies
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Components
import { Overlay } from 'components/ui'

// Data
import planData from '/public/json/plans'

// Component
export default function PlanTypeList({ image, type, title = true }) {
	const [overlayState, setOverlayState] = useState({ active: false, name: null, plan: null })
	const [plan, setPlan] = useState([])

	//
	const updatePlan = row => {
		setOverlayState({
			...overlayState,
			plan: row
		})
	}

	//
	useEffect(() => {
		const match = planData.find(plan => plan.name === type)
		setPlan(match)
	}, [])

	//
	return (
		<>
			<article className="plan-type-list">
				<aside>
					{title && <h2>{plan.name}</h2>}

					<div className="table">
						<div className="table__row table__row--header">
							<div className="table__cell">Plan Type</div>
							<div className="table__cell">Interior</div>
							<div className="table__cell">Exterior</div>
							<div className="table__cell">Total</div>
							<div className="table__cell">Floorplan</div>
						</div>

						{plan.plans &&
							plan.plans.map((row, i) => (
								<div className="table__row" key={i} data-disabled={row.sold}>
									<div className="table__cell">{row.planType}</div>
									<div className="table__cell">{row.interiorArea}</div>
									<div className="table__cell">{row.exteriorArea}</div>
									<div className="table__cell">{row.totalArea}</div>
									<div className="table__cell table__cell--actions">
										<button
											className="btn__view-plan"
											onClick={() => setOverlayState({ active: true, name: plan.name, plan: row })}
										>
											View Plan
										</button>

										{/* <Link
											href={`/home-selection?type=${encodeURIComponent(plan.name)}&plan=${row.planType}`}
											as="/home-selection"
										>
											<a className="btn__view-plan">Configure</a>
										</Link> */}
									</div>
								</div>
							))}
					</div>
				</aside>
			</article>

			<Overlay state={overlayState} setState={setOverlayState}>
				<div className="page__floorplans__overlay">
					<motion.div
						className="global__overlay__header  page__floorplans__overlay__header"
						initial="hidden"
						animate={overlayState.active ? 'visible' : 'hidden'}
						variants={{
							hidden: {
								opacity: 0,
								y: 50,
								transition: { duration: 0.2, ease: 'easeOut' }
							},
							visible: {
								opacity: 1,
								y: 0,
								transition: { duration: 0.2, delay: 0.2, ease: 'easeOut' }
							}
						}}
					>
						<div className="left">
							<nav className="plan-type-nav">
								{overlayState.plan &&
									plan &&
									plan.plans.map((row, i) => (
										<button
											onClick={() => updatePlan(row)}
											data-active={row.planType === overlayState?.plan?.planType}
											key={i}
										>
											{row.planType}
										</button>
									))}
							</nav>

							<div className="title-bar">
								<a href={overlayState?.plan?.pdf} target="_blank" className="">
									Download PDF
								</a>
								<Link
									href={`/home-selection?type=${encodeURIComponent(overlayState?.name)}&plan=${
										overlayState?.plan?.planType
									}`}
									as="/home-selection"
								>
									<a>Configure Plan</a>
								</Link>
							</div>

							{overlayState.plan && <span className="unit-type">{overlayState.name}</span>}
						</div>
						<div className="center">
							<button
								className="btn__close"
								onClick={() => setOverlayState({ active: false, name: null, plan: null })}
							></button>
						</div>
						<div className="right">
							{overlayState.plan && (
								<div className="areas">
									<div className="area">
										<span className="label">Interior Living</span>
										<span className="value text--md">{overlayState.plan.interiorArea}</span>
									</div>

									<div className="area">
										<span className="label">Exterior</span>
										<span className="value text--sm">{overlayState.plan.exteriorArea}</span>
									</div>

									<div className="area">
										<span className="label">Total</span>
										<span className="value text--sm">{overlayState.plan.totalArea}</span>
									</div>
								</div>
							)}
						</div>
					</motion.div>

					<motion.div
						className="page__floorplans__overlay__content"
						initial="hidden"
						animate={overlayState.active ? 'visible' : 'hidden'}
						variants={{
							hidden: {
								opacity: 0,
								y: 50,
								transition: { duration: 0.2 }
							},
							visible: {
								opacity: 1,
								y: 0,
								transition: { duration: 0.2, delay: 0.3 }
							}
						}}
					>
						<figure>
							{overlayState.plan && (
								<img
									src={`https://cdnmarcon.sfo3.digitaloceanspaces.com/hue/img/floorplans/${overlayState.plan.planType}.svg`}
								/>
							)}
						</figure>
					</motion.div>

					<motion.div
						className="page__floorplans__overlay__bottom"
						initial="hidden"
						animate={overlayState.active ? 'visible' : 'hidden'}
						variants={{
							hidden: {
								opacity: 0,
								y: 50,
								transition: { duration: 0.2 }
							},
							visible: {
								opacity: 1,
								y: 0,
								transition: { duration: 0.2, delay: 0.3 }
							}
						}}
					>
						{overlayState?.plan?.plates.map((plate, i) => (
							<figure key={i}>
								<img src={`/img/floorplans/plates/${plate.src}`} />
								{plate.label && <span>{plate.label}</span>}
							</figure>
						))}
					</motion.div>
				</div>
			</Overlay>
		</>
	)
}
