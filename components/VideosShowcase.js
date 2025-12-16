import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const VideosShowcase = () => {
    // Sample video data - replace these paths with your actual video paths
    const videos = [
        { id: 1, src: '/spiderman.mp4', title: 'SpiderMan CO' },
        { id: 2, src: '/discordbot.mp4', title: 'Discord Bot' },
        { id: 3, src: '/headphones.mp4', title: 'Ecommerce Website' },
        { id: 4, src: '/cmsdashboard.mp4', title: 'CMS Dashboard' },
        { id: 5, src: '/warningsystem.mp4', title: 'SaaS Platform' }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const videoRefs = useRef([]);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    useEffect(() => {
        if (!isPaused) {
            const timer = setTimeout(() => {
                handleNext();
            }, 15000); // 15 seconds

            return () => clearTimeout(timer);
        }
    }, [activeIndex, isPaused]);

    useEffect(() => {
        // Play active video and pause others
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === activeIndex) {
                    video.play().catch(e => console.log('Play prevented:', e));
                } else {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    }, [activeIndex]);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % videos.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    const getVideoPosition = (index) => {
        const diff = (index - activeIndex + videos.length) % videos.length;

        if (diff === 0) return 'active';
        if (diff === 1) return 'right';
        if (diff === videos.length - 1) return 'left';
        return 'hidden';
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            // Swipe left - go to next
            handleNext();
        }

        if (touchStartX.current - touchEndX.current < -50) {
            // Swipe right - go to previous
            handlePrev();
        }
    };

    return (
        <section className="relative w-full max-h-screen bg-black py-12 sm:py-20 px-4 overflow-hidden">
            {/* Carousel Container */}
            <div 
                className="relative max-w-7xl mx-auto h-[400px] sm:h-[500px] lg:h-[600px]"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {videos.map((video, index) => {
                    const position = getVideoPosition(index);

                    return (
                        <div
                            key={video.id}
                            className={`absolute top-1/2 left-1/2 transition-all duration-700 ease-in-out ${
                                position === 'active'
                                    ? 'translate-x-[-50%] translate-y-[-50%] w-[90%] sm:w-[85%] lg:w-[80%] max-w-4xl z-30 opacity-100 scale-100'
                                    : position === 'right'
                                        ? 'translate-x-[10%] sm:translate-x-[20%] translate-y-[-50%] w-[70%] sm:w-[65%] lg:w-[60%] max-w-2xl z-10 opacity-0 sm:opacity-40 scale-90 blur-sm'
                                        : position === 'left'
                                            ? 'translate-x-[-110%] sm:translate-x-[-120%] translate-y-[-50%] w-[70%] sm:w-[65%] lg:w-[60%] max-w-2xl z-10 opacity-0 sm:opacity-40 scale-90 blur-sm'
                                            : 'translate-x-[-50%] translate-y-[-50%] opacity-0 scale-75 pointer-events-none'
                            }`}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <video
                                    ref={el => videoRefs.current[index] = el}
                                    src={video.src}
                                    className="w-full h-full object-cover aspect-video"
                                    muted
                                    loop
                                    playsInline
                                />

                                {/* Overlay with title (only on active) */}
                                {position === 'active' && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 lg:p-8">
                                        <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">
                                            {video.title}
                                        </h3>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}

                {/* Navigation Controls */}
                <button
                    onClick={handlePrev}
                    className="hidden sm:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label="Previous video"
                >
                    <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>

                <button
                    onClick={handleNext}
                    className="hidden sm:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label="Next video"
                >
                    <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>

                {/* Play/Pause Button */}
                <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full transition-all duration-300 hover:scale-110 flex items-center gap-2"
                >
                    {isPaused ? <Play className="w-4 h-4 sm:w-5 sm:h-5" /> : <Pause className="w-4 h-4 sm:w-5 sm:h-5" />}
                    <span className="text-xs sm:text-sm font-medium">
                        {isPaused ? 'Play' : 'Pause'}
                    </span>
                </button>
            {/* Progress Indicators */}
            <div className="absolute bottom-0 flex justify-center gap-2 sm:gap-3 mt-12 sm:mt-16 w-full">
                {videos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`transition-all duration-300 rounded-full ${
                            index === activeIndex
                                ? 'w-8 sm:w-12 h-2 sm:h-3 bg-white'
                                : 'w-2 sm:w-3 h-2 sm:h-3 bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`Go to video ${index + 1}`}
                    />
                ))}
            </div>
            </div>

        </section>
    );
};

export default VideosShowcase;