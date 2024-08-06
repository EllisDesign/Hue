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
	optin: false
}

// Component
export default function CommercialLassoForm({ redirect = false }) {
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
		const req = await fetch(`${location.protocol}//${location.host}/api/register-commercial`, {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(inputs)
		})
		const res = await req.json()

		if (res.registrantId) {
			router.push('/commercial/thank-you')
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
				<div className="group group--input">
					<input
						type="text"
						name="typeOfBusiness"
						placeholder="What type of business do you run?"
						onChange={onChange}
						required
					/>
				</div>

				{/* Are you a broker? */}
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
							Are you a broker?
						</option>
						<option value="67579">Yes</option>
						<option value="67578">No</option>
					</select>

					<input
						className="hidden-field"
						type="text"
						placeholder="What brokerage?"
						name="realtorBrokerage"
						onChange={onChange}
					/>
				</div>

				{/* Are you working with a broker? */}
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
							Are you working with a broker?
						</option>
						<option value="67581">Yes</option>
						<option value="67580">No</option>
					</select>

					<input className="hidden-field" type="text" placeholder="Who?" name="realtorName" onChange={onChange} />
				</div>

				{/* What commercial property type are you looking for? */}
				<div className="group group--select">
					<select name="whatTypeOfHome" defaultValue="label" onChange={onChange}>
						<option value="label" disabled>
							What commercial property type are you looking for?
						</option>

						<option value="335349">Retail</option>
						<option value="335350">Office</option>
						<option value="335348">Industrial </option>
						<option value="335347">Hospitality</option>
						<option value="335346">Special Purpose</option>
					</select>
				</div>

				{/* What would describe your interest? */}
				<div className="group group--select">
					<select name="purchaseIntrest" defaultValue="label" onChange={onChange}>
						<option value="label" disabled>
							What would describe your interest?
						</option>
						<option value="318625">Investment</option>
						<option value="318623">Owner Usage</option>
						<option value="318622">Browsing</option>
						<option value="318621">Industry</option>
					</select>
				</div>

				{/* How did you hear about us? */}
				<div className="group group--select">
					<select defaultValue="label" name="howDidYouHear" onChange={onChange}>
						<option value="label" disabled>
							How did you hear about us?
						</option>
						<option value="335742">Email</option>
						<option value="335741">Family/Friend</option>
						<option value="335740">Online Ad</option>
						<option value="335739">Realtor</option>
						<option value="335738">Print Ad</option>
						<option value="335737">Online Search</option>
						<option value="335736">Signage</option>
						<option value="335735">Social Media</option>
						<option value="335734">WhatsApp</option>
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
