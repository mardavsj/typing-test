import cn from "classnames"
import Caret from "./Caret";

const Typing = ({
    userInput,
    className,
    words
}: {
    userInput: string;
    words: string;
    className?: string;
}) => {

    const typedCharacters = userInput.split("");

    return (
        <div className={` text-slate-300 px-10 ${className}`}>
            {typedCharacters.map((char, index) => {
                return <Character key={`${char}_${index}`} actual={char} expected={words[index]}/>
            })}
            <Caret/>
        </div>
    )
}

const Character = ({actual, expected}:{actual:string, expected:string}) => {

    const isCorrect = actual === expected
    const isWhiteSpace = expected === ""

    return (
        <span className={cn({
            "text-red-600": !isCorrect && !isWhiteSpace,
            "text-primary-500": isCorrect && !isWhiteSpace,
            "bg-red-500/50": !isCorrect && isWhiteSpace
        })}>
            {expected}
        </span>
    )
}

export default Typing