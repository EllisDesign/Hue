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
	console.log(req.body)

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
				zipCode: req.body.postal.replace(postalRegex, '')
			}
		],
		questions: [
			{
				questionId: '131154',
				answers: [{ answerId: req.body.isRealtor }]
			},
			{
				questionId: '131157',
				answers: [{ answerId: req.body.workingWithRealtor }]
			},
			{
				questionId: '131159',
				answers: [{ answerId: req.body.howDidYouHear }]
			},
			{
				questionId: '131160',
				answers: [{ answerId: req.body.whatTypeOfHome }]
			},
			{
				questionId: '131430',
				answers: [{ answerId: req.body.liveInPomo }]
			},
			{
				questionId: '131432',
				answers: [{ answerId: req.body.isFirstResponder }]
			},
			{
				questionId: '131432',
				answers: [{ answerId: req.body.isFirstResponder }]
			},
			{
				questionId: '131434',
				answers: [{ answerId: req.body.incomeRange }]
			}
		],
		rating: {
			rating: req.body.isRealtor === '329455' ? 'R - Realtor' : 'N'
		},
		sourceType: {
			sourceType: 'Online Registration'
		},
		secondarySourceType: {
			secondarySourceType: 'Splash Page'
		},
		thankYouEmailTemplateId: 812611
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
	if (req.body.liveInPomo) {
		argsBody.questions.push({
			questionId: '131431',
			answers: [{ answer: req.body.pomoAddress }]
		})
	}

	//
	if (req.body.isFirstResponder) {
		argsBody.questions.push({
			questionId: '131433',
			answers: [{ answer: req.body.firstResponderPos }]
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
			Authorization: `Bearer ${process.env.LASSO_RTO_KEY}`
		},
		body: JSON.stringify(argsBody)
	}

	console.log(argsBody.rating)

	//
	console.log(url, args)
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
