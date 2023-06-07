import { motion } from "framer-motion";

const Caret = () => {
  return (
    <motion.div aria-hidden={true} className=" inline-block bg-white w-0.5 h-6 " initial={{opacity:1}} animate={{opacity:0.2}} exit={{opacity:1}} transition={{ repeat: Infinity, duration:1.2, ease:"easeIn"}}/>
  )
}

export default Caret
