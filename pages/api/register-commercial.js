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
				questionId: '133656',
				answers: [{ answerId: req.body.typeofBusiness }]
			},
			{
				questionId: '133553',
				answers: [{ answerId: '335360' }]
			},
			{
				questionId: '133657',
				answers: [{ answerId: req.body.howDidYouHear }]
			},
			{
				questionId: '14274',
				answers: [{ answerId: req.body.isRealtor }]
			},
			{
				questionId: '14276',
				answers: [{ answerId: req.body.workingWithRealtor }]
			},
			{
				questionId: '133550',
				answers: [{ answerId: req.body.whatTypeOfHome }]
			},
			{
				questionId: '124789',
				answers: [{ answerId: req.body.purchaseIntrest }]
			}
		],
		rating: {
			rating: req.body.isRealtor === '67579' ? 'R - Realtor' : 'N'
		},
		sourceType: {
			sourceType: 'Online Registration'
		},
		secondarySourceType: {
			secondarySourceType: 'hue Website'
		},
		thankYouEmailTemplateId: 882324
	}

	//
	if (req.body.isRealtor) {
		argsBody.questions.push({
			questionId: '14275',
			answers: [{ answer: req.body.realtorBrokerage }]
		})
	}

	//
	if (req.body.workingWithRealtor) {
		argsBody.questions.push({
			questionId: '14277',
			answers: [{ answer: req.body.realtorName }]
		})
	}

	//
	if (req.body.optin) {
		argsBody.questions.push({
			questionId: '133171',
			answers: [{ answerId: '334400' }]
		})
	}

	//
	const args = {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.LASSO_COMMERCIAL_KEY}`
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
