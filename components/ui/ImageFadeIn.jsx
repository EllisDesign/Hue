// Dependencies
import { useState, useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import Image from 'next/image'

// Component
export default function ImageFadeIn(props) {
	const [imageProps, setImageProps] = useState(null)
	const [loaded, setLoaded] = useState(false)
	const animationControls = useAnimation()

	//
	useEffect(() => {
		const newImageProps = { ...props }

		//
		if (!newImageProps.layout) newImageProps.layout = 'fill'

		//
		if (newImageProps.layout === 'fill') {
			newImageProps.objectFit = 'cover'

			if (!newImageProps.objectPosition) {
				newImageProps.objectPosition = 'center'
			}
		}

		//
		setImageProps(newImageProps)
	}, [props])

	//
	useEffect(() => {
		if (loaded) {
			animationControls.start('visible')
		}
	}, [loaded])

	//
	return (
		<div className="image-fade-in" data-fill={imageProps && imageProps.layout === 'fill'}>
			<motion.figure
				initial={'hidden'}
				animate={animationControls}
				variants={animationVariants}
				transition={{ ease: 'easeOut', duration: 1 }}
			>
				{imageProps && <Image {...imageProps} placeholder="blur" onLoadingComplete={() => setLoaded(true)} />}
			</motion.figure>
		</div>
	)
}

//
const animationVariants = {
	visible: { opacity: 1, transition: { duration: 1, ease: 'linear' } },
	hidden: { opacity: 1 }
}
