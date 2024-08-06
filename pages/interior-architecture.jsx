// Dependencies
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

// Components
import { Seo } from 'components/common'
import {
	ArrowButton,
	CustomSectionIntro,
	SalmonSafe,
	ScrollingBlock,
	SectionIntro
} from 'components/ui'

// Store
import { CDN } from 'store/constants'

// Hooks
import { usePageReady } from 'hooks'

//
gsap.registerPlugin(ScrollTrigger)

// Component
export default function NaturalBoundaries() {
	const isPageReady = usePageReady()

	//
	return (
		<>
			<Seo title="Interior Architecture" />

			<main className="page__interior-architecture">
				<CustomSectionIntro gradient="orange" scroll={false}>
					<h2>The homes at hue are a delicate balance of design, technology, and aesthetics.</h2>
				</CustomSectionIntro>

				<section className="page__inside__scroll-content">
					<div className="wrap--wide wrap--grid" data-cols="2">
						<ScrollingBlock pageReady={isPageReady} type="display-text" startY="25%">
							<p>
								There is no one-size-fits-all condo. At hue, we’ve designed a variety of homes with soft, temporal
								possibilities in place. Equally at home nestled in the courtyard or creekside, our flexible
								floorplans and modular elements maximize your living space.
							</p>
						</ScrollingBlock>
						{/* <ScrollingBlock pageReady={isPageReady} type="unit-type" startY="50%">
							<div>
								<aside>
									<h2>Jr. 1 Bedroom</h2>
									<p>
										Our most streamlined option distills the popular 'starter home' down to its purest essentials.
									</p>
								</aside>
								<ArrowButton href="/interior-architecture/jr-1-bed" label="View Details" theme="dark" />

								<figure>
									<img src={`${CDN}/img/renderings/interiors/21050_SchA_Kitchen+Desk_StudioA01_5K09.jpg`} />
								</figure>
							</div>
						</ScrollingBlock> */}

						{/* <ScrollingBlock pageReady={isPageReady} type="unit-type" startY="50%">
							<div>
								<aside>
									<h2>1 Bedroom</h2>
									<p>Large homes designed to encourage fluidity between daily rituals.</p>
								</aside>
								<ArrowButton href="/interior-architecture/1-bed" label="View Details" theme="dark" />

								<figure>
									<img src={`${CDN}/img/renderings/interiors/21050_1BD_SchaA_KitchenA02_5K08.jpg`} />
								</figure>
							</div>
						</ScrollingBlock> */}

						{/* <ScrollingBlock pageReady={isPageReady} type="unit-type" startY="10%">
							<div>
								<aside>
									<h2>1 Bedroom + Den</h2>
									<p>Additional flex space for expanding the boundaries of everyday life.</p>
								</aside>
								<ArrowButton href="/interior-architecture/1-bed-den" label="View Details" theme="dark" />

								<figure>
									<img src={`${CDN}/img/renderings/interiors/21050_SchA_Console_StudioA01_5K08.jpg`} />
								</figure>
							</div>
						</ScrollingBlock> */}

						<ScrollingBlock pageReady={isPageReady} type="unit-type" startY="10%">
							<div>
								<aside>
									<h2>Jr. 2 Bedroom</h2>
									<p>Efficient 2 bedroom + 2 bath layouts with a generous amount of storage space.</p>
								</aside>
								<ArrowButton href="/interior-architecture/jr-2-bed" label="View Details" theme="dark" />

								<figure>
									<img src={`${CDN}/img/renderings/interiors/21050_2Bedroom_BedroomA01_5K11.jpg`} />
								</figure>
							</div>
						</ScrollingBlock>

						<ScrollingBlock pageReady={isPageReady} type="unit-type" startY="10%">
							<div>
								<aside>
									<h2>2 Bedroom</h2>
									<p>Spacious family homes equipped with a variety of storage options.</p>
								</aside>
								<ArrowButton href="/interior-architecture/2-bed" label="View Details" theme="dark" />

								<figure>
									<img src={`${CDN}/img/renderings/interiors/21050_2Bedroom_Bedroom2_A01_5K11.jpg`} />
								</figure>
							</div>
						</ScrollingBlock>

						<ScrollingBlock pageReady={isPageReady} type="unit-type" startY="10%">
							<div>
								<aside>
									<h2>2 Bedroom + Den</h2>
									<p>
										Designed to accommodate growing families, these homes feature a mix of large, flexible
										floorplan options.
									</p>
								</aside>
								<ArrowButton href="/interior-architecture/2-bed-den" label="View Details" theme="dark" />

								<figure>
									<img src={`${CDN}/img/renderings/interiors/21050_2Bd_Living_5K09.jpg`} />
								</figure>
							</div>
						</ScrollingBlock>

						{/* <ScrollingBlock pageReady={isPageReady} type="unit-type" startY="10%">
							<div>
								<aside>
									<h2>Jr. 3 Bedroom</h2>
									<p>Because condo life demands imaginative spatial responses.</p>
								</aside>
								<ArrowButton href="/interior-architecture/jr-3-bed" label="View Details" theme="dark" />

								<figure>
									<img src={`${CDN}/img/renderings/interiors/21050_2Bd_SchA_Kitchen_5K10.jpg`} />
								</figure>
							</div>
						</ScrollingBlock> */}

						{/* <ScrollingBlock pageReady={isPageReady} type="unit-type" startY="10%">
							<div>
								<aside>
									<h2>3 Bedroom</h2>
									<p>Spacious family homes equipped with a variety of storage options.</p>
								</aside>
								<ArrowButton href="/interior-architecture/3-bed" label="View Details" theme="dark" />

								<figure>
									<img src={`${CDN}/img/renderings/interiors/21050_2Bedroom_Bedroom2_A01_5K11.jpg`} />
								</figure>
							</div>
						</ScrollingBlock> */}

						{/* <ScrollingBlock pageReady={isPageReady} type="unit-type" startY="10%">
							<div>
								<aside>
									<h2>3 Bedroom + Den</h2>
									<p>
										Designed to accommodate growing families, these homes feature a mix of large, flexible
										floorplan options.
									</p>
								</aside>
								<ArrowButton href="/interior-architecture/3-bed-den" label="View Details" theme="dark" />

								<figure>
									<img src={`${CDN}/img/renderings/interiors/21050_2Bd_Living_5K09.jpg`} />
								</figure>
							</div>
						</ScrollingBlock> */}
					</div>
				</section>

				<SalmonSafe />

				<SectionIntro
					link={{ href: '/building-for-life', label: 'Building for Life' }}
					gradient="red"
					pagination={true}
				/>
			</main>

		</>
	)
}
