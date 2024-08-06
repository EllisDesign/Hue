// Dependencies
import { useRouter } from 'next/router'
import { useState } from 'react'
import SVG from 'react-inlinesvg'
import { useDispatch, useSelector } from 'react-redux'

// Store
import { uiUpdateRegisterOverlay } from 'store/actions'

// Component
export default function Footer() {
	const router = useRouter()
	const [showDisclaimer, setShowDislclaimer] = useState(false)

	//
	return (
		<footer className="global__footer" data-slug={router.route}>
			<div className="global__footer__typical">
				<div className="top">
					<div className="top-left">
						<SVG className="marcon" src="/img/common/Logo-Marcon-01-231x34.svg" />
						<SVG className="building" src="/img/common/Buildingforlife.svg" />
					</div>

					<div className="top-right">
						<nav>
							<div className="row">
								<a>Projects</a>
								<a href="http://marcon.ca/en/projects/" target="_blank">
									All Projects
								</a>
							</div>
							<div className="row">
								<a>Homeowner Support</a>
								<a href="http://marcon.ca/en/home-owner/overview/" target="_blank">
									Overview
								</a>
								<a
									href="http://customercare.marcon.ca/customercare/login?_ga=2.151397625.1506990333.1606844496-1308414839.1603733869"
									target="_blank"
								>
									Login
								</a>
							</div>
							<div className="row">
								<a>Our Company</a>
								<a href="gttp://marcon.ca/en/our-company/overview/" target="_blank">
									Overview
								</a>
								<a href="http://marcon.ca/en/our-company/news/" target="_blank">
									News
								</a>
								<a href="http://marcon.ca/en/our-company/community/" target="_blank">
									Community
								</a>
								<a href="http://marcon.ca/en/our-company/careers/" target="_blank">
									Careers
								</a>
							</div>
						</nav>
					</div>
				</div>

				<div className="bottom">
					<div className="left">
						<a href="mailto:hue@marcon.ca" target="_blank" className="email">
							hue@marcon.ca
						</a>

						{showDisclaimer && (
							<p className="disclaimer">
								This production is not an offering for sale. No offering for sale can be made without a Disclosure
								Statement. The material provided herein is for general informational purposes only and is not
								intended to depict as-built construction designs or finishes. The Developer reserves the right in
								its sole discretion to make modifications or changes to building design, floor plans, project
								designs, specifications, finishes, features, incentives and dimensions, without prior notice or
								compensation to any person. Renderings and any depicted views are artistic concepts only. Square
								footages are approximate and have been calculated from architectural drawings. Actual final
								dimensions following completion of construction may vary from those set out herein. No information
								or material on this website is to be considered to be an offer to sell or rent a home, even if a
								price for a product or service may be indicated. E.&O.E.
							</p>
						)}

						<nav className="nav-util">
							<a href="http://marcon.ca/en/privacy-policy/" target="_blank" rel="noopener noreferrer">
								Privacy Policy
							</a>
							<a href="http://marcon.ca/en/terms-of-use/" target="_blank" rel="noopener noreferrer">
								Terms of Use
							</a>
							<a
								href="https://marcon.ca/wp-content/uploads/2020/10/Construction-Site-Full-COVID-19-Procedures.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								COVID Safety Plan
							</a>
							<button onClick={() => setShowDislclaimer(!showDisclaimer)}>Disclaimer</button>
							<span className="bullet">&bull;</span>
							<span className="copywrite">&copy; 2023 Marcon</span>
						</nav>
					</div>

					<div className="right">
						<div>
							<p>
								Sales Gallery Permanently Closed
								<br />
								Available by Appointment
								<br />
								T: <a href="tel:604-461-3445">604.461.3445</a>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="gradient-bg"></div>
		</footer>
	)
}
