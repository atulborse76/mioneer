import { motion } from 'framer-motion';
import videoAI from '../assets/videoAI.mp4';
import videoBlockchain from '../assets/videoBlockchain.mp4';
import videoAgentics from '../assets/videoConsultancy.mp4';
import videoDevelopment from '../assets/videoDevelopment.mp4';
import videoCloud from '../assets/videoCloud.mp4';
import videoCybersecurity from '../assets/videoAI.mp4';

const services = [
    {
        title: "AI-Powered Solutions",
        description: "Leverage cutting-edge AI technology to enhance your business operations. Our AI solutions automate processes, provide deep insights, and drive growth.",
        features: [
            "Process automation for improved efficiency",
            "Data-driven decision-making",
            "Enhanced customer experiences",
            "Scalable solutions tailored to your needs"
        ],
        video: videoAI,
        gradient: "from-blue-500 to-purple-500"
    },
    {
        title: "Blockchain Integration",
        description: "Implement secure and transparent blockchain solutions with our expertise. We offer comprehensive blockchain services, including smart contracts and decentralized applications.",
        features: [
            "Increased security and transparency",
            "Immutable and tamper-proof records",
            "Streamlined transactions and processes",
            "Customizable smart contracts"
        ],
        video: videoBlockchain,
        gradient: "from-purple-500 to-pink-500"
    },
    {
        title: "AI Agentics Services",
        description: "Build, deploy, and scale intelligent, autonomous agents designed to think, act, and collaborate like humans. Automate complex workflows, optimize decision-making, and enhance customer experiences at machine speed.",
        features: [
            "Autonomous workflow automation",
            "Intelligent decision-making systems",
            "Human-like agent collaboration",
            "Complex process optimization"
        ],
        video: videoAgentics,
        gradient: "from-cyan-500 to-blue-500"
    },
    {
        title: "Custom Software Development",
        description: "Our custom software development services provide tailor-made solutions that perfectly fit your business needs. We specialize in developing high-quality, scalable software.",
        features: [
            "Bespoke software tailored to your requirements",
            "Scalable and flexible solutions",
            "Comprehensive testing and quality assurance",
            "Post-launch support and maintenance"
        ],
        video: videoDevelopment,
        gradient: "from-green-500 to-teal-500"
    },
    {
        title: "Cloud Computing",
        description: "Optimize your infrastructure with our cloud computing services. We offer solutions for cloud migration, management, and optimization.",
        features: [
            "Scalable and flexible cloud solutions",
            "Cost-effective cloud management",
            "Improved data accessibility and collaboration",
            "Enhanced security and compliance"
        ],
        video: videoCloud,
        gradient: "from-orange-500 to-red-500"
    },
    {
        title: "Cybersecurity Solutions",
        description: "Protect your business from cyber threats with our advanced cybersecurity solutions. We provide comprehensive services including threat detection and incident response.",
        features: [
            "Proactive threat detection and monitoring",
            "Rapid incident response and recovery",
            "In-depth vulnerability assessments",
            "Customized security strategies and solutions"
        ],
        video: videoCybersecurity,
        gradient: "from-red-500 to-pink-500"
    },
];

const ServicesPage = () => {
    return (
        <div className='min-h-screen bg-gradient-to-b from-darkBg via-gray-900 to-darkBg pt-32 pb-20'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto'>
                
                {/* Header Section */}
                <motion.div 
                    className='text-center mb-20'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                     <h1 className="text-6xl font-bold text-white mb-6">
                        Our <span className='gradient-text'>Services</span>
                    </h1>
                    <p className='text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed'>
                        Explore our wide range of services tailored to meet your business needs and drive growth through innovative technology solutions.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className='group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 hover:border-brandPrimary transition-all duration-500 overflow-hidden'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            {/* Background Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}></div>
                            
                            {/* Content */}
                            <div className='relative z-10 p-8'>
                                {/* Video */}
                                <div className='relative mb-6 overflow-hidden rounded-2xl'>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 blur-xl`}></div>
                                    <video
                                        src={service.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className='relative w-full h-48 object-cover rounded-2xl border-2 border-gray-700 group-hover:border-brandPrimary transition-all duration-500'
                                    />
                                </div>

                                {/* Title */}
                                <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brandPrimary group-hover:to-brandSecondary group-hover:bg-clip-text transition-all duration-300'>
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className='text-gray-400 mb-6 leading-relaxed'>
                                    {service.description}
                                </p>

                                {/* Features List */}
                                <div className='space-y-3'>
                                    <h4 className='text-sm font-bold text-gray-300 uppercase tracking-wider mb-3'>Key Features:</h4>
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className='flex items-start space-x-3 group/item'>
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`}></div>
                                            <p className='text-sm text-gray-400 group-hover/item:text-gray-300 transition-colors duration-300'>{feature}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Learn More Button */}
                                <div className='mt-8'>
                                    <button className='w-full py-3 px-6 bg-gray-800 hover:bg-gradient-to-r hover:from-brandPrimary hover:to-brandSecondary text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div 
                    className="mt-24"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-16 rounded-3xl border border-gray-700 text-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-brandPrimary/20 to-brandSecondary/20 blur-3xl"></div>
                        <div className="relative z-10">
                            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Transform Your <span className='bg-gradient-to-r from-brandPrimary to-brandSecondary bg-clip-text text-transparent'>Business?</span>
                            </h3>
                            <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                                Let&#39;s discuss how our services can help you achieve your goals and stay ahead of the competition.
                            </p>
                            <a href="/contact" className="inline-block bg-gradient-to-r from-brandPrimary to-brandSecondary text-white py-4 px-10 rounded-full font-bold text-lg hover:scale-105 hover:shadow-lg transition-all duration-300">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>                                                            
        </div>
    );
};
export default ServicesPage;