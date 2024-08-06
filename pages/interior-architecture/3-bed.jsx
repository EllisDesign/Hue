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

						<h1>3 Bedroom</h1>
					</div>
				</div>

				<figure className="feature-image">
					<img src={`${CDN}/img/renderings/interiors/21050_2Bd_SchA_Kitchen_5K10.jpg`} />
				</figure>

				<div className="wrap--wide">
					<HomeFeatures />
				</div>
			</main>
		</>
	)
}
