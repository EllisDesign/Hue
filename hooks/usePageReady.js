// Dependencies
import { useEffect, useState } from 'react'

//
export default function usePageReady() {
	const [pageReady, setPageReady] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setPageReady(true)
		}, 500)
	}, [])

	return pageReady
}
