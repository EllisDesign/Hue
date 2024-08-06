// Components
import { Seo } from 'components/common'
import { SalmonSafe, ScrollingBlock, SectionIntro } from 'components/ui'
import { useRef } from 'react'
import { CDN } from 'store/constants'

// Component
export default function DesignSummary() {
	return (
		<>
			<Seo title="Building For Life" />

			<main className="page__building-for-life">
				<SectionIntro
					title={`
					At hue, we’re creating home
					ownership opportunities for a
					diverse mix of residents.
                    `}
					gradient="red"
					scroll={false}
				/>

				<section className="copy">
					<div className="wrap--narrow">
						<p>
							For more than 38 years, we’ve developed a wide variety of homes across Metro Vancouver. More often
							than not, these homes are located in close proximity to transit. Our idea of Building for Life
							includes promoting healthier lifestyles. And following the completion of the Evergreen Extension, we
							have actively pursued opportunities to build more resilient, sustainable communities in the
							Tri-Cities.{' '}
						</p>

						<p>
							Our first project in Port Moody was an entire block of new townhomes & condos just south of Port
							Moody Skytrain Station. Our second project, a mix of three and four bedroom townhomes along George
							Street, includes a community plaza, playground and the heritage restoration of the 1911 Johnston
							House.{' '}
						</p>

						<p>
							The most important success of our first projects in Port Moody was the significant contribution to
							family-oriented housing ownership in the community.
						</p>

						<p>
							At hue, the starting point was: "how can we create home ownership opportunities for first time
							buyers, and those looking to make the most of their ability to telecommute?"
						</p>

						<p>
							One of the biggest barriers to home ownership is affordability. To begin to address this challenge,
							we planned a large number of studios and one bedroom homes in the project. Our task then was to
							create more functional homes within these smaller footprints. New homes at hue will be equipped with
							living components using ultra-high-tech manufacturing systems. By strategically incorporating custom
							designed millwork components, we are able to greatly improve the functionality, value and comfort of
							new homes.
						</p>

						<p>
							We have continued with this approach in the planning of amenity space, creating refreshing indoor and
							outdoor environments – including a large multi-purpose courtyard, kids space, fitness space,
							workspace and rooftop terraces. We have challenged ourselves to include everything our residents need
							to thrive in a suburban setting.
						</p>

						<p>
							Finally, we have specified high quality, durable materials throughout the building. Brick, corrugated
							metal siding, composite metal panels, wood-like soffits and glazed guards are carefully composed to
							stand the test of time.{' '}
						</p>
					</div>
				</section>

				<section className="image-grid" style={{ paddingBottom: '5rem' }}>
					<div className="wrap--wide">
						<figure>
							<img src={`${CDN}/img/building-for-life/Marcon_Models_0511.jpeg`} />
							<p>Semiah, White Rock BC</p>
						</figure>

						<figure>
							<img src={`${CDN}/img/building-for-life/Marcon_Models_0061.jpeg`} />
							<p>567 Clarke & Como, Coquitlam BC</p>
						</figure>

						<figure>
							<img src={`${CDN}/img/building-for-life/Marcon_Models_0187.jpeg`} />
							<p>Mirabel, Vancouver BC</p>
						</figure>
					</div>
				</section>

				<SalmonSafe />
			</main>

		</>
	)
}
