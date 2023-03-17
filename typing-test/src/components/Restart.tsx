import { useRef } from "react";
import { MdRefresh } from "react-icons/md";

const Restart = ({
    onRestart: handleRestart,
    className= "",
}: {
    onRestart: () => void;
    className?: string;
}) => {

    const buttonRef = useRef<HTMLButtonElement>(null);
    const handleClick = () => {
        buttonRef.current?.blur();
        handleRestart();
    }

    return (
        <button onClick={handleRestart} className={`block rounded-2xl px-12 py-3 hover:bg-gray-800 hover:text-white ${className}`}>
            <MdRefresh className="w-6 h-7"/>
        </button>
    )
}

export default Restart;