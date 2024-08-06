// Dependencies
import Cors from 'cors'

// Utils
import { runMiddleware } from 'utils'

//
const nameRegex = new RegExp('[^A-z-.s]', 'gi')
const postalRegex = new RegExp('[^A-z0-9]', 'gi')

//
const cors = Cors({
	methods: ['POST']
})

//
export default async function LassoRegistrantsCreate(req, res) {
	await runMiddleware(req, res, cors)

	//
	const url = `${process.env.LASSO_API_BASE}/registrants`
	const argsBody = {
		person: {
			firstName: req.body.firstName.replace(nameRegex, ''),
			lastName: req.body.lastName.replace(nameRegex, '')
		},
		emails: [
			{
				email: req.body.email,
				type: 'Personal',
				primary: true
			}
		],
		phones: [
			{
				phone: req.body.phone,
				type: 'Mobile',
				primary: true
			}
		],
		addresses: [
			{
				city: req.body.city
			}
		],
		questions: [
			{
				questionId: '131159',
				answers: [{ answerId: req.body.howDidYouHear }]
			},
			{
				questionId: '131154',
				answers: [{ answerId: req.body.isRealtor }]
			},
			{
				questionId: '131157',
				answers: [{ answerId: req.body.workingWithRealtor }]
			},
			{
				questionId: '131160',
				answers: [{ answerId: req.body.whatTypeOfHome }]
			},
			{
				questionId: '131161',
				answers: [{ answerId: req.body.purchaseIntrest }]
			},
			{
				questionId: '131162',
				answers: [{ answerId: req.body.purchaseTimeframe }]
			},
			{
				questionId: '131163',
				answers: [{ answerId: req.body.pricePoint }]
			}
		],
		rating: {
			rating: req.body.isRealtor === '329455' ? 'R - Realtor' : 'N'
		},
		sourceType: {
			sourceType: 'Online Registration'
		},
		secondarySourceType: {
			secondarySourceType: 'Full Website'
		},
		thankYouEmailTemplateId: 833770
	}

	//
	if (req.body.isRealtor) {
		argsBody.questions.push({
			questionId: '131156',
			answers: [{ answer: req.body.realtorBrokerage }]
		})
	}

	//
	if (req.body.workingWithRealtor) {
		argsBody.questions.push({
			questionId: '131158',
			answers: [{ answer: req.body.realtorName }]
		})
	}

	//
	if (req.body.optin) {
		argsBody.questions.push({
			questionId: '131164',
			answers: [{ answerId: '329488' }]
		})
	}

	//
	const args = {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.LASSO_API_KEY}`
		},
		body: JSON.stringify(argsBody)
	}

	//
	console.log(url, argsBody)
	const request = await fetch(url, args)
	const response = await request.json()
	console.log(response)

	//
	if (response.errorCode) {
		return res.status(response.errorCode).send(response)
	}

	//
	return res.send({
		status: request.status,
		registrantId: response.registrantId
	})
}
