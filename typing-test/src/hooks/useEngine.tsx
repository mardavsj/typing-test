import { useState } from "react"
import useTimer from "./useTimer"
import useWords from "./useWords"
import useType from './useType';

export type State = "start" | "run" | "finish"

const NUMBER_OF_WORDS = 12
const COUNTDOWN_SECONDS = 30

const useEngine = () => {
    const [state, setState ] = useState<State>("start")
    const {words, updateWords} = useWords(NUMBER_OF_WORDS)
    const {timeLeft, startCountdown, resetCountdown} = useTimer(COUNTDOWN_SECONDS)
    const {typed, cursor, clearTyped, resetTotalTyped, totalTyped} = useType(state != "finish")

    return {state, words, timeLeft, typed}
}

export default useEngine