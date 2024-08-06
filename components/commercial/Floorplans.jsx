// Dependencies
import { useState } from 'react'
import SVG from 'react-inlinesvg'

// Component
export default function Floorplans() {
	const [showLowerLevel, setShowLowerLevel] = useState(true)

	//
	return (
		<section className="page__commercial__floorplans">
			<div className="wrap--wide">
				<div className="two-col">
					<div className="left">
						<p>Available Strata Lots</p>

						<div className="table">
							<div className="row">
								<div className="column">Unit</div>
								<div className="column">SQFT</div>
								<div className="column">Price</div>
							</div>

							<div className="row">
								<div className="column">CRU 1</div>
								<div className="column">3,301</div>
								<div className="column">$3,136,200</div>
							</div>

							<div className="row">
								<div className="column">CRU 2</div>
								<div className="column">2,151</div>
								<div className="column">$2,795,800</div>
							</div>

							<div className="row">
								<div className="column">CRU 3</div>
								<div className="column">1,981</div>
								<div className="column">$2,574,700</div>
							</div>

							<div className="row">
								<div className="column">CRU 4</div>
								<div className="column">1,393</div>
								<div className="column">$1,880,300</div>
							</div>

							<div className="row">
								<div className="column">CRU 5</div>
								<div className="column">1,365</div>
								<div className="column">$1,842,600</div>
							</div>

							<div className="row">
								<div className="column">CRU 6</div>
								<div className="column">1,405</div>
								<div className="column">$1,896,300</div>
							</div>

							<div className="row">
								<div className="column">CRU 7</div>
								<div className="column">3,013</div>
								<div className="column">$3,012,800</div>
							</div>
						</div>
					</div>

					<div className="right">
						<nav>
							<button data-active={showLowerLevel} onClick={() => setShowLowerLevel(true)}>
								Lower Level
							</button>
							<button data-active={!showLowerLevel} onClick={() => setShowLowerLevel(false)}>
								Upper Level
							</button>
						</nav>

						{showLowerLevel && <SVG src="/img/commercial/Floorplan.svg" />}
						{!showLowerLevel && <SVG src="/img/commercial/Group.svg" />}
					</div>
				</div>
			</div>
		</section>
	)
}
