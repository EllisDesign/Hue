// Dependencies
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

// Components
import { Seo } from 'components/common'
import { SectionIntro, ScrollingBlock, SalmonSafe } from 'components/ui'

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
			<Seo title="Natural Boundaries" />

			<main className="page__natural-boundaries">
				<SectionIntro
					title={`
						Refreshing indoor and outdoor
						environments provide everything
						you need to thrive.
					`}
					gradient="green-blue"
					scroll={false}
				/>

				<section className="page__inside__scroll-content">
					<div className="wrap--wide wrap--flex">
						<ScrollingBlock pageReady={isPageReady} type="display-text">
							<p>
								The amenities at hue include a large residential courtyard which is enclosed by the two buildings
								and the urban forest of the hillside.
							</p>
						</ScrollingBlock>

						<ScrollingBlock pageReady={isPageReady} type="image" full={true} startY="25%">
							<figure>
								<img src={`${CDN}/img/renderings/exteriors/21050_AerialA02_st(1.50)_Extended_5K04.jpg`} />
							</figure>
						</ScrollingBlock>

						<ScrollingBlock pageReady={isPageReady} type="display-text">
							<p>
								This courtyard provides both common gathering and kids play space as well as individual yards for
								those units that open directly to it.
							</p>
						</ScrollingBlock>

						<ScrollingBlock pageReady={isPageReady} type="image" full={true} startY="25%">
							<figure>
								<img src={`${CDN}/img/renderings/exteriors/21050_Courtyard_GroundD03_st(1.20)_5K04.jpg`} />
							</figure>
						</ScrollingBlock>

						<ScrollingBlock pageReady={isPageReady} type="image">
							<figure>
								<img src={`${CDN}/img/renderings/amenities/21050_RoofVignette-J02_5K07.jpg`} />
								<p className="caption">
									On the rooftops you’ll find large outdoor amenity areas which extend the full length of the
									building. This outdoor space includes dining, lounge, lawn and garden areas.
								</p>
							</figure>
						</ScrollingBlock>

						<ScrollingBlock pageReady={isPageReady} type="image">
							<figure>
								<img src={`${CDN}/img/renderings/amenities/21050_CoworkingLoungeE07_5K03.jpg`} />
								<p className="caption">
									On the upper level of the East Building is the resident lounge with outdoor access to a generous
									public roof deck.
								</p>
							</figure>
						</ScrollingBlock>

						<ScrollingBlock pageReady={isPageReady} type="display-text">
							<p>
								We’ve also incorporated a fitness room, parcel lockers, more kids' space, a dog wash, EV-ready
								parking stalls and a co-work space that opens onto the courtyard.
							</p>
						</ScrollingBlock>

						<ScrollingBlock pageReady={isPageReady} type="image-grid">
							<>
								<figure>
									<img src={`${CDN}/img/renderings/amenities/21050_EV-C03_5K03.jpg`} />
								</figure>

								<figure>
									<img src={`${CDN}/img/renderings/amenities/21050_LobbyA04_5K02.jpg`} />
								</figure>

								<figure>
									<img src={`${CDN}/img/renderings/amenities/21050_DogWashingStation-C03_5K05_Dog.jpg`} />
								</figure>
							</>
						</ScrollingBlock>
					</div>
				</section>

				<SalmonSafe />

				<SectionIntro
					link={{ href: '/design-summary', label: 'Design Summary' }}
					gradient="purple"
					pagination={true}
				/>
			</main>

		</>
	)
}
