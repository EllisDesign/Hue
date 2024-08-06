import { useState } from 'react'

const useForm = (initialState = {}, cb) => {
	//
	const [inputs, setInputs] = useState(initialState)

	//
	const onSubmit = e => {
		if (e) {
			e.preventDefault()
		}

		cb()
	}

	//
	const onChange = e => {
		e.persist()

		const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

		setInputs(input => ({
			...inputs,
			[e.target.name]: value
		}))
	}

	//
	return { inputs, onChange, onSubmit }
}

export default useForm
