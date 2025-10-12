import { useState, useEffect, useRef } from 'react';
import { Sparkles, Zap, Shield, ArrowRight, Circle } from 'lucide-react';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import Services from './Services';
import AboutUs from './AboutUs';

// 3D Background Component
const AnimatedBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x0a0e27, 1);
    containerRef.current.appendChild(renderer.domElement);

    // Create sphere geometry for network nodes
    const nodeGeometry = new THREE.SphereGeometry(0.4, 8, 8);
    const nodeMaterial = new THREE.MeshPhongMaterial({
      color: 0xd4af37,
      emissive: 0x6b4423,
      wireframe: false,
      shininess: 100
    });

    // Create network nodes with density gradient
    const nodes = [];
    const nodeCount = 80;
    const nodeGroup = new THREE.Group();

    for (let i = 0; i < nodeCount; i++) {
      const nodeMesh = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
      
      // Gradient density: very dense on right, sparse on left
      const rand = Math.random();
      let posX;
      
      if (rand > 0.7) {
        // Far right - ultra dense (30%)
        posX = (Math.random() * 60) + 70;
      } else if (rand > 0.4) {
        // Right-center - dense (30%)
        posX = (Math.random() * 50) + 30;
      } else if (rand > 0.15) {
        // Center - medium (25%)
        posX = (Math.random() * 40) - 10;
      } else {
        // Left - sparse (15%)
        posX = -(Math.random() * 50) - 5;
      }
      
      nodeMesh.position.set(
        posX,
        (Math.random() - 0.5) * 140,
        (Math.random() - 0.5) * 140
      );

      // Use your color scheme: gold and blue
      if (Math.random() > 0.5) {
        nodeMesh.material.color.setHex(0xd4af37); // Gold
      } else {
        nodeMesh.material.color.setHex(0x4a7c8f); // Blue
      }

      nodeGroup.add(nodeMesh);
      nodes.push({
        mesh: nodeMesh,
        position: nodeMesh.position.clone(),
        originalPos: nodeMesh.position.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04
        )
      });
    }

    scene.add(nodeGroup);

    // Create lines connecting nearby nodes
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.3,
      linewidth: 1
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Lighting
    const light1 = new THREE.PointLight(0xd4af37, 0.8, 350);
    light1.position.set(100, 80, 60);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x4a7c8f, 0.6, 300);
    light2.position.set(-50, -60, 50);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
    scene.add(ambientLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update node positions with very subtle movement
      nodes.forEach((node) => {
        node.position.add(node.velocity);

        // Soft boundary constraints - nodes gently return
        const dx = node.position.x - node.originalPos.x;
        const dy = node.position.y - node.originalPos.y;
        const dz = node.position.z - node.originalPos.z;

        // Apply gentle spring force back to original position
        node.velocity.x -= dx * 0.001 + node.velocity.x * 0.008;
        node.velocity.y -= dy * 0.001 + node.velocity.y * 0.008;
        node.velocity.z -= dz * 0.001 + node.velocity.z * 0.008;

        // Hard boundaries
        if (node.position.x > 140) node.position.x = 140;
        if (node.position.x < -60) node.position.x = -60;
        if (Math.abs(node.position.y) > 75) node.velocity.y *= -0.3;
        if (Math.abs(node.position.z) > 75) node.velocity.z *= -0.3;

        node.mesh.position.copy(node.position);
      });

      // Update connecting lines with density-based connection distance
      const linePositions = [];

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = nodes[i].position.distanceTo(nodes[j].position);
          
          // Connection distance based on position (denser on right)
          const avgX = (nodes[i].position.x + nodes[j].position.x) / 2;
          let connectionDistance;
          
          if (avgX > 50) {
            // Far right - very dense connections
            connectionDistance = 50;
          } else if (avgX > 20) {
            // Right-center - dense connections
            connectionDistance = 45;
          } else if (avgX > -10) {
            // Center - medium connections
            connectionDistance = 38;
          } else {
            // Left - sparse connections
            connectionDistance = 30;
          }
          
          if (dist < connectionDistance) {
            linePositions.push(
              nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
              nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
            );
          }
        }
      }

      lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));

      // Very subtle rotation
      nodeGroup.rotation.x += 0.00003;
      nodeGroup.rotation.y += 0.00006;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = containerRef.current?.clientWidth || window.innerWidth;
      const height = containerRef.current?.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      nodeGeometry.dispose();
      lineMaterial.dispose();
      lineGeometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  const slides = [
    {
      tag: "AI Solutions",
      title: "Empower Your Business with",
      highlight: "Cutting-Edge AI",
      description: "Leverage artificial intelligence to streamline operations, enhance decision-making, and drive unprecedented growth.",
      icon: Sparkles,
    },
    {
      tag: "Consultancy",
      title: "Transform Your Vision into",
      highlight: "Reality",
      description: "From strategy to execution, we guide you through every step of your digital transformation journey.",
      icon: Zap,
    },
    {
      tag: "Blockchain",
      title: "Unleash the Power of",
      highlight: "Blockchain",
      description: "Implement secure, transparent blockchain technologies to enhance security, efficiency, and trust in your business.",
      icon: Shield,
    }
  ];

  const currentData = slides[currentSlide];
  const Icon = currentData.icon;

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <div className='relative overflow-hidden pt-12 min-h-screen flex items-center' style={{ background: 'transparent' }} id='home'>
        
        {/* 3D Background - Network Animation */}
        <AnimatedBackground />

        {/* Main Content */}
        <div className='relative z-10 w-full px-4 lg:px-14 max-w-screen-2xl mx-auto py-12'>
          <div className='text-center space-y-8 max-w-5xl mx-auto'>
            
            {/* Icon with glass card effect */}
            <div className="flex justify-center mb-8 animate-fadeInUp">
              <div 
                className="p-6 border transition-all duration-300 hover:scale-110 group cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderColor: 'rgba(212, 175, 55, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  borderRadius: '0'
                }}
              >
                <Icon className="w-12 h-12" style={{ color: '#d4af37' }} strokeWidth={1.5} />
              </div>
            </div>

            {/* Tag */}
            <div className="flex justify-center animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 border"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderColor: 'rgba(212, 175, 55, 0.2)',
                  borderRadius: '0'
                }}
              >
                <span className="w-2 h-2" style={{ backgroundColor: '#d4af37', animation: 'pulse 2s ease-in-out infinite' }}></span>
                <span className="text-sm font-medium tracking-wide uppercase" style={{ color: '#e4e4e7' }}>{currentData.tag}</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight animate-fadeInUp' style={{ fontFamily: 'Playfair Display, serif', animationDelay: '0.2s' }}>
              <span className="block mb-2 text-white">{currentData.title}</span>
              <span 
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #d4af37 0%, #4a7c8f 50%, #f4d03f 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {currentData.highlight}
              </span>
            </h1>

            {/* Description */}
            <p className='text-lg md:text-xl leading-relaxed max-w-3xl mx-auto animate-fadeInUp' style={{ color: '#6b7280', animationDelay: '0.3s' }}>
              {currentData.description}
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fadeInUp' style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-4 text-base font-semibold transition-all duration-300 flex items-center gap-2 justify-center hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)',
                  color: '#0a0e27',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                  border: 'none',
                  borderRadius: '0'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 25px rgba(212, 175, 55, 0.5)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)'}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button 
                onClick={() => navigate('/services')}
                className='px-8 py-4 text-base font-semibold transition-all duration-300 flex items-center gap-2 justify-center hover:scale-105'
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderColor: 'rgba(212, 175, 55, 0.3)',
                  border: '2px solid',
                  color: '#e4e4e7',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  borderRadius: '0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.6)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                  e.currentTarget.style.color = '#e4e4e7';
                }}
              >
                Learn More
                <Circle className="w-4 h-4" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-3 pt-12">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-500 ${
                    index === currentSlide 
                      ? 'w-12 h-2' 
                      : 'w-2 h-2 hover:opacity-70'
                  }`}
                  style={{
                    background: index === currentSlide 
                      ? 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' 
                      : 'rgba(212, 175, 55, 0.3)',
                    borderRadius: '0'
                  }}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Services />
      <AboutUs />

      <style>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Home;