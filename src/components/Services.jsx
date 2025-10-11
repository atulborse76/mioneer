import  { useEffect } from 'react';

function Services() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const dx = mouseX - centerX;
                const dy = mouseY - centerY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx);
                const offset = Math.min(distance / 50, 15);
                element.style.transform = `translate(${Math.cos(angle) * offset}px, ${Math.sin(angle) * offset}px)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const services = [
        {
          title: "AI-Powered Solutions",
          description: "Leverage cutting-edge AI technology to enhance your business operations, from automating processes to improving decision-making with deep insights and predictive analytics.",
          icon: "🤖",
          gradient: "from-primaryGold to-primaryGoldLight"
        },
        {
          title: "Blockchain Integration",
          description: "Implement secure and transparent blockchain solutions to build trust and streamline processes with smart contracts and decentralized applications.",
          icon: "🔗",
          gradient: "from-primaryTeal to-primaryTealLight"
        },
        {
          title: "AI Agentics Services",
          description: "Build, deploy, and scale intelligent, autonomous agents designed to think, act, and collaborate like humans. Automate complex workflows, optimize decision-making, and enhance customer experiences with AI Agentics.",
          icon: "🧠",
          gradient: "from-accentPurple to-accentPink"
        },
        {
          title: "Custom Software Development",
          description: "Tailor-made software solutions that perfectly fit your business needs with high-quality, scalable, and maintainable code architecture.",
          icon: "💻",
          gradient: "from-primaryGoldLight to-primaryTeal"
        },
        {
          title: "Cloud Computing",
          description: "Optimize your infrastructure with scalable cloud solutions ensuring flexibility, efficiency, security, and seamless cloud migration.",
          icon: "☁️",
          gradient: "from-primaryTealLight to-primaryGold"
        },
        {
          title: "Cybersecurity Solutions",
          description: "Protect your business from cyber threats with advanced security measures, threat detection, incident response, and risk management.",
          icon: "🛡️",
          gradient: "from-primaryGold to-accentPurple"
        },
    ];

    return (
        <div className='relative bg-darkBg py-20 overflow-hidden' id='services'>
            {/* Floating Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0">
                    <div className="absolute top-1/6 left-1/8 transform -translate-y-1/2 floating-element animate-flow1">
                        <svg width="200" height="200" fill="none" stroke="currentColor" className="text-primaryGold opacity-20" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="absolute top-1/5 right-1/4 transform -translate-y-1/2 floating-element animate-flow2">
                        <svg width="150" height="150" fill="none" stroke="currentColor" className="text-primaryTeal opacity-20" viewBox="0 0 24 24">
                            <rect x="4" y="4" width="16" height="16" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="absolute bottom-1/5 left-1/4 transform -translate-x-1/2 floating-element animate-flow3">
                        <svg width="100" height="100" fill="none" stroke="currentColor" className="text-primaryGoldLight opacity-20" viewBox="0 0 24 24">
                            <ellipse cx="12" cy="12" rx="10" ry="5" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="absolute top-1/3 left-2/5 transform -translate-x-1/2 floating-element animate-flow4">
                        <svg width="120" height="120" fill="none" stroke="currentColor" className="text-accentPurple opacity-20" viewBox="0 0 24 24">
                            <polygon points="12,2 22,21 2,21" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="absolute bottom-1/4 right-1/3 transform -translate-y-1/2 floating-element animate-flow5">
                        <svg width="180" height="180" fill="none" stroke="currentColor" className="text-primaryTealLight opacity-20" viewBox="0 0 24 24">
                            <path d="M6 2L2 6L6 10L10 6L6 2Z" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className='md:px-14 px-4 max-w-screen-2xl mx-auto relative z-10'>
                <div className='text-center mb-16 space-y-4'>
                     <h1 className="text-6xl font-bold text-white mb-6">
                        Our <span className='gradient-text'>Services</span>
                    </h1>
                    <p className='text-xl  text-gray-400 max-w-3xl mx-auto'>
                        Comprehensive technology solutions designed to transform your business and drive innovation
                    </p>
                </div>

                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='group relative p-8 bg-darkBgLight/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primaryGold/50 transform transition-all duration-500 hover:scale-105 hover:shadow-glow-gold overflow-hidden'
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                            
                            <div className='relative z-10'>
                                <div className='text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500'>
                                    {service.icon}
                                </div>
                                <h3 className='text-2xl font-display font-bold text-textPrimary mb-4 group-hover:text-primaryGold transition-colors duration-300'>
                                    {service.title}
                                </h3>
                                <p className='text-gray-400 leading-relaxed'>
                                    {service.description}
                                </p>
                                
                                {/* Animated bottom border */}
                                <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className='text-center mt-16'>
                    <button className='px-10 py-4 bg-gradient-gold text-darkBg font-bold text-lg rounded-full hover:shadow-glow-gold transform hover:-translate-y-1 transition-all duration-300'>
                        View All Services
                    </button>
                </div>
            </div>

            <style>{`
                @keyframes flow1 {
                    0% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(-60px) rotate(45deg); }
                    100% { transform: translateY(0) rotate(0); }
                }
                @keyframes flow2 {
                    0% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(70px) rotate(-45deg); }
                    100% { transform: translateY(0) rotate(0); }
                }
                @keyframes flow3 {
                    0% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(-50px) rotate(60deg); }
                    100% { transform: translateY(0) rotate(0); }
                }
                @keyframes flow4 {
                    0% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(-70px) rotate(-60deg); }
                    100% { transform: translateY(0) rotate(0); }
                }
                @keyframes flow5 {
                    0% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(50px) rotate(35deg); }
                    100% { transform: translateY(0) rotate(0); }
                }
                .animate-flow1 {
                    animation: flow1 8s ease-in-out infinite;
                }
                .animate-flow2 {
                    animation: flow2 10s ease-in-out infinite;
                }
                .animate-flow3 {
                    animation: flow3 12s ease-in-out infinite;
                }
                .animate-flow4 {
                    animation: flow4 14s ease-in-out infinite;
                }
                .animate-flow5 {
                    animation: flow5 16s ease-in-out infinite;
                }
                .floating-element {
                    will-change: transform;
                }
            `}</style>
        </div>
    );
}

export default Services;