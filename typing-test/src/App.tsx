import { faker } from "@faker-js/faker";
import Restart from "./components/Restart";
import Results from "./components/Results";
import Typing from './components/Typing';
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from './utils/helpers';

const App = () => {

  const {state, words, timeLeft, typed, errors, restart, totalTyped} = useEngine();

  return (
    <>
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GeneratedWords words={words}/>
        <Typing className="absolute inset-0" words={words} userInput={typed}/>
      </WordsContainer>
      <Restart className="mx-auto mt-10 text-slate-500" onRestart={restart}/>
      <Results className="mt-10" state={state} errors={errors} accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)} total={totalTyped}/>
    </>
  )
}

const WordsContainer = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="relative text-3xl max-w-2xl leading-relaxed break-all mt-3">
      {children}
    </div>
  )
}

  const GeneratedWords = ({ words } : { words: string }) => {
  return  <div className="text-slate-500">
          {words}
          </div>
  }

  const CountdownTimer = ({ timeLeft } : { timeLeft: number }) => {
    return <h2 className="text-primary-500 font-medium">Time: { timeLeft }</h2>
  }

export default App
