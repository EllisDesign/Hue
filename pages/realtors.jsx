// Dependencies
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import Link from 'next/link'
import SVG from 'react-inlinesvg'

// Components
import { Seo } from 'components/common'
import { ArrowButton, BgImage } from 'components/ui'
import { useState } from 'react'
import { CDN } from 'store/constants'

// Data
import floorplans from '/public/json/plans'

//
gsap.registerPlugin(ScrollToPlugin)

//
const LOCAL_STORAGE_KEY = 'HUE_REALTOR'

// Component
export default function Realtors() {
	const [pin, setPin] = useState('')
	const [isAuthorized, setIsAuthorized] = useState(false)
	const [loginError, setLoginError] = useState(null)

	//
	const getLocalStorageItem = () =>
		typeof window !== 'undefined' ? localStorage.getItem(LOCAL_STORAGE_KEY) : null
	const setLocalStorageItem = () =>
		typeof window !== 'undefined' ? localStorage.setItem(LOCAL_STORAGE_KEY, true) : null

	//
	const onLoginFormSubmit = e => {
		e.preventDefault()

		if (pin === process.env.REALTOR_PORTAL_PIN) {
			setIsAuthorized(true)
			setLocalStorageItem()
			setLoginError(null)
		} else {
			setLoginError('Pin not recognized.')
		}
	}

	//
	const onLoginFormChange = e => setPin(e.target.value)

	//
	useState(() => {
		const item = getLocalStorageItem()
		if (item) {
			setIsAuthorized(true)
		}
	}, [])

	//
	const scrollTo = (cls, i) => gsap.to(window, { duration: 1.2 + 0.1 * i, scrollTo: cls, ease: 'expo' })

	//
	if (!isAuthorized) {
		return (
			<section className="page__realtors__login-view">
				<div className="login-wrap">
					<h1>Login</h1>

					{loginError && <p>{loginError}</p>}

					<form onSubmit={onLoginFormSubmit}>
						<div className="group group--input">
							<input type="text" placeholder="Enter Pin" onChange={onLoginFormChange} />
						</div>
						<button type="submit" className="btn btn__submit btn--solid btn--rounded">
							Login
						</button>
					</form>
				</div>
			</section>
		)
	}

	//
	return (
		<>
			<Seo title="Realtors" />

			<main className="page__realtors">
				<section className="page__realtors__cover">
					<nav>
						{sections.map((section, i) => (
							<button key={i} onClick={() => scrollTo(section.cls, i)}>
								{section.label}
							</button>
						))}
					</nav>

					<BgImage src={`${CDN}/img/renderings/exteriors/21050_HeroNorthB02_st(1.50)_5K04.jpg`} />
				</section>

				<section className="page__realtors__intro">
					<div className="wrap--wide">
						<h1>Realtor Portal</h1>

						<p>
							Here you will find brand assets and sales program information that can be used for the promotion of
							our latest project, hue, coming soon to the western edge of Port Moody.
						</p>
						<p>
							At hue, you'll find a collection of Jr. 1-3 bedroom homes bound by nature in a complete community.
						</p>
						<p>
							Please be sure to review the Disclaimer for legal requirements pertaining to the use of all marketing
							renderings and materials provided.
						</p>
					</div>
				</section>

				<section className="page__realtors__rpp anchor">
					<div className="wrap--wide">
						<h2>Realtor Preview Package</h2>

						<div className="grid">
							<div className="grid__item">
								<a
									href="https://cdnmarcon.sfo3.digitaloceanspaces.com/hue/pdf/hue%20realtor%20preview%20package%20-%20final.pdf"
									target="_blank"
									className="btn__file"
									style={{ backgroundImage: `url('/img/realtors/brand-assets/Gradients-03.png')` }}
								>
									<div>
										<span className="icon">vertical_align_bottom</span>
										<span className="label">Download PDF</span>
									</div>
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="page__realtors__social anchor">
					<div className="wrap--wide">
						<h2>Social Media Assets</h2>

						<p>
							marcon.ca/hue
							<br />
							@marconhomes
							<br />
							#huebymarcon
							<br />
							#buildingforlife
							<br />
							#marconhomes
						</p>

						<h3>Taglines</h3>

						<p>
							Homes for a colourful life.
							<br />
							Modern homes bound by nature in a complete community.
						</p>

						{/* <h3>Social Media Assets</h3>

						<div className="grid grid--mb">
							<div className="grid__item">
								<figure data-type="image">
									<img src={socialMediaAssets[0].file} />

									<div className="hover">
										<a href={socialMediaAssets[0].file} target="_blank" className="btn__download" download>
											<span>{socialMediaAssets[0].fileType}</span>
										</a>
									</div>
								</figure>

								<span className="caption">{socialMediaAssets[0].caption}</span>
							</div>

							<div className="grid__item">
								<figure data-type="image">
									<img src={socialMediaAssets[1].file} />

									<div className="hover">
										<a href={socialMediaAssets[1].file} target="_blank" className="btn__download" download>
											<span>{socialMediaAssets[1].fileType}</span>
										</a>
									</div>
								</figure>

								<span className="caption">{socialMediaAssets[1].caption}</span>
							</div>

							<div className="grid__item">
								<div className="grid__item">
									<figure data-type="video">
										<video src={socialMediaAssets[2].file} autoPlay muted playsInline loop></video>

										<div className="hover">
											<a href={socialMediaAssets[2].file} target="_blank" className="btn__download" download>
												<span>{socialMediaAssets[2].fileType}</span>
											</a>
										</div>
									</figure>

									<span className="caption">{socialMediaAssets[2].caption}</span>
								</div>

								<div className="grid__item">
									<figure data-type="video">
										<video src={socialMediaAssets[3].file} autoPlay muted playsInline loop></video>

										<div className="hover">
											<a href={socialMediaAssets[3].file} target="_blank" className="btn__download" download>
												<span>{socialMediaAssets[3].fileType}</span>
											</a>
										</div>
									</figure>

									<span className="caption">{socialMediaAssets[3].caption}</span>
								</div>
							</div>
						</div> */}
					</div>
				</section>

				<section className="page__realtors__sales anchor">
					<div className="wrap--wide">
						<h2>Sales</h2>

						<div className="grid">
							<div className="grid__item">
								<a
									href="https://cdnmarcon.sfo3.digitaloceanspaces.com/hue/pdf/hue%20Sales%20Information%20Sheet.pdf"
									target="_blank"
									className="btn__file"
									style={{ backgroundImage: `url('/img/realtors/brand-assets/Gradients-04.png')` }}
								>
									<div>
										<span className="icon">vertical_align_bottom</span>
										<span className="label">Download PDF</span>
									</div>
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="page__realtors__floorplans anchor">
					<div className="wrap--wide">
						<h2>Floorplans</h2>

						<div className="grid">
							{floorplans.map((floorplan, i) => {
								return floorplan.plans.map((plan, o) => (
									<a href={plan.pdf} key={o} target="_blank">
										<div className="top">
											<span className="plan-type">{plan.planType}</span>
											<span className="plan-size">{floorplan.name}</span>
										</div>
										<div className="middle">
											<img
												src={`https://cdnmarcon.sfo3.digitaloceanspaces.com/hue/img/floorplans/${plan.planType}.svg`}
											/>
										</div>
										<div className="bottom">
											<span className="total-area">{plan.totalArea}</span>
										</div>
									</a>
								))
							})}
						</div>
					</div>
				</section>

				<section className="page__realtors__features anchor">
					<div className="wrap--wide">
						<h2>Features</h2>

						<a
							href="https://cdnmarcon.sfo3.digitaloceanspaces.com/hue/pdf/hue%20assets%20-%20features%20-%20DIGITAL.pdf"
							target="_blank"
							className="btn__file"
							style={{ backgroundImage: `url('/img/realtors/brand-assets/Gradients-02.png')` }}
						>
							<div>
								<span className="icon">vertical_align_bottom</span>
								<span className="label">Download PDF</span>
							</div>
						</a>
					</div>
				</section>

				<section className="page__realtors__renderings anchor">
					<div className="wrap--wide">
						<h2>Renderings</h2>

						<h3>Amenities</h3>
						<div className="grid grid--mb">
							{renderingsAmenities.map((image, i) => (
								<div className="grid__item" key={i}>
									<figure>
										<BgImage src={image.src} />

										<div className="hover">
											<a href={image.src} target="_blank" className="btn__download" download>
												<span>JPG</span>
											</a>
										</div>
									</figure>

									<span className="caption">{image.caption}</span>
								</div>
							))}
						</div>

						<h3>Exteriors</h3>
						<div className="grid grid--mb">
							{renderingsExteriors.map((image, i) => (
								<div className="grid__item" key={i}>
									<figure>
										<BgImage src={image.src} />

										<div className="hover">
											<a href={image.src} target="_blank" className="btn__download" download>
												<span>JPG</span>
											</a>
										</div>
									</figure>

									<span className="caption">{image.caption}</span>
								</div>
							))}
						</div>

						<h3>Interiors</h3>
						<div className="grid">
							{renderingsInteriors.map((image, i) => (
								<div className="grid__item" key={i}>
									<figure>
										<BgImage src={image.src} />

										<div className="hover">
											<a href={image.src} target="_blank" className="btn__download" download>
												<span>JPG</span>
											</a>
										</div>
									</figure>

									<span className="caption">{image.caption}</span>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="page__realtors__neighbourhood anchor">
					<div className="wrap--wide">
						<h2>Neighbourhood</h2>

						<div className="grid">
							<div className="grid__item">
								<a
									href="https://cdnmarcon.sfo3.digitaloceanspaces.com/hue/pdf/hue%20neighbourhood%20map.pdf"
									target="_blank"
									className="btn__file"
									style={{ backgroundImage: `url('/img/realtors/brand-assets/Gradients-04.png')` }}
								>
									<div>
										<span className="icon">vertical_align_bottom</span>
										<span className="label">Download Map PDF</span>
									</div>
								</a>
							</div>

							<div className="grid__item">
								<a
									href="https://cdnmarcon.sfo3.digitaloceanspaces.com/hue/vid/Map%20Render_Final.mp4"
									target="_blank"
									className="btn__file"
									style={{ backgroundImage: `url('/img/realtors/brand-assets/Gradients-05.png')` }}
								>
									<div>
										<span className="icon">vertical_align_bottom</span>
										<span className="label">Download Map Animation</span>
									</div>
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="page__realtors__brand anchor">
					<div className="wrap--wide">
						<h2>Brand Assets</h2>

						<h3>Gradients</h3>
						<div className="grid grid--mb">
							{gradients.map((image, i) => (
								<div className="grid__item" key={i}>
									<figure>
										<BgImage src={image.src} />
									</figure>

									<div className="hover">
										<a href={image.src} target="_blank" className="btn__download" download>
											<span>PNG</span>
										</a>
									</div>
								</div>
							))}
						</div>

						<h3>Logos</h3>
						<div className="grid">
							{logos.map((image, i) => (
								<div className={`grid__item ${image.cls}`} key={i}>
									<figure>
										<img className="static-image" src={image.svg} />
									</figure>

									<span className="caption">{image.caption}</span>

									<div className="hover">
										<a href={image.png} target="_blank" className="btn__download" download>
											<span>PNG</span>
										</a>

										<a href={image.svg} target="_blank" className="btn__download" download>
											<span>SVG</span>
										</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="page__realtors__disclaimer anchor">
					<div className="wrap--wide">
						<h2>Disclaimer</h2>

						<p>
							THE DEVELOPER RESERVES THE RIGHT IN ITS SOLE DISCRETION TO MAKE MODIFICATIONS OR CHANGES TO BUILDING
							DESIGN, FLOOR PLANS, PROJECT DESIGNS, SPECIFICATIONS, FINISHES, FEATURES, AND DIMENSIONS, WITHOUT
							PRIOR NOTICE OR COMPENSATION TO ANY PERSON. SQUARE FOOTAGES ARE APPROXIMATE AND HAVE BEEN CALCULATED
							FROM ARCHITECTURAL DRAWINGS. ACTUAL FINAL DIMENSIONS FOLLOWING COMPLETION OF CONSTRUCTION MAY VARY
							FROM THOSE SET OUT HEREIN. E.&O.E
						</p>
					</div>
				</section>
			</main>

		</>
	)
}

//
const sections = [
	{ cls: '.page__realtors__rpp', label: 'Realtor Preview Package' },
	{ cls: '.page__realtors__social', label: 'Social Media Assets' },
	{ cls: '.page__realtors__sales', label: 'Pricing' },
	{ cls: '.page__realtors__floorplans', label: 'Floorplans' },
	{ cls: '.page__realtors__features', label: 'Features' },
	{ cls: '.page__realtors__renderings', label: 'Renderings' },
	{ cls: '.page__realtors__neighbourhood', label: 'Neighbourhood' },
	{ cls: '.page__realtors__brand', label: 'Brand Assets' },
	{ cls: '.page__realtors__disclaimer', label: 'Disclaimer' }
]

//
const socialMediaAssets = [
	{
		label: 'Story Ad',
		file: 'https://cdnmarcon.sfo3.digitaloceanspaces.com/hue/social/hue_Story_ad_v3.png',
		fileType: 'PNG'
	},
	{
		label: 'In Feed Ad',
		file: 'https://cdnmarcon.sfo3.digitaloceanspaces.com/hue/social/hue_InFeed_ad_v3.png',
		fileType: 'PNG'
	},
	{
		label: 'In Feed Ad - Video Square',
		file: 'https://cdnmarcon.sfo3.digitaloceanspaces.com/hue/social/hue_infeed-ad_video_square.mp4',
		fileType: 'MP4'
	},
	{
		label: 'In Feed Ad - Video',
		file: 'https://cdnmarcon.sfo3.digitaloceanspaces.com/hue/social/hue_infeed-ad-video_v3.mp4',
		fileType: 'MP4'
	}
	// {
	// 	label: 'Story Ad - Video',
	// 	file: 'https://cdnmarcon.sfo3.digitaloceanspaces.com/hue/social/hue_storyad-video_v3.mp4',
	// 	fileType: 'MP4'
	// },
]

//
const gradients = [
	{ src: '/img/realtors/brand-assets/Gradients-02.png' },
	{ src: '/img/realtors/brand-assets/Gradients-03.png' },
	{ src: '/img/realtors/brand-assets/Gradients-04.png' },
	{ src: '/img/realtors/brand-assets/Gradients-05.png' },
	{ src: '/img/realtors/brand-assets/Gradients-06.png' },
	{ src: '/img/realtors/brand-assets/Gradients-07.png' },
	{ src: '/img/realtors/brand-assets/Gradients-08.png' },
	{ src: '/img/realtors/brand-assets/Gradients-09.png' }
]

//
const logos = [
	{
		label: 'Hue Logo Black',
		png: '/img/realtors/brand-assets/Hue Logo_B.png',
		svg: '/img/realtors/brand-assets/Hue Logo_B.svg',
		cls: 'grid__item--bg--light'
	},
	{
		label: 'Hue Logo White',
		png: '/img/realtors/brand-assets/Hue Logo_W.png',
		svg: '/img/realtors/brand-assets/Hue Logo_W.svg',
		cls: 'grid__item--bg--dark'
	}
]

//
const renderingsAmenities = [
	{ src: `${CDN}/img/renderings/amenities/21050_RoofVignette-J02_5K07.jpg`, caption: 'Roof' },
	{ src: `${CDN}/img/renderings/amenities/21050_CoworkingLoungeE07_5K03.jpg`, caption: 'Coworking Lounge' },
	{
		src: `${CDN}/img/renderings/amenities/21050_DogWashingStation-C03_5K05_Dog.jpg`,
		caption: 'Dog Washing Station'
	},
	{ src: `${CDN}/img/renderings/amenities/21050_EV-C03_5K03.jpg`, caption: 'EV Charging' },
	{ src: `${CDN}/img/renderings/amenities/21050_LobbyF01_5K05.jpg`, caption: 'Lobby' },
	{ src: `${CDN}/img/renderings/amenities/21050_RoofTopHeroJ01_5K07.jpg`, caption: 'Rooftop' },
	{ src: `${CDN}/img/renderings/amenities/21050_LobbyA04_5K02.jpg`, caption: 'Lobby' }
]

//
const renderingsExteriors = [
	{ src: `${CDN}/img/renderings/exteriors/21050_Courtyard_GroundD03_st(1.20)_5K04.jpg`, caption: 'Courtyard' },
	{ src: `${CDN}/img/renderings/exteriors/21050_AerialA02_st(1.50)_Extended_5K04.jpg`, caption: 'Aerial' },
	{ src: `${CDN}/img/renderings/exteriors/21050_BalconyCloseupC02_st(1.60)_5K07.jpg`, caption: 'Balcony' },
	{ src: `${CDN}/img/renderings/exteriors/21050_FacadeCloseupB03_st(1.66)_5K04.jpg`, caption: 'Facade' },
	{ src: `${CDN}/img/renderings/exteriors/21050_FacadeCloseupD04_st(1.00)_5K01.jpg`, caption: 'Facade' },
	{ src: `${CDN}/img/renderings/exteriors/21050_HeroNorthB02_st(1.50)_5K04.jpg`, caption: 'North' },
	{ src: `${CDN}/img/renderings/exteriors/21050_HeroNorthB02_st(1.50)_5K05.jpg`, caption: 'North' },
	{ src: `${CDN}/img/renderings/exteriors/21050_SouthCreekA03_st(1.5)_5K04.jpg`, caption: 'South Creek' }
]

//
const renderingsInteriors = [
	{ src: `${CDN}/img/renderings/interiors/21050_2Bd_SchA_Kitchen_5K10.jpg`, caption: 'Kitchen' },
	{ src: `${CDN}/img/renderings/interiors/21050_1BD_SchaA_KitchenA02_5K08.jpg`, caption: 'Kitchen' },
	{ src: `${CDN}/img/renderings/interiors/21050_2Bd_SchA_KitchenLiving_5K11.jpg`, caption: 'Kitchen Living' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchA_Dining+Desk_StudioA01_5K09.jpg`, caption: 'Dining + Desk' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchA_Kitchen+Desk_StudioA01_5K05.jpg`, caption: 'Kitchen + Desk' },
	{ src: `${CDN}/img/renderings/interiors/21050_1BD_SchaB_KitchenA02_5K08.jpg`, caption: 'Kitchen' },
	{ src: `${CDN}/img/renderings/interiors/21050_2Bd_Bathroom_5K13.jpg`, caption: 'Bathroom' },
	{ src: `${CDN}/img/renderings/interiors/21050_2Bd_Living_5K09.jpg`, caption: 'Living' },
	{ src: `${CDN}/img/renderings/interiors/21050_2Bd_SchB_Kitchen_5K10.jpg`, caption: 'Kitchen' },
	{ src: `${CDN}/img/renderings/interiors/21050_2Bd_TVMillwork_5K09.jpg`, caption: 'Millwork' },
	{ src: `${CDN}/img/renderings/interiors/21050_2Bedroom_Bedroom2_A01_5K11.jpg`, caption: '2 Bed' },
	{ src: `${CDN}/img/renderings/interiors/21050_2Bedroom_BedroomA01_5K11.jpg`, caption: '2 Bed' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchA_Console_StudioA01_5K08.jpg`, caption: 'Console' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchA_Console_StudioA01_5K09.jpg`, caption: 'Console' },
	{
		src: `${CDN}/img/renderings/interiors/21050_SchA_Console+Storage_StudioA01_5K09.jpg`,
		caption: 'Console Storage'
	},
	{
		src: `${CDN}/img/renderings/interiors/21050_SchA_Console+Storage_StudioA01_5K10.jpg`,
		caption: 'Console Storage'
	},
	{ src: `${CDN}/img/renderings/interiors/21050_SchA_Dining_StudioA01_5K07.jpg`, caption: 'Dining' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchA_Dining_StudioA01_5K08.jpg`, caption: 'Dining' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchA_Dining+Desk_StudioA01_5K10.jpg`, caption: 'Desk' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchA_Kitchen+Desk_StudioA01_5K09.jpg`, caption: 'Desk' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchA_Kitchen+Storage_StudioA01_5K08.jpg`, caption: 'Storage' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchA_Kitchen+Storage_StudioA01_5K09.jpg`, caption: 'Storage' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchA_Open+Desk_StudioA01_5K10.jpg`, caption: 'Open + Desk' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchA_OpenNook_StudioA01_5K08.jpg`, caption: 'Open Nook' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchA_OpenNook_StudioA01_5K09.jpg`, caption: 'Open Nook' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchA_WasherDryer_StudioA01_5K09.jpg`, caption: 'Washer/Dryer' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchA_WasherDryer_StudioA01_5K10.jpg`, caption: 'Washer/Dryer' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchB_Console_StudioA01_5K08.jpg`, caption: 'Console' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchB_Console_StudioA01_5K09.jpg`, caption: 'Console' },
	{
		src: `${CDN}/img/renderings/interiors/21050_SchB_Console+Storage_StudioA01_5K09.jpg`,
		caption: 'Console + Storage'
	},
	{
		src: `${CDN}/img/renderings/interiors/21050_SchB_Console+Storage_StudioA01_5K10.jpg`,
		caption: 'Console + Storage'
	},
	{ src: `${CDN}/img/renderings/interiors/21050_SchB_Dining_StudioA01_5K07.jpg`, caption: 'Dining' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchB_Dining_StudioA01_5K08.jpg`, caption: 'Dining' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchB_Dining+Desk_StudioA01_5K09.jpg`, caption: 'Dining + Desk' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchB_Dining+Desk_StudioA01_5K10.jpg`, caption: 'Dining + Desk' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchB_Kitchen+Desk_StudioA01_5K08.jpg`, caption: 'Kitchen + Desk' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchB_Kitchen+Desk_StudioA01_5K09.jpg`, caption: 'Kitchen + Desk' },
	{
		src: `${CDN}/img/renderings/interiors/21050_SchB_Kitchen+Storage_StudioA01_5K08.jpg`,
		caption: 'Kitchen + Storage'
	},
	{
		src: `${CDN}/img/renderings/interiors/21050_SchB_Kitchen+Storage_StudioA01_5K09.jpg`,
		caption: 'Kitchen + Storage'
	},
	{ src: `${CDN}/img/renderings/interiors/21050_SchB_Open+Desk_StudioA01_5K10.jpg`, caption: 'Open Desk' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchB_OpenNook_StudioA01_5K08.jpg`, caption: 'Open Nook' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchB_OpenNook_StudioA01_5K09.jpg`, caption: 'Open Nook' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchB_WasherDryer_StudioA01_5K09.jpg`, caption: 'Washer/Dryer' },
	{ src: `${CDN}/img/renderings/interiors/21050_SchB_WasherDryer_StudioA01_5K10.jpg`, caption: 'Washer/Dryer' }
]
