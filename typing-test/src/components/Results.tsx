import { motion } from "framer-motion";
import { State } from "../hooks/useEngine";
import { formatPercentage } from './../utils/helpers';

const Results = ({
    state,
    errors,
    accuracyPercentage,
    total,
    className
}: {
    state: State;
    errors: number;
    accuracyPercentage: number;
    total: number;
    className?: string
}) => {

    const initial = {opacity:0}
    const animate = {opacity:1}
    const duration = {duration: 0.3}

    if (state !== 'finish') {
        return null
    }

    return (
        <motion.ul className={`flex flex-col items-center justify-center space-y-3 bg-gray-800 rounded-2xl p-5 ${className}`}>
            <motion.li className="text-3xl text-center text-yellow-300/90 font-extrabold mb-5 bg-black rounded-2xl w-full p-4" initial={initial} animate={animate} transition={{...duration, delay:0}}>
                Your Results 
            </motion.li>
            <motion.li className="text-slate-200" initial={initial} animate={animate} transition={{...duration, delay:0.3}}>
                Accuracy: {formatPercentage(accuracyPercentage)}
            </motion.li>
            <motion.li className="text-slate-200" initial={initial} animate={animate} transition={{ ...duration, delay: 0.6 }}>
                Typed: {total}
            </motion.li>
            <motion.li className="text-[#ee1f1f] animate-pulse text-xl font-semibold" initial={initial} animate={animate} transition={{ ...duration, delay: 0.9 }}>
                Errors: {errors}
            </motion.li>
        </motion.ul>
    )
}

export default Results