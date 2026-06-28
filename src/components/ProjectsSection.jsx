import React, { useState, useRef } from 'react'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: "CryptoPlace",
        description: "A comprehensive cryptocurrency tracking platform using React and REST APIs. Features real-time price updates and detailed market analysis.",
        image: '/CryptoThumbnail.webp',
        tags: ["React", "Tailwind", "REST API"],
        demoUrl: "https://cryptoplace01.netlify.app",
        gitHubUrl: "https://github.com/abubakarcodeer/CryptoWeb",
        className: "md:col-span-2 md:row-span-2"
    },
    {
        id: 2,
        title: "NFT Gallery",
        description: "A sleek, immersive gallery for digital assets.",
        image: '/NFT-Thumbnail.webp',
        tags: ["React", "Tailwind"],
        demoUrl: "https://nft-gallery01.netlify.app",
        gitHubUrl: "https://github.com/abubakarcodeer/NFT-Gallery",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 3,
        title: "VidTube",
        description: "Modern video streaming interface.",
        image: '/VidTubeThumbnail.webp',
        tags: ["React", "API"],
        demoUrl: "https://vidtube01.netlify.app",
        gitHubUrl: "https://github.com/abubakarcodeer/VidTube",
        className: "md:col-span-1 md:row-span-1"
    }
]

const SpotlightCard = ({ project }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`group relative bg-card/40 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${project.className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px transition duration-300 z-30"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(14, 165, 233, 0.15), transparent 40%)`,
                    opacity
                }}
            />

            <div className='h-full flex flex-col'>
                <div className={`${project.className.includes('row-span-2') ? 'h-80' : 'h-48'} overflow-hidden relative`}>
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                        <div className="flex space-x-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                                <ExternalLink size={20} />
                            </a>
                            <a href={project.gitHubUrl} target="_blank" rel="noreferrer" className="p-3 bg-black text-white rounded-full hover:scale-110 transition-transform">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>
                    <img
                        src={project.image}
                        alt={project.title}
                        className='w-full h-full object-cover transition duration-700 group-hover:scale-110'
                    />
                </div>

                <div className='p-8 flex-grow flex flex-col justify-between relative z-20'>
                    <div>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {project.tags.map((tag, i) => (
                                <span key={i} className='px-3 py-1 text-[10px] font-bold tracking-wider uppercase border border-border rounded-md bg-background/50 text-muted-foreground'>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h3 className={`font-bold mb-3 group-hover:text-primary transition-colors ${project.className.includes('row-span-2') ? 'text-3xl' : 'text-xl'}`}>
                            {project.title}
                        </h3>
                        <p className='text-muted-foreground text-sm leading-relaxed'>
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectsSection = () => {
    return (
        <section className='px-4 py-24 relative overflow-hidden' id='projects'>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.03),transparent_70%)] pointer-events-none" />

            <div className='container mx-auto max-w-6xl relative z-10'>
                <div className="flex flex-col items-center mb-16">
                    <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight'>
                        Featured <span className='text-primary'>Projects</span>
                    </h2>
                    <div className="h-1.5 w-20 bg-primary rounded-full mb-6" />
                    <p className='text-center text-muted-foreground max-w-2xl mx-auto text-lg'>
                        A collection of digital experiences crafted with a focus on <span className="text-foreground">performance</span> and <span className="text-foreground">clean aesthetics</span>.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr'>
                    {projects.map((project) => (
                        <SpotlightCard key={project.id} project={project} />
                    ))}
                </div>

                <div className='text-center mt-20'>
                    <a
                        className='inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105'
                        href='https://github.com/abubakarcodeer'
                        target='_blank'
                        rel="noreferrer"
                    >
                        Explore More on GitHub <ArrowRight size={20}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
