import { useCallback, useEffect, useRef, useState } from "react";;

const useTimer = (seconds: number) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const intervalRef = useRef<NodeJS.Timer | null>(null)
    const startCountdown = useCallback(() => {
        console.log("starting countdown...")

        intervalRef.current = setInterval(() => {
            setTimeLeft((timeLeft) => timeLeft - 1)
    }, 1000)
}, [setTimeLeft])

    const resetCountdown = useCallback(() => {
        console.log("resetting countdown...");

        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }
        setTimeLeft(seconds)
    }, [seconds])

    useEffect(() => {
        if (!timeLeft && intervalRef.current) {
            console.log("clearing timer...")
            
            clearInterval(intervalRef.current)
        }
    }, [timeLeft, intervalRef])

    return {timeLeft, startCountdown, resetCountdown}
}

export default useTimer