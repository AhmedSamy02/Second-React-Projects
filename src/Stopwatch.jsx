import { useRef, useState } from 'react'
function getTime(time) {
	const minutes = time.getMinutes()
	const seconds = time.getSeconds()
	const deciseconds = Math.floor(time.getMilliseconds() / 10)
	return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
		2,
		'0'
	)}:${String(deciseconds).padStart(2, '0')}`
}
function Stopwatch() {
	const [time, setTime] = useState(new Date())
	let intervalId = useRef(0)
	let tempTime = useRef(new Date())
	let diff = useRef(0)
	const resetTimeHandler = () => {
		clearInterval(intervalId.current)
		const date = new Date(0)
		setTime(date)
		tempTime.current = date
		diff.current = 0
	}
	const startTimeHandler = () => {
		clearInterval(intervalId.current)
		tempTime.current = new Date(new Date() - diff.current)
		intervalId.current = setInterval(() => {
			setTime(new Date())
		}, 1)
	}
	const stopTimeHandler = () => {
		clearInterval(intervalId.current)
		diff.current = time - tempTime.current
	}
	return (
		<div className="box">
			<h1 id="clock">
				{getTime(new Date(time.getTime() - tempTime.current.getTime()))}
			</h1>
			<br />
			<button className="start-button" onClick={startTimeHandler}>
				Start
			</button>
			<button className="reset-button" onClick={resetTimeHandler}>
				Reset
			</button>
			<button className="stop-button" onClick={stopTimeHandler}>
				Stop
			</button>
		</div>
	)
}
export default Stopwatch
