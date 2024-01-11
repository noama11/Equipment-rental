import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

// This is an Higher order component

// it's for applying changes on all of the section and for easy manage them.
//Higher then component because this is component that have another component as an argument (prop)
const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
            >
                <span className='' id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        )
    }

export default SectionWrapper