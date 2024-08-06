// Dependencies
import SVG from 'react-inlinesvg'
import { motion } from 'framer-motion'

// Components
import { Seo } from 'components/common'
import { ArrowButton, ImageFadeIn } from 'components/ui'

// Images
import imgOutpost1 from 'public/img/openhouse/Outpost 1.png'
import imgOutpost2 from 'public/img/openhouse/Outpost 2.png'
import imgOutpost3 from 'public/img/openhouse/Outpost 3.png'
import imgOutpost4 from 'public/img/openhouse/Outpost 4.png'
import imgOutpost5 from 'public/img/openhouse/Outpost 5.png'
import imgOutpost6 from 'public/img/openhouse/Outpost 6.png'
import imgOutpost7 from 'public/img/openhouse/Outpost 7.png'
import imgHue1 from 'public/img/openhouse/Hue 1.png'
import imgClarke1 from 'public/img/openhouse/Clarke 1.png'
import imgElmwood1 from 'public/img/openhouse/Elmwood 1.png'
import imgOutpostLogo from 'public/img/openhouse/Marcon-Outpost-Logo-Primary-Black.png'
import imgCoffee1 from 'public/img/openhouse/220608-013-2.jpg'
import img5671 from 'public/img/openhouse/211030-1068.jpg'
import Link from 'next/link'

//
export default function () {
	return (
		<>
			<Seo title="Open House x Happy Hour" />

			<main className="page__openhousexhappyhour">
				<div className="grid">
					<div className="grid__item grid__item--outpost-logo">
						<ImageFadeIn src={imgOutpostLogo} layout="responsive" />
					</div>
					<motion.div
						className="grid__item grid__item--mobile-height-adjust"
						initial="hidden"
						whileHover="visible"
					>
						<h1 className="small-caps">Open House x Happy Hour</h1>

						<motion.p
							className="small-caps"
							style={{ marginTop: 'auto' }}
							variants={{
								hidden: { opacity: 0, y: 10 },
								visible: { opacity: 1, y: 0 }
							}}
						>
							Visit the hue Sales Gallery to learn about our available homes, summer incentives, and enjoy a
							complimentary beverage at Outpost. Attendees will be entered to win a special Outpost giveaway.
						</motion.p>
					</motion.div>
					<div className="grid__item grid__item--mobile-height-adjust">
						<p className="small-caps">
							hue Sales Gallery at Outpost
							<br />
							3001 Saint Johns Street
							<br />
							Port Moody, BC V3H 2C4
						</p>

						<p className="small-caps">
							<a href="mailto:hue@marcon.ca" target="_blank">
								hue@marcon.ca
							</a>
							<br />
							<a href="tel:1-604-461-3445" target="_blank">
								+1 604 461 3445
							</a>
						</p>

						<p className="small-caps">
							<a href="https://outpost.ca" target="_blank">
								Outpost.ca
							</a>
							<br />
							<a href="https://www.instagram.com/outpost.ca/" target="_blank">
								Instagram
							</a>
						</p>

						<SVG className="hue-logo" src="/img/common/hue-logo.svg" />
					</div>
					<div className="grid__item">
						<ImageFadeIn src={imgOutpost1} />
					</div>
					<div className="grid__item">
						<ImageFadeIn src={imgOutpost2} />
					</div>
					<div className="grid__item grid__item--mobile-height-adjust">
						<div className="rsvp-wrapper" style={{ margin: 'auto' }}>
							{/* <h1 style={{ margin: '0 0 1rem 0' }} className="small-caps">
								Thursday Aug 18th 3PM - 6PM
							</h1>
							<a
								className="btn__rsvp"
								href="mailto:hue@marcon.ca?subject=Open%20House%20x%20Happy%20Hour%20-%20Aug%2018th"
								target="_blank"
							>
								RSVP
								<SVG src="/img/common/icon-arrow-01-103x78.svg" />
							</a> */}

							<h1 style={{ margin: '0 0 1rem 0' }} className="small-caps">
								Thursday Sept 8th 3PM - 6PM
							</h1>
							<a
								className="btn__rsvp"
								href="mailto:hue@marcon.ca?subject=Open House x Happy Hour - Sept 8th"
								target="_blank"
							>
								RSVP
								<SVG src="/img/common/icon-arrow-01-103x78.svg" />
							</a>
						</div>
					</div>
					<div className="grid__item grid__item--mobile-height-adjust">
						<div className="rsvp-wrapper" style={{ margin: 'auto' }}>
							<h1 style={{ margin: '0 0 1rem 0' }} className="small-caps">
								Thursday Sept 15th 3PM - 6PM
							</h1>
							<a
								className="btn__rsvp"
								href="mailto:hue@marcon.ca?subject=Open House x Happy Hour - Sep 15th"
								target="_blank"
							>
								RSVP
								<SVG src="/img/common/icon-arrow-01-103x78.svg" />
							</a>
						</div>
					</div>
					<div className="grid__item">
						<ImageFadeIn src={imgOutpost3} />
					</div>
					<motion.div className="grid__item grid__item--hue" initial="hidden" whileHover="visible">
						<ImageFadeIn src={imgHue1} objectPosition="top" />
						<motion.div
							className="screen"
							variants={{
								hidden: { opacity: 0 },
								visible: { opacity: 0.2 }
							}}
						></motion.div>

						<Link href="/" scroll={false}>
							<motion.a
								className="btn__rsvp"
								variants={{
									hidden: { opacity: 0 },
									visible: { opacity: 1 }
								}}
							>
								<span>Visit hue</span>
								<SVG src="/img/common/icon-arrow-01-103x78.svg" />
							</motion.a>
						</Link>
					</motion.div>
					<div className="grid__item">
						<ImageFadeIn src={imgOutpost5} />
					</div>
					<div className="grid__item grid__item--mobile-height-adjust">
						<div className="rsvp-wrapper" style={{ margin: 'auto' }}></div>
					</div>
					<div className="grid__item">
						<ImageFadeIn src={imgOutpost4} />
					</div>
					<div className="grid__item grid__item--mobile-height-adjust">
						<div className="rsvp-wrapper" style={{ margin: 'auto' }}>
							<h1 className="small-caps" style={{ maxWidth: '75%' }}>
								Other Marcon Offerings in the Tricities
							</h1>
						</div>
					</div>
					<motion.div className="grid__item grid__item--567" initial="hidden" whileHover="visible">
						<ImageFadeIn src={img5671} />
						<motion.div
							className="screen"
							variants={{
								hidden: { opacity: 0 },
								visible: { opacity: 0.2 }
							}}
						></motion.div>

						<motion.a
							href="https://marcon.ca/567"
							target="_blank"
							className="btn__rsvp"
							style={{ minWidth: '310px' }}
							variants={{
								hidden: { opacity: 0 },
								visible: { opacity: 1 }
							}}
						>
							<span>Visit 567 Clarke + Como</span>
							<SVG src="/img/common/icon-arrow-01-103x78.svg" />
						</motion.a>
					</motion.div>
					<motion.div className="grid__item grid__item--elmwood" initial="hidden" whileHover="visible">
						<ImageFadeIn src={imgElmwood1} />
						<motion.div
							className="screen"
							variants={{
								hidden: { opacity: 0 },
								visible: { opacity: 0.2 }
							}}
						></motion.div>

						<motion.a
							href="https://elmwood.marcon.ca"
							target="_blank"
							className="btn__rsvp"
							variants={{
								hidden: { opacity: 0 },
								visible: { opacity: 1 }
							}}
						>
							<span>Visit Elmwood</span>
							<SVG src="/img/common/icon-arrow-01-103x78.svg" />
						</motion.a>
					</motion.div>
					<div className="grid__item">
						<ImageFadeIn src={imgCoffee1} />
					</div>
					<div className="grid__item">
						<ImageFadeIn src={imgOutpost7} />
					</div>
					<div className="grid__item grid__item--mobile-height-adjust">
						<div className="rsvp-wrapper" style={{ margin: 'auto' }}>
							<h1 className="small-caps" style={{ maxWidth: '70%' }}>
								We look forward to seeing you!
							</h1>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
