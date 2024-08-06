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
			<Seo title="2 Bedroom + Den" />

			<main className="page__unit-type">
				<div className="page-intro">
					<div className="wrap--wide">
						<p>
							Designed to accommodate growing families, these homes feature a mix of large, flexible floor plan
							options.
						</p>

						<h1>3 Bedroom + Den</h1>
					</div>
				</div>

				<figure className="feature-image">
					<img src={`${CDN}/img/renderings/interiors/21050_2Bd_SchA_Kitchen_5K10.jpg`} />
				</figure>

				<div className="wrap--wide">
					<HomeFeatures />
				</div>

				<div className="wrap--narrow">
					<h2 className="title">Floorplans</h2>
					<PlanTypeList
						image={`${CDN}/img/renderings/interiors/21050_2Bd_Living_5K09.jpg`}
						type="3 Bedroom + Den"
						title={false}
					/>
					<div className="actions">
						<Link href="/home-selection?type=3 Bedroom + Den">
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
