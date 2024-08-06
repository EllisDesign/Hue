// Dependencies
import Link from 'next/link'
import SVG from 'react-inlinesvg'
import { motion } from 'framer-motion'

//
export default function ArrowButton({ href, label, onClick, theme = 'white', target }) {
	if (onClick) {
		return (
			<motion.button
				className="btn btn--outline btn--rounded btn--white"
				onClick={onClick}
				whileHover="hover"
				initial="idle"
				variants={linkVariants}
			>
				<span>{label}</span>

				<motion.i variants={iconVariants}>
					<SVG src="/img/common/icon-arrow-01-103x78.svg" />
				</motion.i>
			</motion.button>
		)
	} else if (target === '_blank') {
		return (
			<motion.a
				href={href}
				className="btn btn--outline btn--rounded"
				whileHover="hover"
				initial="idle"
				variants={linkVariants}
				target="_blank"
			>
				<span>{label}</span>

				<motion.i variants={iconVariants}>
					<SVG src="/img/common/icon-arrow-01-103x78.svg" />
				</motion.i>
			</motion.a>
		)
	} else {
		return (
			<Link href={href} scroll={false}>
				<motion.a
					className={`btn btn--outline btn--rounded btn--${theme}`}
					whileHover="hover"
					initial="idle"
					variants={linkVariants}
				>
					<span>{label}</span>

					<motion.i variants={iconVariants}>
						<SVG src="/img/common/icon-arrow-01-103x78.svg" />
					</motion.i>
				</motion.a>
			</Link>
		)
	}
}

//
const linkVariants = {
	idle: {
		transition: {
			duration: 0.5
		}
	},
	hover: {
		transition: {
			duration: 0.5
		}
	}
}

//
const iconVariants = {
	idle: {
		x: 0
	},
	hover: {
		x: 10
	}
}
