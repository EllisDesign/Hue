// Dependencies
import Image from 'next/image'
import { useState } from 'react'

//
export default function ImageBlock({ src }) {
	const [paddingTop, setPaddingTop] = useState('calc(0)')

	// NOTE: without knowing the width/height, use layout fill and create a ratio with padding-top
	const onLoadingComplete = ({ naturalWidth, naturalHeight }) => {
		return setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight}))`)
	}

	//
	return (
		<figure style={{ paddingTop }}>
			<Image src={src} layout="fill" objectFit="contain" onLoadingComplete={onLoadingComplete} loading="eager" />
		</figure>
	)
}
