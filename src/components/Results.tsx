import { motion } from "framer-motion";
import { State } from "../hooks/Engine";
import { formatPercentage } from '../utils/help';

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
        <motion.ul className={`relative w-[1015px] flex flex-col items-center justify-center space-y-2 bg-gray-800 rounded-md p-5  ${className}`}>
            <motion.li className="text-3xl text-center text-yellow-600 font-normal mb-2 bg-black rounded-full w-full p-3" initial={initial} animate={animate} transition={{...duration, delay:0}}>
                Your Results 
            </motion.li>
            <motion.li className="text-slate-200" initial={initial} animate={animate} transition={{...duration, delay:0.8}}>
                Accuracy: {formatPercentage(accuracyPercentage)}
            </motion.li>
            <motion.li className="text-slate-200" initial={initial} animate={animate} transition={{ ...duration, delay: 1.6 }}>
                Letters typed: {total}
            </motion.li>
            <motion.li className="text-[#ee1f1f] animate-pulse text-xl font-semibold" initial={initial} animate={animate} transition={{ ...duration, delay: 2.4 }}>
                Errors: {errors}
            </motion.li>
        </motion.ul>
    )
}

export default Results