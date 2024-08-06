// Dependencies
import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Hooks
import { useReveal } from 'hooks'

// Component
export default function ImageCallout({ title, copy, image, vertical = false }) {
	const titleEl = useRef(null)
	const copyEl = useRef(null)
	const wipeEl = useRef(null)
	const isTitleInView = useReveal(titleEl, { threshold: 0.5 })
	const isCopyInView = useReveal(copyEl, { threshold: 0.5 })
	const isWipeInView = useReveal(wipeEl, { threshold: 0.5 })

	return (
		<figure className="image-callout wrap--flex wrap--wide section-mb" data-vertical={vertical}>
			<div className="masthead wrap--flex">
				<motion.h3
					ref={titleEl}
					animate={{ y: isTitleInView ? 0 : 100, opacity: isTitleInView ? 1 : 0 }}
					transition={{ duration: 0.5, ease: [0.83, 0.04, 0.4, 0.96] }}
				>
					{title}
				</motion.h3>

				<motion.aside
					ref={copyEl}
					animate={{ y: isCopyInView ? 0 : 100, opacity: isTitleInView ? 1 : 0 }}
					transition={{ duration: 0.5, ease: [0.83, 0.04, 0.4, 0.96] }}
				>
					<p>{copy}</p>
				</motion.aside>
			</div>

			<div className="image-container">
				<Image src={image.src} width={image.width} height={image.height} />
				<motion.div
					className="wipe"
					animate={{ width: isWipeInView ? '0' : '100%' }}
					transition={{ duration: 0.5, ease: [0.83, 0.04, 0.4, 0.96] }}
					ref={wipeEl}
				></motion.div>
			</div>
		</figure>
	)
}
