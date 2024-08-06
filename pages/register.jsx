// Dependencies
import Link from 'next/link'
import SVG from 'react-inlinesvg'

// Components
import { Seo } from 'components/common'
import { LassoForm } from 'components/ui'

// Component
export default function ThankYou() {
	return (
		<>
			<Seo title="Register Your Interest" />

			<main className="page__register">
				<section className="global__register-form">
					<div className="wrap--narrow">
						<div className="commercial-masthead">
							<h1>Register Your Interest</h1>

							<Link href="/commercial/register">
								<a>
									<h1>Register For Commercial</h1>
								</a>
							</Link>
						</div>
						<LassoForm redirect={false} />
					</div>
				</section>
			</main>

		</>
	)
}
