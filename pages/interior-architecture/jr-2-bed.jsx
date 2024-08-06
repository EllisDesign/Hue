// Dependencies
import Link from 'next/link'
import SVG from 'react-inlinesvg'

// Store
import { CDN } from 'store/constants'

// Components
import { Seo } from 'components/common'
import { HomeFeatures, PlanTypeList } from 'components/ui'

// Component
export default function UnitType() {
	return (
		<>
			<Seo title="Jr. 2 Bedroom" />

			<main className="page__unit-type">
				<div className="page-intro">
					<div className="wrap--wide">
						<p>Efficient 2 bedroom + 2 bath layouts with a generous amount of storage space.</p>

						<h1>Jr. 2 Bedroom</h1>
					</div>
				</div>

				<figure className="feature-image">
					<img src={`${CDN}/img/renderings/interiors/21050_2Bedroom_BedroomA01_5K11.jpg`} />
				</figure>

				<div className="wrap--wide">
					<HomeFeatures />
				</div>

				<div className="wrap--narrow">
					<h2 className="title">Floorplans</h2>
					<PlanTypeList
						image={`${CDN}/img/renderings/interiors/21050_2Bedroom_BedroomA01_5K11.jpg`}
						type="Jr. 2 Bedroom"
						title={false}
					/>
					<div className="actions">
						<Link href="/home-selection?type=Jr. 2 Bedroom">
							<a className="btn btn--outline btn--rounded">
								<span>Configure</span>
								<SVG src="/img/common/icon-arrow-01-103x78.svg" />
							</a>
						</Link>
					</div>
				</div>
			</main>
		</>
	)
}
