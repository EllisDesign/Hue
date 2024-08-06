//
export function imgLoader({ src, width, quality }) {
	const isProd = process.env.NODE_ENV === 'production'
	//const base = isProd ? `${process.env.CDN_HOST}/${process.env.CDN_PATH}` : ''
	const file = src.replace('/_next/static/media', '')
	const base = `${process.env.CDN_HOST}/${process.env.CDN_PATH}`

	return `${base}${file}`
}
