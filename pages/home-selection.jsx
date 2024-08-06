// Dependencies
import { useEffect, useState, useRef } from 'react'
import SVG from 'react-inlinesvg'
import { useRouter } from 'next/router'

// Components
import { Seo } from 'components/common'
import { BgImage } from 'components/ui'

//
import floorplans from '/public/json/plans'

//
import { CDN } from 'store/constants'

// Checkbox
const Checkbox = ({
	prop = null,
	selected = false,
	disabled = false,
	image = null,
	label = '',
	extra = '',
	onClick = () => null
}) => {
	return (
		<button className={selected ? 'selected' : ''} onClick={onClick} disabled={disabled}>
			<span className="checkbox">{image && prop === 'colourScheme' && <BgImage src={image} />}</span>
			<span className="label">{label}</span>
			<span className="extra">{extra}</span>
		</button>
	)
}

//
const images = {
	millwork1: '/img/home-selection/millwork-1.jpg',
	millwork2: '/img/home-selection/millwork-2.jpg'
}

// Component
export default function HomeSelection() {
	const router = useRouter()
	const currentStep = useRef(null)
	const optionsContainer = useRef(null)
	const [shouldFixElements, setShouldFixElements] = useState(true)
	const [activeGroup, setActiveGroup] = useState('homeSelection')
	const [options, setOptions] = useState({
		homeSelection: [],
		layout: [],
		colourScheme: [
			{
				id: 1,
				label: 'Natural',
				image: '/img/home-selection/natural.png',
				rendering: `${CDN}/img/renderings/interiors/21050_SchA_Dining_StudioA01_5K07.jpg`,
				selected: true
			},

			{
				id: 2,
				label: 'Moonlight Grey',
				image: '/img/home-selection/dark.png',
				rendering: `${CDN}/img/renderings/interiors/21050_SchB_Dining_StudioA01_5K07.jpg`,
				selected: false
			}
		],
		interiorFinishes: [
			{
				label: 'Premium Wide Plank, Natural Oak Tone Resilient Laminate Flooring',
				selected: true,
				disabled: true
			},
			{
				label: 'Elegant Quartz Stone Countertops',
				selected: true,
				disabled: true
			},
			{
				label: 'Bedroom Closet Organizers',
				selected: true,
				disabled: true
			}
		],
		integratedAppliances: [
			{
				label: 'Paneled Liebherr Refrigerator and Fulgor Milano Dishwasher',
				selected: true,
				disabled: true
			},
			{
				label: 'AEG Gas Cooktop and Electric Wall Oven',
				selected: true,
				disabled: true
			},
			{
				label: 'Cabinetry Concealed Hood Fan',
				selected: true,
				disabled: true
			},
			{
				label: 'Samsung Washer Dryer',
				selected: true,
				disabled: true
			}
		],
		bathrooms: [
			{
				label: 'Floating Vanity with Matte, Warm Grey Cabinets',
				selected: true,
				disabled: true
			},
			{
				label: 'Polished Quartz Countertops and Backsplash',
				selected: true,
				disabled: true
			},
			{
				label: 'Luxurious Nuheat Electric Floor Heating System in Principal Ensuites',
				selected: true,
				disabled: true
			}
		],
		millwork1: [
			{
				id: 1,
				label: 'Dine: Expandable Dining Area with Pendant',
				image_light: `${CDN}/img/renderings/interiors/21050_SchA_Dining_StudioA01_5K07.jpg`,
				image_dark: `${CDN}/img/renderings/interiors/21050_SchB_Dining_StudioA01_5K07.jpg`,
				selected: true
			},
			{
				id: 2,
				label: 'Entertain: Built in TV Console',
				image_light: `${CDN}/img/renderings/interiors/21050_SchA_Console_StudioA01_5K08.jpg`,
				image_dark: `${CDN}/img/renderings/interiors/21050_SchB_Console_StudioA01_5K08.jpg`,
				selected: false
			},
			{
				id: 3,
				label: 'Adapt: Open Finished Flex Space',
				image_light: `${CDN}/img/renderings/interiors/21050_SchA_OpenNook_StudioA01_5K08.jpg`,
				image_dark: `${CDN}/img/renderings/interiors/21050_SchB_OpenNook_StudioA01_5K08.jpg`,
				selected: false
			}
		],
		millwork2: [
			{
				id: 1,
				label: 'Work: Desk with Integrated LED Lighting',
				image_light: `${CDN}/img/renderings/interiors/21050_SchA_Open+Desk_StudioA01_5K10.jpg`,
				image_dark: `${CDN}/img/renderings/interiors/21050_SchB_Open+Desk_StudioA01_5K10.jpg`,
				selected: true
			},
			{
				id: 2,
				label: 'Store: Additional Concealed Storage',
				image_light: `${CDN}/img/renderings/interiors/21050_SchA_Console+Storage_StudioA01_5K09.jpg`,
				image_dark: `${CDN}/img/renderings/interiors/21050_SchB_Console+Storage_StudioA01_5K09.jpg`,
				selected: false
			}
		],
		millwork3: [
			{
				id: 1,
				label: 'Adapt: Standard Finished Wall Space',
				image: `${CDN}/img/renderings/interiors/21050_2Bd_TVMillwork_5K09_none.jpg`,
				selected: true
			},
			{
				id: 2,
				label: 'Entertain: Built-in TV Console',
				image: `${CDN}/img/renderings/interiors/21050_2Bd_TVMillwork_5K09.jpg`,
				selected: false
			}
		]
	})

	//
	const onCheckboxClick = (key, label) => {
		const newKeyOptions = options[key].map(option => {
			const labelMatches = option.label === label

			if (option.selected === true && !labelMatches) {
				return {
					...option,
					selected: false
				}
			} else if (labelMatches) {
				return {
					...option,
					selected: true
				}
			} else {
				return option
			}
		})

		//
		let newOptions = {
			...options,
			[key]: newKeyOptions
		}

		//
		if (key === 'homeSelection') {
			newOptions.layout = []
		}

		setOptions(newOptions)
	}

	//
	const watchOptionGroups = optionGroups => {
		for (let i = 0; i < optionGroups.length; i++) {
			const group = optionGroups[i]
			const isInViewTop = group.getBoundingClientRect().top - window.innerHeight / 2 < 0
			const isInViewBottom = group.getBoundingClientRect().bottom - window.innerHeight / 2 > 0
			const isGroupActive = activeGroup === group.dataset.key

			if (isInViewTop && isInViewBottom && !isGroupActive) {
				setActiveGroup(group.dataset.key)
				currentStep.current.innerHTML = group.dataset.step
				group.dataset.active = true
			}

			group.dataset.active = isGroupActive
		}
	}

	//
	const watchImageColumn = footerVisible => {
		if (footerVisible && shouldFixElements) setShouldFixElements(false)
		if (!footerVisible && !shouldFixElements) setShouldFixElements(true)
	}

	//
	const downloadPdf = () => {
		const [planType] = options.homeSelection.filter(item => item.selected)
		const [colourScheme] = options.colourScheme.filter(item => item.selected)
		const [millwork1] = options.millwork1.filter(item => item.selected)
		const [millwork2] = options.millwork2.filter(item => item.selected)
		const [millwork3] = options.millwork3.filter(item => item.selected)

		//
		const num =
			planType.label === 'Jr. 1 Bedroom'
				? `${colourScheme.id}${millwork1.id}${millwork2.id}`
				: `${colourScheme.id}${millwork3.id}x`

		//
		const folder = planType.label.replace(/\.|\+/g, '').replace(/\s/g, '')
		const path = `/config/${folder}/hue-Home-Selection-${num}.pdf`

		//
		return window.open(path, '_blank')
	}

	//
	useEffect(() => {
		if (options.homeSelection[0] && !options.layout[0]) {
			const { plan } = router.query
			const { label } = options.homeSelection.find(home => home.selected)

			setOptions({
				...options,
				layout: floorplans
					.find(floorplan => floorplan.name === label)
					.plans.map((planType, i) => ({
						label: planType.planType,
						extra: planType.totalArea,
						image: `https://cdnmarcon.sfo3.digitaloceanspaces.com/hue/img/floorplans/${planType.planType}.svg`,
						selected: plan ? plan === planType.planType : !i
					}))
			})
		}
	}, [options])

	//
	useEffect(() => {
		if (!options.homeSelection[0]) {
			const { type } = router.query //{ type: '2 Bedroom + Den', plan: 'G6' }

			setOptions({
				...options,
				homeSelection: floorplans.map((plan, i) => ({
					label: plan.name,
					selected: type ? type === plan.name : !i,
					image: plan.image
				}))
			})
		}
	}, [options])

	//
	useEffect(() => {
		const optionGroups = [...optionsContainer.current.children]

		//
		const onScroll = () => {
			const footerVisible = document.querySelector('footer').getBoundingClientRect().top - window.innerHeight < 0

			if (!footerVisible) {
				watchOptionGroups(optionGroups)
			}

			watchImageColumn(footerVisible)
		}

		//
		onScroll()
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [activeGroup, shouldFixElements])

	//
	return (
		<>
			<Seo title="Home Selection" />
			<main className="page__home-selection">
				<section className="visuals" data-fixed={shouldFixElements}>
					{/** */}
					<figure data-group="homeSelection" data-active={activeGroup === 'homeSelection'}>
						<BgImage src={options.homeSelection.find(home => home.selected)?.image || ``} />
					</figure>

					{/** */}
					<figure data-group="layout" data-active={activeGroup === 'layout'}>
						<img src={options.layout.find(home => home.selected)?.image || ''} />
					</figure>

					{/** */}
					<figure data-group="colourScheme" data-active={activeGroup === 'colourScheme'}>
						<BgImage
							src={(() => {
								const activeAccent = options.colourScheme.find(home => home.selected)
								const activeHomeType = options.homeSelection.find(home => home.selected)
								if (!activeAccent || !activeHomeType) return null
								const plan = floorplans.find(plan => activeHomeType.label === plan.name)
								return plan.accentImages[activeAccent.label]
							})()}
						/>
					</figure>

					{/** */}
					<figure data-group="interiorFinishes" data-active={activeGroup === 'interiorFinishes'}>
						<BgImage
							src={(() => {
								const activeHomeType = options.homeSelection.find(home => home.selected)
								if (!activeHomeType) return null
								const plan = floorplans.find(plan => activeHomeType.label === plan.name)
								return plan.finishes
							})()}
						/>
					</figure>

					{/** */}
					<figure data-group="integratedAppliances" data-active={activeGroup === 'integratedAppliances'}>
						<BgImage src={`/img/home-selection/integrated-appliances.jpg`} />
					</figure>

					{/** */}
					<figure data-group="millwork" data-active={activeGroup === 'millwork'}>
						{options.homeSelection.filter(item => item.selected)[0] &&
						options.homeSelection.filter(item => item.selected)[0].label === 'Jr. 1 Bedroom' ? (
							<div className="half-images">
								{options.colourScheme.find(item => item.selected)?.id === 1 ? (
									<BgImage src={options.millwork1.find(home => home.selected)?.image_light || ''} />
								) : (
									<BgImage src={options.millwork1.find(home => home.selected)?.image_dark || ''} />
								)}

								{options.colourScheme.find(item => item.selected)?.id === 1 ? (
									<BgImage src={options.millwork2.find(home => home.selected)?.image_light || ''} />
								) : (
									<BgImage src={options.millwork2.find(home => home.selected)?.image_dark || ''} />
								)}
							</div>
						) : (
							<>
								<BgImage src={options.millwork3.find(home => home.selected)?.image || ''} />
							</>
						)}
					</figure>

					{/** */}
					<figure data-group="bathrooms" data-active={activeGroup === 'bathrooms'}>
						<BgImage src={`/img/renderings/interiors/21050_2Bd_Bathroom_5K13.jpg`} />
					</figure>
				</section>

				<section className="options-container" ref={optionsContainer}>
					{/* Home Selection */}
					<div className="option-group" data-key="homeSelection" data-step="01" data-active="true">
						<h1 className="title">Home Selection</h1>

						<div className="options-list">
							{options.homeSelection.map((option, i) => (
								<Checkbox
									label={option.label}
									selected={option.selected}
									image={option.image}
									onClick={e => onCheckboxClick('homeSelection', option.label)}
									key={i}
								/>
							))}
						</div>
					</div>

					{/* Layout */}
					<div className="option-group" data-key="layout" data-step="02">
						<h1 className="title">Floorplan</h1>
						<p className="description">An ample selection with a range of sizes and views.</p>

						<div className="options-list">
							{options.layout.map((option, i) => (
								<Checkbox
									label={option.label}
									selected={option.selected}
									image={option.image}
									onClick={e => onCheckboxClick('layout', option.label)}
									extra={option.extra}
									key={i}
								/>
							))}
						</div>
					</div>

					{/* Colour Scheme */}
					<div className="option-group" data-key="colourScheme" data-step="03">
						<h1 className="title">Accent Colour</h1>
						<p className="description">
							Designer colour schemes feature soft matte warm grey cabinetry and matte black plumbing fixtures
							throughout.
						</p>

						<div className="options-list has-images">
							<span className="label">Your choice of two accent wood oak tone finishes</span>
							{options.colourScheme.map((option, i) => (
								<Checkbox
									label={option.label}
									selected={option.selected}
									image={option.image}
									prop="colourScheme"
									onClick={e => onCheckboxClick('colourScheme', option.label)}
									key={i}
								/>
							))}
						</div>
					</div>

					{/* Interior Finishes */}
					<div className="option-group" data-key="interiorFinishes" data-step="04">
						<h1 className="title">Interior Finishes</h1>
						<p className="description">Welcoming interiors invite residents home to contemporary spaces.</p>

						<div className="options-list">
							<span className="label">All Included</span>

							{options.interiorFinishes.map((option, i) => (
								<Checkbox
									label={option.label}
									selected={option.selected}
									disabled={option.disabled}
									onClick={e => onCheckboxClick('interiorFinishes', option.label)}
									key={i}
								/>
							))}
						</div>
					</div>

					{/* Integrated Appliances */}
					<div className="option-group" data-key="integratedAppliances" data-step="05">
						<h1 className="title">Integrated Appliances</h1>
						<p className="description">Premium integrated and paneled appliance package.</p>

						<div className="options-list">
							<span className="label">All Included</span>

							{options.integratedAppliances.map((option, i) => (
								<Checkbox
									label={option.label}
									selected={option.selected}
									disabled={option.disabled}
									onClick={e => onCheckboxClick('interiorFinishes', option.label)}
									key={i}
								/>
							))}
						</div>
					</div>

					{/* Bathrooms */}
					<div className="option-group" data-key="bathrooms" data-step="06">
						<h1 className="title">Modern Bathrooms</h1>
						{/* <p className="description"></p> */}

						<div className="options-list">
							{options.bathrooms.map((option, i) => (
								<Checkbox
									label={option.label}
									selected={option.selected}
									disabled={option.disabled}
									onClick={e => onCheckboxClick('interiorFinishes', option.label)}
									key={i}
								/>
							))}
						</div>
					</div>

					{/* Millwork Options */}
					<div className="option-group" data-key="millwork" data-step="07">
						<h1 className="title">Millwork</h1>
						<p className="description">Customize your space to suit your needs.</p>

						<div className="options-list">
							{options.homeSelection.filter(item => item.selected)[0] &&
							options.homeSelection.filter(item => item.selected)[0].label === 'Jr. 1 Bedroom' ? (
								<>
									<span className="label">Flex Space</span>
									{options.millwork1.map((option, i) => (
										<Checkbox
											label={option.label}
											selected={option.selected}
											image={option.image}
											onClick={e => onCheckboxClick('millwork1', option.label)}
											key={i}
										/>
									))}

									<span className="label m-t">Nook</span>
									{options.millwork2.map((option, i) => (
										<Checkbox
											label={option.label}
											selected={option.selected}
											image={option.image}
											onClick={e => onCheckboxClick('millwork2', option.label)}
											key={i}
										/>
									))}
								</>
							) : (
								<>
									{options.millwork3.map((option, i) => (
										<Checkbox
											label={option.label}
											selected={option.selected}
											image={option.image}
											onClick={e => onCheckboxClick('millwork3', option.label)}
											key={i}
										/>
									))}
								</>
							)}
						</div>
					</div>

					<div className="fixed-summary" data-fixed={shouldFixElements}>
						<div className="step-label">
							Step <span ref={currentStep}>01</span>/07
						</div>

						<button className="btn__save" onClick={downloadPdf}>
							Save
							<SVG src="/img/common/icon-arrow-01-103x78.svg" />
						</button>
					</div>
				</section>
			</main>
		</>
	)
}
