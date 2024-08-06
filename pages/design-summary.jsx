// Dependencies
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

// Components
import { Seo } from 'components/common'
import { SalmonSafe, ScrollingBlock, SectionIntro } from 'components/ui'

// Store
import { CDN } from 'store/constants'

// Hooks
import { usePageReady } from 'hooks'

//
gsap.registerPlugin(ScrollTrigger)

// Component
export default function DesignSummary() {
	const isPageReady = usePageReady()

	//
	return (
		<>
			<Seo title="Design Summary" />

			<main className="page__design-summary">
				<SectionIntro
					title={`The design expression is a
					playful exploration of light,
					colour, and art.`}
					gradient="purple"
					scroll={false}
				/>

				<section className="page__inside__scroll-content">
					<div className="wrap--wide wrap--flex">
						<ScrollingBlock pageReady={isPageReady} type="display-text">
							<p>
								The base is rendered in masonry which contrasts the corrugated metal cladding of the upper
								residential levels.
							</p>
						</ScrollingBlock>

						<ScrollingBlock pageReady={isPageReady} type="image" full={true} startY="25%">
							<figure>
								<img src={`${CDN}/img/renderings/exteriors/21050_HeroNorthB02_st(1.50)_5K05.jpg`} />
								<p className="caption">
									The masonry base extends the full length of the development on both the east and north elevations
									by utilizing brick for the landscape walls.
								</p>
							</figure>
						</ScrollingBlock>

						<ScrollingBlock pageReady={isPageReady} type="display-text">
							<p>
								Residential levels of the buildings are rendered in corrugated metal cladding with composite metal
								accent panels and glazed guards.
							</p>
						</ScrollingBlock>

						<ScrollingBlock pageReady={isPageReady} type="image" full={true}>
							<figure>
								<img src={`${CDN}/img/renderings/exteriors/21050_SouthCreekA03_st(1.5)_5K04.jpg`} />
							</figure>
						</ScrollingBlock>

						<ScrollingBlock pageReady={isPageReady} type="image">
							<figure>
								<img src={`${CDN}/img/renderings/exteriors/21050_FacadeCloseupD04_st(1.00)_5K01.jpg`} />
								<p className="caption">
									Both clear and coloured glass balconies are playfully arranged to achieve visual interest.
								</p>
							</figure>
						</ScrollingBlock>

						<ScrollingBlock pageReady={isPageReady} type="image">
							<figure>
								<img src={`${CDN}/img/renderings/exteriors/21050_BalconyCloseupC02_st(1.60)_5K07.jpg`} />
							</figure>
						</ScrollingBlock>

						<ScrollingBlock pageReady={isPageReady} type="display-text">
							<p>
								Public artwork for the project is conceived by local artist, Alex Morrison. The sculpture is
								located within the recess on the north elevation of the East Building at the corner of Albert and
								St. Johns Streets.
							</p>
						</ScrollingBlock>

						<ScrollingBlock pageReady={isPageReady} type="image" full={true}>
							<figure>
								<img src={`${CDN}/img/renderings/exteriors/21050_FacadeCloseupB03_st(1.66)_5K04.jpg`} />
							</figure>
						</ScrollingBlock>
					</div>
				</section>

				<SalmonSafe />

				<SectionIntro
					gradient="orange"
					link={{ href: '/interior-architecture', label: 'Interior Architecture' }}
					pagination={true}
				/>
			</main>

		</>
	)
}
