import React from 'react';
import videoAI from '../assets/videoAI.mp4';
import videoBlockchain from '../assets/videoBlockchain.mp4';
import videoConsultancy from '../assets/videoConsultancy.mp4';
import videoDevelopment from '../assets/videoDevelopment.mp4';
import videoCloud from '../assets/videoCloud.mp4';
import videoCybersecurity from '../assets/videoAI.mp4';

const services = [
    {
        title: "AI-Powered Solutions",
        description: `
            Leverage cutting-edge AI technology to enhance your business operations. Our AI solutions automate processes, provide deep insights, and drive growth. We utilize advanced machine learning algorithms and data analytics to help you make informed decisions, improve operational efficiency, and stay ahead of the competition.
            \nKey benefits include:
            - Process automation for improved efficiency
            - Data-driven decision-making
            - Enhanced customer experiences
            - Scalable solutions tailored to your needs
        `,
        video: videoAI,
    },
    {
        title: "Blockchain Integration",
        description: `
            Implement secure and transparent blockchain solutions with our expertise. We offer comprehensive blockchain services, including smart contracts and decentralized applications. Our solutions ensure data integrity, enhance transparency, and foster trust across various business processes.
            \nKey advantages are:
            - Increased security and transparency
            - Immutable and tamper-proof records
            - Streamlined transactions and processes
            - Customizable smart contracts
        `,
        video: videoBlockchain,
    },
    {
        title: "Tech Consultancy",
        description: `
            Get expert guidance on technological strategies with our tech consultancy services. We provide tailored advice on technology implementation, digital transformation, and innovation. Our consultants work closely with you to understand your business goals and challenges, and offer strategic solutions to optimize your tech infrastructure.
            \nKey features include:
            - In-depth technology assessments
            - Strategic planning and roadmap development
            - Expert recommendations for digital transformation
            - Ongoing support and technology management
        `,
        video: videoConsultancy,
    },
    {
        title: "Custom Software Development",
        description: `
            Our custom software development services provide tailor-made solutions that perfectly fit your business needs. We specialize in developing high-quality, scalable software whether you need new applications or enhancements to existing systems. Our development process includes thorough requirements analysis, iterative development, and rigorous testing to ensure successful outcomes.
            \nBenefits include:
            - Bespoke software tailored to your requirements
            - Scalable and flexible solutions
            - Comprehensive testing and quality assurance
            - Post-launch support and maintenance
        `,
        video: videoDevelopment,
    },
    {
        title: "Cloud Computing",
        description: `
            Optimize your infrastructure with our cloud computing services. We offer solutions for cloud migration, management, and optimization to help you leverage the benefits of cloud technology. Our team ensures seamless transitions to the cloud, enhances your operational agility, and helps you manage costs effectively.
            \nKey benefits are:
            - Scalable and flexible cloud solutions
            - Cost-effective cloud management
            - Improved data accessibility and collaboration
            - Enhanced security and compliance
        `,
        video: videoCloud,
    },
    {
        title: "Cybersecurity Solutions",
        description: `
            Protect your business from cyber threats with our advanced cybersecurity solutions. We provide comprehensive services including threat detection, incident response, and vulnerability assessments to safeguard your operations. Our approach helps mitigate risks, respond to incidents promptly, and ensure your data remains secure.
            \nKey features include:
            - Proactive threat detection and monitoring
            - Rapid incident response and recovery
            - In-depth vulnerability assessments
            - Customized security strategies and solutions
        `,
        video: videoCybersecurity,
    },
];

const ServicesPage = () => {
    return (
        <div className='relative bg-white py-16' id='services'>
            <div className='md:px-14 px-4 max-w-screen-2xl mx-auto relative z-10'>
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-bold text-neutral-800 animate__animated animate__fadeIn'>
                        Our Services
                    </h2>
                    <p className='text-lg text-gray-600 mt-4 animate__animated animate__fadeIn animate__delay-1s'>
                        Explore our wide range of services tailored to meet your business needs and drive growth.
                    </p>
                </div>

                <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='text-center p-6 bg-neutral-50 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 animate__animated animate__fadeIn animate__delay-2s'
                            style={{ minHeight: '520px' }}
                        >
                            <div className='relative'>
                                <video
                                    src={service.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className='w-full h-40 object-cover rounded-lg shadow-md'
                                />
                            </div>
                            <h3 className='text-2xl font-semibold text-neutral-800 mt-6 mb-4'>
                                {service.title}
                            </h3>
                            <p className='text-gray-600 whitespace-pre-line'>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .floating-element {
                    will-change: transform;
                }
                .animate-flow {
                    animation: flow1 8s ease-in-out infinite alternate;
                }
                @keyframes flow1 {
                    0% { transform: translateY(0) rotate(0); }
                    100% { transform: translateY(-40px) rotate(15deg); }
                }
            `}</style>
        </div>
    );
};

export default ServicesPage;
