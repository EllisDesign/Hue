// Dependencies
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'

//
gsap.registerPlugin(ScrollToPlugin)

// Components
import { Seo } from 'components/common'
import { PoiMap, RetailStrata, SellingPoints, Location, Design, Floorplans, Agent } from 'components/commercial'
import { SalmonSafe } from 'components/ui'

// Component
export default function Commercial() {
	//
	return (
		<>
			<Seo title="Commercial" />

			<main className="page__commercial">
				<RetailStrata />
				<SellingPoints />
				<PoiMap />
				<Location />
				<Design />
				<Floorplans />
				<Agent />
				<SalmonSafe />
			</main>
		</>
	)
}
