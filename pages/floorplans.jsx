// Components
import { Seo } from 'components/common'
import { CustomSectionIntro, PlanTypeList } from 'components/ui'
import { CDN } from 'store/constants'

// Component
export default function Floorplans() {
	//
	return (
		<>
			<Seo title="Floorplans" />

			<main className="page__floorplans">
				<CustomSectionIntro gradient="orange" scroll={false}>
					<h2>The homes at hue are a delicate balance of design, technology, and aesthetics.</h2>
				</CustomSectionIntro>

				<div className="wrap--narrow">
					<section className="page-intro">
						<p>The Italian tradition of quality and craftsmanship can be found in every Marcon home.</p>
					</section>

					<section className="unit-types">
						{/* <PlanTypeList
							image={`${CDN}/img/renderings/interiors/21050_SchA_Kitchen+Desk_StudioA01_5K09.jpg`}
							type="Jr. 1 Bedroom"
						/> */}
						{/* <PlanTypeList
							image={`${CDN}/img/renderings/interiors/21050_1BD_SchaA_KitchenA02_5K08.jpg`}
							type="1 Bedroom"
						/> */}
						{/* <PlanTypeList
							image={`${CDN}/img/renderings/interiors/21050_SchA_Console_StudioA01_5K08.jpg`}
							type="1 Bedroom + Den"
						/> */}
						<PlanTypeList
							image={`${CDN}/img/renderings/interiors/21050_2Bedroom_BedroomA01_5K11.jpg`}
							type="Jr. 2 Bedroom"
						/>
						<PlanTypeList
							image={`${CDN}/img/renderings/interiors/21050_2Bedroom_Bedroom2_A01_5K11.jpg`}
							type="2 Bedroom"
						/>
						<PlanTypeList
							image={`${CDN}/img/renderings/interiors/21050_2Bd_Living_5K09.jpg`}
							type="2 Bedroom + Den"
						/>
						{/* <PlanTypeList
							image={`${CDN}/img/renderings/interiors/21050_2Bd_SchA_Kitchen_5K10.jpg`}
							type="Jr. 3 Bedroom"
						/> */}
						{/* <PlanTypeList
							image={`${CDN}/img/renderings/interiors/21050_2Bd_SchA_Kitchen_5K10.jpg`}
							type="3 Bedroom"
						/> */}
					</section>
				</div>
			</main>

		</>
	)
}
