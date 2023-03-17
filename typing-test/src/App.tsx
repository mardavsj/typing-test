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
      <Results className="mt-10" state={state} errors={errors} accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)} total={totalTyped}/>
    </>
  )
}

const WordsContainer = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="relative text-2xl max-w-5xl leading-relaxed break-normal mt-8 ">
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
      <div>
      <div className="grid text-center">
        <img className="mx-auto h-20 w-20 " alt="sand-clock" src={Picture} />
        <h2 className="text-yellow-400/90 stroke-lime-400 text-xl bg-gray-800 rounded-2xl p-4 font-extrabold ">Time: { timeLeft }s</h2>
      </div>
      <span className="absolute left-40 top-0">
        <h1 className="absolute text-behind font-bold text-8xl text-yellow-100 uppercase opacity-10">Speed Typing Test</h1>
      </span>
      <span className="absolute top-0 right-0">
        <h1 className="text-behind font-bold text-6xl text-white uppercase opacity-10 ">Speed Typ</h1>
      </span>
      <span className="absolute bottom-10 right-40">
        <h1 className="text-behind font-bold text-7xl text-yellow-200 lowercase opacity-20 ">Speed Typing Test</h1>
      </span>
      <span className="absolute bottom-100 right-96">
        <h1 className=" absolute text-behind font-bold text-6xl text-yellow-300 uppercase opacity-10 ">Speed Typing Test</h1>
      </span>
      <span className="absolute bottom-5 right-32">
        <h1 className="text-behind font-bold text-7xl text-white lowercase opacity-10 ">speed typing test</h1>
      </span>
      <span className="absolute top-20 right-56">
        <h1 className="text-behind font-bold text-4xl text-yellow-500 lowercase opacity-30 ">typing</h1>
      </span>
      <span className="absolute bottom-80 left-52">
        <h1 className="text-behind font-bold text-5xl text-yellow-100 lowercase opacity-10 ">typing text</h1>
      </span>
      </div>
    )
  }

export default App
