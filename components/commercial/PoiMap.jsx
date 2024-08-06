// Dependencies
import SVG from 'react-inlinesvg'

// Component
export default function PoiMap() {
	return (
		<section className="page__commercial__poi-map">
			<div className="wrap--wide">
				<div className="two-col">
					<div className="left">
						<p>Location</p>

						<nav>
							<div>
								<button>
									<span>1</span>
									<span>Port Moody Secondary School</span>
								</button>
							</div>
							<div>
								<button>
									<span>2</span>
									<span>Kaffi Espresso Bar</span>
								</button>
							</div>
							<div>
								<button>
									<span>3</span>
									<span>Port Moody Elementary School</span>
								</button>
							</div>
							<div>
								<button>
									<span>4</span>
									<span>Confetti’s European Meat Market & Grocery</span>
								</button>
							</div>
							<div>
								<button>
									<span>5</span>
									<span>Moody Ales & Co</span>
								</button>
							</div>
							<div>
								<button>
									<span>6</span>
									<span>The Bakery Brewing</span>
								</button>
							</div>
							<div>
								<button>
									<span>7</span>
									<span>The Parkside Brewery</span>
								</button>
							</div>
							<div>
								<button>
									<span>8</span>
									<span>Rocky Point Ice Cream</span>
								</button>
							</div>
							<div>
								<button>
									<span>9</span>
									<span>Rocky Point Park</span>
								</button>
							</div>
							<div>
								<button>
									<span>10</span>
									<span>Yellow Dog Brewing Co</span>
								</button>
							</div>
							<div>
								<button>
									<span>11</span>
									<span>Twin Sails Brewing</span>
								</button>
							</div>
							<div>
								<button>
									<span>12</span>
									<span>Shoreline Trail</span>
								</button>
							</div>
						</nav>
					</div>

					<div className="right">
						<SVG src="/img/commercial/poi-map.svg" />
					</div>
				</div>
			</div>
		</section>
	)
}
