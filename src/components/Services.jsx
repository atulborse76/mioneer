import React, { useEffect } from 'react';

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
          description: "Leverage cutting-edge AI technology to enhance your business operations, from automating processes to improving decision-making. Our AI solutions are designed to provide deep insights, improve efficiency, and drive growth.",
          icon: "🤖",
        },
        {
          title: "Blockchain Integration",
          description: "Implement secure and transparent blockchain solutions to build trust and streamline your business processes. We offer comprehensive blockchain services, including smart contract development and decentralized applications.",
          icon: "🔗",
        },
        {
          title: "Tech Consultancy",
          description: "Get expert guidance on the best technological strategies to take your business to the next level. Our consultants provide tailored advice on technology implementation, digital transformation, and innovation strategies.",
          icon: "💼",
        },
        {
          title: "Custom Software Development",
          description: "We provide tailor-made software solutions that perfectly fit your business needs and objectives. Whether you need a new application or enhancements to an existing system, our development team delivers high-quality and scalable software.",
          icon: "💻",
        },
        {
          title: "Cloud Computing",
          description: "Optimize your infrastructure with scalable cloud solutions, ensuring flexibility, efficiency, and security. Our cloud services include cloud migration, management, and optimization to help your business leverage the benefits of cloud technology.",
          icon: "☁️",
        },
        {
          title: "Cybersecurity Solutions",
          description: "Protect your business from cyber threats with advanced security measures and risk management strategies. We offer comprehensive cybersecurity services including threat detection, incident response, and vulnerability assessments.",
          icon: "🛡️",
        },
    ];

    return (
        <div className='relative bg-white py-16' id='services'>
            {/* Floating Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0">
                    <div className="absolute top-1/6 left-1/8 transform -translate-y-1/2 floating-element animate-flow1">
                        <svg width="200" height="200" fill="none" stroke="currentColor" className="text-blue-200 opacity-50" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" strokeWidth="4"/>
                        </svg>
                    </div>
                    <div className="absolute top-1/5 right-1/4 transform -translate-y-1/2 floating-element animate-flow2">
                        <svg width="150" height="150" fill="none" stroke="currentColor" className="text-green-200 opacity-50" viewBox="0 0 24 24">
                            <rect x="4" y="4" width="16" height="16" strokeWidth="4"/>
                        </svg>
                    </div>
                    <div className="absolute bottom-1/5 left-1/4 transform -translate-x-1/2 floating-element animate-flow3">
                        <svg width="100" height="100" fill="none" stroke="currentColor" className="text-purple-200 opacity-50" viewBox="0 0 24 24">
                            <ellipse cx="12" cy="12" rx="10" ry="5" strokeWidth="4"/>
                        </svg>
                    </div>
                    <div className="absolute top-1/3 left-2/5 transform -translate-x-1/2 floating-element animate-flow4">
                        <svg width="120" height="120" fill="none" stroke="currentColor" className="text-red-200 opacity-50" viewBox="0 0 24 24">
                            <polygon points="12,2 22,21 2,21" strokeWidth="4"/>
                        </svg>
                    </div>
                    <div className="absolute bottom-1/4 right-1/3 transform -translate-y-1/2 floating-element animate-flow5">
                        <svg width="180" height="180" fill="none" stroke="currentColor" className="text-yellow-200 opacity-50" viewBox="0 0 24 24">
                            <path d="M6 2L2 6L6 10L10 6L6 2Z" strokeWidth="4"/>
                        </svg>
                    </div>
                    <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 floating-element animate-flow6">
                        <svg width="140" height="140" fill="none" stroke="currentColor" className="text-teal-200 opacity-50" viewBox="0 0 24 24">
                            <line x1="4" y1="4" x2="20" y2="20" strokeWidth="4"/>
                        </svg>
                    </div>
                    <div className="absolute top-1/2 left-1/6 transform -translate-x-1/2 floating-element animate-flow7">
                        <svg width="160" height="160" fill="none" stroke="currentColor" className="text-indigo-200 opacity-50" viewBox="0 0 24 24">
                            <path d="M12 2L2 22H22L12 2Z" strokeWidth="4"/>
                        </svg>
                    </div>
                    <div className="absolute bottom-1/3 right-1/4 transform -translate-y-1/2 floating-element animate-flow8">
                        <svg width="140" height="140" fill="none" stroke="currentColor" className="text-pink-200 opacity-50" viewBox="0 0 24 24">
                            <polygon points="12,2 22,22 2,22" strokeWidth="4"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className='md:px-14 px-4 max-w-screen-2xl mx-auto relative z-10'>
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-bold text-neautralDGrey'>
                        Our Services
                    </h2>
                    <p className='text-lg text-gray-600'>
                        We offer a wide range of services to meet your business needs.
                    </p>
                </div>

                <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='text-center p-6 bg-neautralSilver rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105'
                        >
                            <div className='text-5xl mb-4'>{service.icon}</div>
                            <h3 className='text-2xl font-semibold text-neautralDGrey mb-2'>
                                {service.title}
                            </h3>
                            <p className='text-gray-600'>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
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
                @keyframes flow6 {
                    0% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(-30px) rotate(-20deg); }
                    100% { transform: translateY(0) rotate(0); }
                }
                @keyframes flow7 {
                    0% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(-80px) rotate(80deg); }
                    100% { transform: translateY(0) rotate(0); }
                }
                @keyframes flow8 {
                    0% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(40px) rotate(-40deg); }
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
                .animate-flow6 {
                    animation: flow6 18s ease-in-out infinite;
                }
                .animate-flow7 {
                    animation: flow7 20s ease-in-out infinite;
                }
                .animate-flow8 {
                    animation: flow8 22s ease-in-out infinite;
                }
                .floating-element {
                    will-change: transform;
                }
            `}</style>
        </div>
    );
}

export default Services;
