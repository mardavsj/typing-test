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
      <Restart className="mx-auto mt-7 text-slate-500" onRestart={restart}/>
      <Results className="mt-10 " state={state} errors={errors} accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)} total={totalTyped}/>
    </>
  )
}

const WordsContainer = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="relative text-2xl max-w-5xl leading-relaxed break-normal mt-28 ">
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
      <div className="grid justify-center h-full w-full">
        <img className="h-96 w-96 absolute opacity-20 left-28 top-10 animate-wiggle" alt="sand-clock" src={Picture}/>
        <span className="absolute right-1/3 bottom-96">
          <h1 className="absolute font-bold text-8xl text-yellow-500 uppercase opacity-20 ">Speed Typing Test</h1>
        </span>
        <h2 className="absolute text-yellow-500/100 text-3xl bg-gray-800 rounded-full font-normal p-3 w-[1015px] text-center ">Time: {timeLeft}s</h2>
      </div>
    )
  }

export default App
