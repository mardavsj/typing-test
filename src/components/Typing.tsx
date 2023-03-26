import cn from "classnames"
import Caret from "./Brain";

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
        <div className={`px-10 ${className}`}>
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
            "text-red-700": !isCorrect && !isWhiteSpace,
            "text-slate-200": isCorrect && !isWhiteSpace,
            "bg-red-500": !isCorrect && isWhiteSpace
        })}>
            {expected}
        </span>
    )
}

export default Typing