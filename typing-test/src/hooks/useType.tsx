import { useCallback, useEffect, useRef, useState } from "react";

const isKeyboardCodeAllowed = (code: string) => {
    return (
        code.startsWith("Key") ||
        code.startsWith("Digit") ||
        code === "Backspace" ||
        code === "Space"
    )
}

const useType = (enabled: boolean) => {
    const [cursor, setCursor] = useState(0)
    const [typed, setTyped] = useState<string>("")
    const totalTyped = useRef(0)

    const keydownHandler = useCallback(
        ({ key, code }: KeyboardEvent) => {
            if (!enabled || !isKeyboardCodeAllowed(code)) {
                return;
            }

            switch (key) {
                case "Backspace":
                setTyped((prev) => prev.slice(0,-1))
                setCursor(cursor - 1)
                totalTyped.current -= 1
                break;
                default:
                    setTyped((prev) => prev.concat(key))
                    setCursor(cursor+1)
                    totalTyped.current += 1
            }

    }, [cursor, enabled])

    useEffect (() => {
        window.addEventListener("keydown", keydownHandler)
        return () => {
            window.removeEventListener("keydown", keydownHandler)
        }
    }, [keydownHandler])
}

export default useType