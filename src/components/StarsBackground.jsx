import { useEffect, useState } from 'react'

const StarsBackground = () => {

    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])

    useEffect(() => {
        generateStars()
        generateMeteors()

        const handleRsize = () => {
            generateStars();
        }
        window.addEventListener('resize', handleRsize)
        return ()=> window.removeEventListener("resize",handleRsize)
    }, [])

    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000)
        const newStars = []
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            })
        }
        setStars(newStars)
    }
    const generateMeteors = () => {
        const numberOfMeteors = 4
        const newMetores = []
        for (let i = 0; i < numberOfMeteors; i++) {
            newMetores.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                opacity: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3
            })
        }
        setMeteors(newMetores)
    }

    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {stars.map((star) => (
                <div key={star.id} className='star animate-pulse-subtle' style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    delay: star.opacity,
                    animationDuration: star.animationDuration + "s",
                }}
                />
            ))}
            {meteors.map((meteor) => (
                <div key={meteor.id} className='meteor animate-meteor' style={{
                    width: meteor.size * 50 + "px",
                    height: meteor.size * 2 + "px",
                    left: meteor.x + "%",
                    top: meteor.y + "%",
                    delay: meteor.delay,
                    animationDuration: meteor.animationDuration + "s",
                }}
                />
            ))}
        </div>
    )
}

export default StarsBackground