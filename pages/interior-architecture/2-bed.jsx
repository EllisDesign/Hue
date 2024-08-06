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
			<Seo title="2 Bedroom" />

			<main className="page__unit-type">
				<div className="page-intro">
					<div className="wrap--wide">
						<p>Spacious family homes equipped with a variety of storage options.</p>

						<h1>2 Bedroom</h1>
					</div>
				</div>

				<figure className="feature-image">
					<img src={`${CDN}/img/renderings/interiors/21050_2Bedroom_Bedroom2_A01_5K11.jpg`} />
				</figure>

				<div className="wrap--wide">
					<HomeFeatures />
				</div>

				<div className="wrap--narrow">
					<h2 className="title">Floorplans</h2>
					<PlanTypeList
						image={`${CDN}/img/renderings/interiors/21050_2Bedroom_Bedroom2_A01_5K11.jpg`}
						type="2 Bedroom"
						title={false}
					/>
					<div className="actions">
						<Link href="/home-selection?type=2 Bedroom">
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
