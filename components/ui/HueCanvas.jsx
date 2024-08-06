// Dependencies
import { useEffect, useRef, useState } from 'react'

const green = 'rgba(81, 101, 69, 1)'
const blue = 'rgba(140, 148, 186, 1)'
const pink = 'rgba(211, 178, 180, 1)'
const biege = 'rgba(226,208,197,0.4)' //'rgba(236, 223, 214, 1)'
const biegeTransparent = 'rgba(226,208,197,0)'

let globalMouse = [0, 0]
let circlePos = [0, 0]

// Component
export default function HueCanvas({ container }) {
	const canvas = useRef(null)
	const [ctx, setCtx] = useState(null)
	const xyCoord = e => [e.pageX, e.pageY]
	const onMouseMove = e => (globalMouse = xyCoord(e))

	//
	const recalcCirclePos = () => {
		const distX = globalMouse[0] - circlePos[0]
		const distY = globalMouse[1] - circlePos[1]

		circlePos[0] += distX / 10
		circlePos[1] += distY / 7
	}

	//
	const getRadialGradient = () => {
		return ctx.createRadialGradient(
			circlePos[0],
			circlePos[1],
			0,
			canvas.current.width / 2,
			canvas.current.height / 2,
			canvas.current.width
		)
	}

	//
	const genGradient = () => {
		ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
		recalcCirclePos()

		//
		const radGrad = getRadialGradient()

		//
		radGrad.addColorStop(0, biege)
		radGrad.addColorStop(0.5, biegeTransparent)

		//
		ctx.fillStyle = radGrad
		ctx.fillRect(0, 0, canvas.current.width, canvas.current.height)
	}

	//
	const setupCanvas = () => {
		//
		canvas.current.width = window.innerWidth
		canvas.current.height = window.innerHeight

		//
		if (canvas.current.getContext) {
			genGradient([canvas.current.width / 2, canvas.current.height / 2])
		}
	}

	useEffect(() => {
		if (ctx === null) return

		//
		setupCanvas()

		//
		const loop = setInterval(genGradient, 50)

		//
		if (container.current) {
			container.current.addEventListener('mousemove', onMouseMove)
		}

		//
		const onResize = () => setupCanvas()
		window.addEventListener('resize', onResize)

		//
		return () => {
			if (container.current) {
				container.current.removeEventListener('mousemove', onMouseMove)
			}

			window.removeEventListener('resize', onResize)

			clearInterval(loop)
		}
	}, [ctx])

	//
	useEffect(() => {
		setCtx(canvas.current.getContext('2d'))
	}, [])

	return <canvas ref={canvas}></canvas>
}
