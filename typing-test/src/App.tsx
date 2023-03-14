import { faker } from "@faker-js/faker";
import Restart from "./components/Restart";
import Results from "./components/Results";
import Typing from './components/Typing';

const words = faker.random.words(10)

const App = () => {
  return (
    <>
      <CountdownTimer timeleft={30} />
      <WordsContainer>
        <GeneratedWords words={words}/>
        <Typing className="absolute inset-0" userInput={words}/>
      </WordsContainer>
      <Restart className="mx-auto mt-10 text-slate-500" onRestart={() => null}/>
      <Results className="mt-10" errors={10} accuracyPercentage={100} total={200}/>
    </>
  )
}

const WordsContainer = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3">
      {children}
    </div>
  )
}

  const GeneratedWords = ({ words } : { words: string }) => {
  return  <div className="text-slate-500">
          {words}
          </div>
  }

  const CountdownTimer = ({ timeleft } : { timeleft: number }) => {
    return <h2 className="text-primary-500 font-medium">Time: { timeleft }</h2>
  }

export default App
