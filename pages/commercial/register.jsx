// Components
import { Seo } from 'components/common'
import { CommercialLassoForm, LassoForm } from 'components/ui'

// Component
export default function ThankYou() {
	return (
		<>
			<Seo title="Register Your Interest" />

			<main className="page__register">
				<section className="global__register-form">
					<div className="wrap--narrow">
						<h1>Register For Commercial</h1>
						<CommercialLassoForm redirect={false} />
					</div>
				</section>
			</main>

		</>
	)
}
