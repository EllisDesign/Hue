export default function setAppHeight() {
	//
	const onResize = () => {
		document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
	}

	//
	onResize()

	//
	window.addEventListener('resize', onResize)

	//
	return () => window.removeEventListener('resize', onResize)
}
