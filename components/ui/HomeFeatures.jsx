// Dependencies
import Image from 'next/image'
import Link from 'next/link'
import SVG from 'react-inlinesvg'
import { CDN } from 'store/constants'

// Component
export default function HomeFeatures() {
	return (
		<section className="features">
			<h2 className="title">Features</h2>

			<div className="column">
				<figure
					style={{
						backgroundImage: `url('${CDN}/img/renderings/interiors/21050_SchA_Kitchen+Desk_StudioA01_5K09.jpg')`
					}}
				></figure>

				<hr />

				<span className="title">Accent Colour</span>

				<p>
					Designer colour schemes feature soft matte warm grey cabinetry and matte black plumbing fixtures
					throughout.
				</p>

				<p className="no-mb">
					<strong>Your choice of two accent wood oak tone finishes</strong>
				</p>

				<ul className="choices no-bull">
					<li>
						<figure>
							<img src="/img/unit-type/scheme-natural.png" />
						</figure>
						<span>Natural</span>
					</li>

					<li>
						<figure>
							<img src="/img/unit-type/scheme-moonlight-grey.png" />
						</figure>
						<span>Moonlight Grey</span>
					</li>
				</ul>
			</div>

			<div className="column">
				<figure
					style={{
						backgroundImage: `url('/img/unit-type/210506-216.jpg')`
					}}
				></figure>

				<hr />

				<span className="title">Interior Finishes</span>

				<p>Welcoming interiors invite residents home to contemporary spaces.</p>

				<p className="no-mb">
					<strong>All Included</strong>
				</p>

				<ul className="choices">
					<li>
						<span>Premium Wide Plank, Natural Oak Tone Resilient Laminate Flooring</span>
					</li>

					<li>
						<span>Elegant Quartz Stone Countertops</span>
					</li>

					<li>
						<span>Bedroom Closet Organizers</span>
					</li>
				</ul>
			</div>

			<div className="column">
				<figure
					style={{
						backgroundImage: `url('/img/unit-type/210506-218_web.jpg')`
					}}
				></figure>

				<hr />

				<span className="title">Integrated Appliances</span>

				<p>Premium integrated and paneled appliance package.</p>

				<p className="no-mb">
					<strong>All Included</strong>
				</p>

				<ul className="choices">
					<li>
						<span>Paneled Liebherr Refrigerator and Fulgor Milano Dishwasher</span>
					</li>
					<li>
						<span>AEG Gas Cooktop and Electric Wall Oven</span>
					</li>
					<li>
						<span>Cabinetry Concealed Hood Fan</span>
					</li>
					<li>
						<span>Samsung Washer Dryer</span>
					</li>
				</ul>
			</div>
		</section>
	)
}
