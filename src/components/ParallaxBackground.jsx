import { motion, useScroll, useSpring, useTransform } from 'motion/react'

const ParallaxBackground = () => {
    const { scrollYProgress } = useScroll()
    const spring = useSpring(scrollYProgress, { damping: 60 })
    const mount3Y = useTransform(spring, [0, 0.5], ["0%", "70%"])
    const mountPX = useTransform(spring, [0, 0.5], ["0%", "-20%"])
    const mount2Y = useTransform(spring, [0, 0.5], ["0%", "30%"])
    const mount1Y = useTransform(spring, [0, 0.5], ["0%", "0%"])
    return (
        <section className='absolute inset-0 bg-black/40'>
            <div className='relative h-screen overflow-y-hidden'>
                {/* background sky */}
                <div className="absolute inset-0 w-full h-screen -z-50" style={{
                    backgroundImage: "url(/assets/sky.jpg)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }} />
                {/* Mountain 3 */}
                <motion.div className="absolute inset-0 w-full -z-40" style={{
                    backgroundImage: "url(/assets/mountain-3.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: mount3Y,
                }} />
                {/* planets */}
                <motion.div className="absolute inset-0 w-full -z-30" style={{
                    backgroundImage: "url(/assets/planets.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    x: mountPX,
                }} />
                {/* Mountain 2 */}
                <motion.div className="absolute inset-0 w-full -z-20" style={{
                    backgroundImage: "url(/assets/mountain-2.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: mount2Y,
                }} />
                {/* Mountain 1 */}
                <motion.div className="absolute inset-0 w-full -z-10" style={{
                    backgroundImage: "url(/assets/mountain-1.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: mount1Y,
                }} />
            </div>
        </section>
    )
}

export default ParallaxBackground