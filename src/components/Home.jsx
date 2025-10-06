import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Float, Stars } from "@react-three/drei";
import {
  FaRocket,
  FaCloud,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";

const FloatingCard = ({ children, className, delay = 0 }) => (
  <div
    className={`animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

const Home = () => {
  const features = [
    {
      icon: <FaCloud className="text-3xl text-aws-orange" />,
      title: "Cloud Innovation",
      description: "Next-gen cloud solutions",
    },
    {
      icon: <FaGraduationCap className="text-3xl text-mait-blue" />,
      title: "Academic Excellence",
      description: "World-class education",
    },
    {
      icon: <FaRocket className="text-3xl text-purple-500" />,
      title: "Future Ready",
      description: "Tomorrow's technology today",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-purple-900 dark:to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-aws-orange/10 to-transparent animate-gradient"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-aws-orange rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
          <div
            className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Centered Hero Content */}
        <div className="text-center space-y-8 mb-20">
          <FloatingCard className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-aws-orange via-yellow-400 to-orange-500 bg-clip-text text-transparent animate-gradient">
                Cloud-Powered
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Education Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
              Where{" "}
              <span className="text-aws-orange font-semibold">
                Cloud Innovation
              </span>{" "}
              meets{" "}
              <span className="text-blue-400 font-semibold">
                Academic Excellence
              </span>{" "}
              to shape the future of technology.
            </p>
          </FloatingCard>

          <FloatingCard
            delay={0.5}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="group bg-gradient-to-r from-aws-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2">
              Explore Partnership
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              Learn More
            </button>
          </FloatingCard>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <FloatingCard
                key={index}
                delay={1 + index * 0.2}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group text-center"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </FloatingCard>
            ))}
          </div>
        </div>

        {/* 3D Canvas - Floating Clouds Below */}
        <div className="h-96 lg:h-[500px] relative">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Stars
              radius={300}
              depth={60}
              count={1000}
              factor={7}
              saturation={0}
              fade
            />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight
              position={[-10, -10, -5]}
              intensity={0.4}
              color="#ff6b35"
            />

            {/* Floating Clouds */}
            <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.8}>
              <group position={[0, 0, 0]}>
                {/* Main cloud body */}
                <Sphere args={[1.2, 32, 32]} position={[0, 0, 0]}>
                  <meshStandardMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.9}
                    roughness={0.8}
                    metalness={0.1}
                  />
                </Sphere>
                {/* Cloud puffs */}
                <Sphere args={[0.8, 32, 32]} position={[-1, 0.3, 0]}>
                  <meshStandardMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.8}
                    roughness={0.8}
                    metalness={0.1}
                  />
                </Sphere>
                <Sphere args={[0.7, 32, 32]} position={[1, 0.2, 0]}>
                  <meshStandardMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.8}
                    roughness={0.8}
                    metalness={0.1}
                  />
                </Sphere>
                <Sphere args={[0.6, 32, 32]} position={[0.3, 0.8, 0]}>
                  <meshStandardMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.7}
                    roughness={0.8}
                    metalness={0.1}
                  />
                </Sphere>
                <Sphere args={[0.5, 32, 32]} position={[-0.5, 0.6, 0]}>
                  <meshStandardMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.7}
                    roughness={0.8}
                    metalness={0.1}
                  />
                </Sphere>
              </group>
            </Float>

            {/* AWS Orange Cloud */}
            <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.6}>
              <group position={[3.5, 1, -2]} scale={0.8}>
                <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
                  <meshStandardMaterial
                    color="#ff6b35"
                    transparent
                    opacity={0.8}
                    roughness={0.7}
                    metalness={0.2}
                  />
                </Sphere>
                <Sphere args={[0.7, 32, 32]} position={[-0.8, 0.2, 0]}>
                  <meshStandardMaterial
                    color="#ff6b35"
                    transparent
                    opacity={0.7}
                    roughness={0.7}
                    metalness={0.2}
                  />
                </Sphere>
                <Sphere args={[0.6, 32, 32]} position={[0.7, 0.1, 0]}>
                  <meshStandardMaterial
                    color="#ff6b35"
                    transparent
                    opacity={0.7}
                    roughness={0.7}
                    metalness={0.2}
                  />
                </Sphere>
              </group>
            </Float>

            {/* Blue Cloud */}
            <Float speed={1.8} rotationIntensity={0.1} floatIntensity={0.9}>
              <group position={[-3, -1, 1]} scale={0.7}>
                <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
                  <meshStandardMaterial
                    color="#3b82f6"
                    transparent
                    opacity={0.8}
                    roughness={0.7}
                    metalness={0.2}
                  />
                </Sphere>
                <Sphere args={[0.7, 32, 32]} position={[-0.8, 0.2, 0]}>
                  <meshStandardMaterial
                    color="#3b82f6"
                    transparent
                    opacity={0.7}
                    roughness={0.7}
                    metalness={0.2}
                  />
                </Sphere>
                <Sphere args={[0.5, 32, 32]} position={[0.6, 0.3, 0]}>
                  <meshStandardMaterial
                    color="#3b82f6"
                    transparent
                    opacity={0.7}
                    roughness={0.7}
                    metalness={0.2}
                  />
                </Sphere>
              </group>
            </Float>

            {/* Purple Cloud */}
            <Float speed={1.4} rotationIntensity={0.1} floatIntensity={0.7}>
              <group position={[-2.5, 2, -1.5]} scale={0.6}>
                <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
                  <meshStandardMaterial
                    color="#8b5cf6"
                    transparent
                    opacity={0.8}
                    roughness={0.7}
                    metalness={0.2}
                  />
                </Sphere>
                <Sphere args={[0.6, 32, 32]} position={[-0.7, 0.2, 0]}>
                  <meshStandardMaterial
                    color="#8b5cf6"
                    transparent
                    opacity={0.7}
                    roughness={0.7}
                    metalness={0.2}
                  />
                </Sphere>
                <Sphere args={[0.5, 32, 32]} position={[0.5, 0.1, 0]}>
                  <meshStandardMaterial
                    color="#8b5cf6"
                    transparent
                    opacity={0.7}
                    roughness={0.7}
                    metalness={0.2}
                  />
                </Sphere>
              </group>
            </Float>

            {/* Small Floating Cloud */}
            <Float speed={2} rotationIntensity={0.1} floatIntensity={1}>
              <group position={[2, -2, 1]} scale={0.5}>
                <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
                  <meshStandardMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.8}
                    roughness={0.8}
                    metalness={0.1}
                  />
                </Sphere>
                <Sphere args={[0.6, 32, 32]} position={[-0.7, 0.2, 0]}>
                  <meshStandardMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.7}
                    roughness={0.8}
                    metalness={0.1}
                  />
                </Sphere>
                <Sphere args={[0.5, 32, 32]} position={[0.5, 0.1, 0]}>
                  <meshStandardMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.7}
                    roughness={0.8}
                    metalness={0.1}
                  />
                </Sphere>
              </group>
            </Float>
          </Canvas>

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 animate-bounce-slow">
            <div className="w-4 h-4 bg-aws-orange rounded-full"></div>
          </div>
          <div
            className="absolute bottom-20 right-10 animate-bounce-slow"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          </div>
          <div
            className="absolute top-1/2 left-5 animate-bounce-slow"
            style={{ animationDelay: "2s" }}
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          </div>
        </div>

        {/* Stats Section */}
        <FloatingCard
          delay={2}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "200+", label: "Cloud Services" },
            { number: "5000+", label: "Students" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <div className="text-3xl md:text-4xl font-black text-aws-orange mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </FloatingCard>
      </div>
    </div>
  );
};

export default Home;
