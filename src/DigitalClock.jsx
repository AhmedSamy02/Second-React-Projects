import { useEffect, useState } from 'react'
function getTime(time) {
	const hours =time.getHours()%12
	const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const whichM = time.getHours()/12>0?'PM':'AM'
	return `${Math.floor(hours / 10)}${Math.floor(hours % 10)}:${Math.floor(
		minutes / 10
	)}${Math.floor(minutes % 10)}:${Math.floor(seconds / 10)}${Math.floor(
		seconds % 10
	) } ${whichM}`
}
function DigitalClock() {
	const [time, setTime] = useState(new Date())
	useEffect(() => {
		const interval =setInterval(() => {
			setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
	}, [])
	return (
		<>
			<h1 id="clock">{getTime(time)}</h1>
		</>
	)
}
export default DigitalClock
