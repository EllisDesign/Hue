// Dependencies
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef, useState } from 'react'
import SVG from 'react-inlinesvg'
import { useForm } from 'hooks'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { uiUpdateRegisterOverlay } from 'store/actions'

//
const initialFormState = {
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	postal: '',
	optin: false
}

// Component
export default function LassoForm({ redirect = false }) {
	const dispatch = useDispatch()
	const router = useRouter()
	const recaptchaRef = useRef(null)
	const form = useRef(null)
	const [errorMessage, setErrorMessage] = useState(null)

	//
	const { inputs, onChange, onSubmit } = useForm(initialFormState, async () => {
		//
		if (!validateFormFields()) {
			return
		}

		//
		const token = await recaptchaRef.current.executeAsync()
		if (!token) {
			console.log('reCAPTCHA not set')
			return
		}

		//
		await sendRequest()
	})

	//
	const validateFormFields = () => {
		let formIsValid = true
		const textInputs = [...form.current.querySelectorAll('.group--input input[required]')]
		const emailInput = form.current.querySelector('input[type="email"]')

		//
		textInputs.forEach(input => {
			if (input.value.length === 0) {
				input.parentNode.classList.add('error')
				formIsValid = false
			} else {
				input.parentNode.classList.remove('error')
			}
		})

		//
		if (emailInput.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g) === null) {
			emailInput.parentNode.classList.add('error')
			formIsValid = false
		} else {
			emailInput.parentNode.classList.remove('error')
		}

		return formIsValid
	}

	//
	const sendRequest = async () => {
		const req = await fetch(`${location.protocol}//${location.host}/api/register`, {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(inputs)
		})
		const res = await req.json()

		if (res.registrantId) {
			router.push(redirect ? `/thank-you?redirect=1` : '/thank-you')
			setErrorMessage(null)
			dispatch(uiUpdateRegisterOverlay({ active: false }))
		} else {
			const errMsg = res.errorMessage ? res.errorMessage.split('=')[1].slice(0, -1) : null
			setErrorMessage(errMsg || 'There was an error registering. Please check your details and try again.')
		}
	}

	//
	const shouldShowHiddenField = e => {
		const input = e.target
		const parent = input.parentNode

		if (input.options[input.selectedIndex].innerHTML === 'No') {
			parent.dataset.showHiddenField = false
		} else {
			parent.dataset.showHiddenField = true
		}
	}

	//
	return (
		<>
			{errorMessage && <p className="error-msg">{errorMessage}</p>}

			<form ref={form} onSubmit={onSubmit} noValidate>
				<div className="group group--input">
					<input type="text" name="firstName" placeholder="First Name" onChange={onChange} required />
				</div>
				<div className="group group--input">
					<input type="text" name="lastName" placeholder="Last Name" onChange={onChange} required />
				</div>
				<div className="group group--input">
					<input type="email" name="email" placeholder="Email" onChange={onChange} required />
				</div>
				<div className="group group--input">
					<input type="text" name="phone" placeholder="Phone Number" onChange={onChange} required />
				</div>
				<div className="group group--input">
					<input type="text" name="city" placeholder="City" onChange={onChange} required />
				</div>

				{/* How did you hear about us? */}
				<div className="group group--select">
					<select defaultValue="label" name="howDidYouHear" onChange={onChange}>
						<option value="label" disabled>
							How did you hear about us?
						</option>
						<option value="329466">Email</option>
						<option value="329465">Family/Friend</option>
						<option value="329464">Realtor</option>
						<option value="329463">Online Ad</option>
						<option value="329462">Print Ad</option>
						<option value="329461">Online Search</option>
						<option value="329460">Signage</option>
						<option value="329459">Social Media</option>
						<option value="329458">WhatsApp</option>
					</select>
				</div>

				{/* Are you a realtor? */}
				<div className="group group--select group--has-hidden-field" data-show-hidden-field="false">
					<select
						defaultValue="label"
						name="isRealtor"
						onChange={e => {
							shouldShowHiddenField(e)
							onChange(e)
						}}
					>
						<option value="label" disabled>
							Are you a realtor?
						</option>
						<option value="329455">Yes</option>
						<option value="329454">No</option>
					</select>

					<input
						className="hidden-field"
						type="text"
						placeholder="What brokerage?"
						name="realtorBrokerage"
						onChange={onChange}
					/>
				</div>

				{/* Are you working with a realtor? */}
				<div className="group group--select group--has-hidden-field" data-show-hidden-field="false">
					<select
						defaultValue="label"
						name="workingWithRealtor"
						onChange={e => {
							shouldShowHiddenField(e)
							onChange(e)
						}}
					>
						<option value="label" disabled>
							Are you working with a realtor?
						</option>
						<option value="329457">Yes</option>
						<option value="329456">No</option>
					</select>

					<input
						className="hidden-field"
						type="text"
						placeholder="Realtor Name"
						name="realtorName"
						onChange={onChange}
					/>
				</div>

				{/* What type of home are you looking for? */}
				<div className="group group--select">
					<select name="whatTypeOfHome" defaultValue="label" onChange={onChange}>
						<option value="label" disabled>
							What type of home are you looking for?
						</option>
						<option value="329473">Jr. 1 Bed</option>
						<option value="329472">1 Bed</option>
						<option value="329471">1 Bed + Den</option>
						<option value="329470">Jr. 2 Bed</option>
						<option value="329469">2 Bed</option>
						<option value="329468">2 Bed + Den</option>
						<option value="329467">3 Bed</option>
					</select>
				</div>

				{/* What would describe your interest? */}
				<div className="group group--select">
					<select name="purchaseIntrest" defaultValue="label" onChange={onChange}>
						<option value="label" disabled>
							What would describe your interest?
						</option>
						<option value="329478">Family Investment</option>
						<option value="329477">Rental Investment</option>
						<option value="329476">Personal Use</option>
						<option value="329475">Just Browsing</option>
						<option value="329474">Work in the Industry</option>
					</select>
				</div>

				{/* When are you looking to purchase? */}
				<div className="group group--select">
					<select name="purchaseTimeframe" defaultValue="label" onChange={onChange}>
						<option value="label" disabled>
							When are you looking to purchase?
						</option>

						<option value="329482">Immediately</option>
						<option value="329481">3 months</option>
						<option value="329480">6 months</option>
						<option value="329479">1+ year</option>
					</select>
				</div>

				{/* What price point are you looking for? */}
				<div className="group group--select">
					<select name="pricePoint" defaultValue="label" onChange={onChange}>
						<option value="label" disabled>
							What price point are you looking for?
						</option>
						<option value="329487">$400,00 - $600,00</option>
						<option value="329486">$600,000 - $800,00</option>
						<option value="329485">$800,000 - $1,000,000</option>
						<option value="329484">$1,000,000 - $1,200,000</option>
						<option value="329483">$1,200,000 +</option>
					</select>
				</div>

				{/* Consent Checkbox */}
				<div className="group group--checkboxes">
					<input id="optin" name="optin" type="checkbox" onChange={onChange} />
					<label htmlFor="optin">
						Click on the box to confirm you would like to receive future e‑communications from Marcon including
						information about upcoming developments or special offers.*
					</label>
				</div>

				{/* Actions */}
				<button type="submit" className="btn__register btn btn--outline btn--rounded">
					<span>Register</span>
					<SVG src="/img/common/icon-arrow-01-103x78.svg" />
				</button>

				<p className="disclaimer">
					By clicking the SUBMIT button, you consent to Marcon and their current and future affiliates and partners
					sending you emails with promotional messages such as newsletters, announcements, press releases and event
					invitations regarding their products and services; (2) receiving calls on behalf of Marcon to discuss
					products and services; and (3) the collection, use and disclosure of the personal information you have
					provided, by or on behalf of the members of Marcon, for the above purposes, in accordance with Marcon’s
					Privacy Policy. You may withdraw your consent at any time.
				</p>

				<ReCAPTCHA ref={recaptchaRef} sitekey={process.env.RECAPTCHA_SITE_KEY} size="invisible" />
			</form>
		</>
	)
}
