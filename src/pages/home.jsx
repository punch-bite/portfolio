function Home() {


    return (
        <motion.div
            initiale={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Hero />
            <Project />
        </motion.div>
    )
}

export default Home;