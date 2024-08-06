// Components
import { Seo } from 'components/common'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'

// Component
export default function ThankYou() {
	const router = useRouter()

	//
	useEffect(() => {
		if (router.query.redirect && router.query.redirect === '1') {
			setTimeout(() => {
				router.push('/ipad/register')
			}, 5000)
		}
	}, [router.query])

	//
	return (
		<>
			<Seo title="Thank You" />

			<main className="page__thank-you">
				<div className="wrap--narrow">
					<h1>Thank you for registering</h1>
					<p>We've received your submission and will get back to you shortly.</p>
				</div>
			</main>

		</>
	)
}
