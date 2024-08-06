// Dependencies
import gsap from 'gsap'
import Link from 'next/link'

// Store
import { CDN } from 'store/constants'

// Component
export default function RetailStrata() {
	const scrollTo = cls => gsap.to(window, { duration: 1, scrollTo: cls })

	//
	return (
		<section className="page__commercial__retail-strata">
			<div className="wrap--wide">
				<div className="masthead">
					<h1>Retail Strata for Sale</h1>

					<nav>
						<div>
							<button onClick={() => scrollTo('.page__commercial__selling-points')}>Highlights</button>
						</div>
						<div>
							<button onClick={() => scrollTo('.page__commercial__poi-map')}>Location</button>
						</div>
						<div>
							<button onClick={() => scrollTo('.page__commercial__design')}>Design</button>
						</div>
						<div>
							<button onClick={() => scrollTo('.page__commercial__floorplans')}>Strata Plans</button>
						</div>
						<div>
							<Link href="/commercial/register">
								<a>Register for Commercial</a>
							</Link>
						</div>
					</nav>
				</div>

				<div className="two-col">
					<div className="left">
						<div>
							<p>
								Albert & St. Johns Street,
								<br />
								Port Moody, BC
							</p>

							<p className="text--xsm">
								With nearby access to a variety of amenities, urban centres and the nature-dense shoreline, hue
								brings an opportunity to purchase retail strata space in a bright and vibrant neighbourhood where
								urban living, art and nature intersect.
							</p>
						</div>

						<div className="stats">
							<div>
								<span>Residential Area:</span>
								<span>185,681 sq.ft</span>
							</div>

							<div>
								<span>Retail Area:</span>
								<span>14,608 sq.ft</span>
							</div>

							<div>
								<span>New Living Space:</span>
								<span>222 Homes</span>
							</div>

							<div>
								<span>New Retail Space:</span>
								<span>7 CRUs</span>
							</div>
						</div>

						<p>Possession Q3 2025</p>
					</div>

					<div className="right">
						<img src={`${CDN}/img/commercial/Main.jpg`} />
					</div>
				</div>
			</div>
		</section>
	)
}
