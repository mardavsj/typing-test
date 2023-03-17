import Restart from "./components/Restart";
import Results from "./components/Results";
import Typing from './components/Typing';
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from './utils/helpers';
import Picture from './assets/pic5.jpg'

const App = () => {

  const {state, words, timeLeft, typed, errors, restart, totalTyped} = useEngine();

  return (
    <>
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GeneratedWords words={words}/>
        <Typing className="absolute inset-0 " words={words} userInput={typed}/>
      </WordsContainer>
      <Restart className="mx-auto mt-10 text-slate-500" onRestart={restart}/>
      <Results className="mt-10" state={state} errors={errors} accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)} total={totalTyped}/>
    </>
  )
}

const WordsContainer = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="relative text-2xl max-w-4xl leading-relaxed break-normal mt-14 ">
      {children}
    </div>
  )
}

  const GeneratedWords = ({ words } : { words: string }) => {
  return  <div className="text-gray-500 px-10">
          {words}
          </div>
  }

  const CountdownTimer = ({ timeLeft } : { timeLeft: number }) => {
    return (
      <div className="grid text-center">
        <img className="mx-auto h-20 w-20 " alt="sand-clock" src={Picture} />
        <h2 className="text-yellow-400/90 text-xl bg-gray-800 rounded-2xl p-4 font-extrabold ">Time: { timeLeft }s</h2>
      </div>
    )
  }

export default App
