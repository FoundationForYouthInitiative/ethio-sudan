import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ArrowRight, Mail, Phone, Globe, Linkedin, Twitter, Facebook, Users, TreePine, Lightbulb, Building, HandHeart, TrendingUp, Award, Target, Heart, X } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <img src="/logo.png" alt="FYI Logo" className="h-30 w-auto" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-fyi-blue transition-colors">Home</a>
              <a href="#approach" className="text-gray-700 hover:text-fyi-blue transition-colors">Our Approach</a>
              <a href="#impact" className="text-gray-700 hover:text-fyi-blue transition-colors">Our Impact</a>
              <a href="#partners" className="text-gray-700 hover:text-fyi-blue transition-colors">Partners</a>
              <a href="#contact" className="text-gray-700 hover:text-fyi-blue transition-colors">Contact</a>
            </div>
            <button className="bg-fyi-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />
      
      {/* Challenge Section */}
      <ChallengeSection />
      
      {/* Solution Section */}
      <SolutionSection />
      
      {/* Impact Section */}
      <ImpactSection />
      
      {/* Success Stories */}
      <SuccessStoriesSection />
      
      {/* Data Snapshot */}
      <DataSnapshotSection />
      
      {/* Call to Action */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-community-innovation.jpg" 
          alt="Community Innovation in Action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Building Resilient Futures in the Horn of Africa
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            The Foundation for Youth Initiative (FYI) empowers youth, women, and smallholder farmers in Ethiopia and South Sudan to build climate-resilient businesses and peaceful communities from the ground up.
          </p>
          <p className="text-lg mb-12 font-light italic">
            Transforming potential into prosperity through entrepreneurship, innovation, and local leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-fyi-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Challenge Section Component
function ChallengeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const challenges = [
    {
      icon: TrendingUp,
      title: "Climate Vulnerability",
      stat: "80%",
      description: "Climate shocks threaten the livelihoods of 80% of the population, demanding immediate adaptation strategies."
    },
    {
      icon: Users,
      title: "Youth Demographic",
      stat: "70%",
      description: "Over 70% of the population is under 30, representing an unprecedented opportunity for innovation and growth."
    },
    {
      icon: HandHeart,
      title: "Beyond Traditional Aid",
      stat: "Decades",
      description: "Decades of conventional aid approaches have created dependency cycles rather than sustainable, locally-driven solutions."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            A Region at a Crossroads
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The Ethiopia-South Sudan borderlands represent a region of extraordinary potential constrained by cycles of climate uncertainty, economic instability, and limited opportunity. We see what others miss: a young, resilient population ready to lead their own transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-fyi-blue/10 rounded-full mb-6 mx-auto">
                <challenge.icon className="h-8 w-8 text-fyi-blue" />
              </div>
              <div className="text-3xl font-bold text-fyi-blue mb-2 text-center">{challenge.stat}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{challenge.title}</h3>
              <p className="text-gray-600 text-center">{challenge.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xl text-gray-700 font-medium italic">
            The time for a new approach is now. The foundation for lasting change lies not in external assistance, but in unleashing local potential.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Solution Section Component
function SolutionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const approaches = [
    "Local Leadership First: Every initiative is designed, led, and implemented by community members",
    "Market-Driven Solutions: We focus on economically viable enterprises that generate sustainable income",
    "Ecosystem Building: Rather than isolated projects, we create interconnected networks of support and opportunity",
    "Climate-Smart Innovation: All programs integrate climate resilience and environmental sustainability",
    "Cross-Border Cooperation: We bridge communities across Ethiopia and South Sudan, turning borders into bridges"
  ];

  const differentiators = [
    { icon: Award, text: "94,000 lives transformed through sustainable enterprise development" },
    { icon: Users, text: "Led by regional teams with deep community knowledge" },
    { icon: TrendingUp, text: "Systems designed for rapid, responsible expansion" },
    { icon: Target, text: "Rigorous impact measurement with transparent reporting" }
  ];

  return (
    <section id="approach" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            A New Path Forward: From Aid to Enterprise
          </h2>
          <p className="text-xl text-fyi-blue font-semibold mb-8">
            We believe in investment, not handouts. Our entrepreneurial model provides youth, women, and farmers with the capital, skills, and market access to build their own futures.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
            <ul className="space-y-4">
              {approaches.map((approach, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-fyi-green rounded-full mt-3 mr-4"></div>
                  <p className="text-gray-600 leading-relaxed">{approach}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Differentiators</h3>
            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-fyi-green/10 rounded-full flex items-center justify-center mr-4">
                    <item.icon className="h-5 w-5 text-fyi-green" />
                  </div>
                  <p className="text-gray-600 leading-relaxed pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Impact Section Component (Pillars)
function ImpactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pillars = [
    {
      id: 1,
      icon: TreePine,
      title: "Climate-Smart Agriculture",
      subtitle: "Empowering farmers to thrive in a changing climate",
      description: "Transform agricultural practices through drought-resistant crops, efficient irrigation, and sustainable farming techniques. Our programs increase yields by 40% while building long-term resilience against climate variability.",
      outcomes: "Enhanced food security, increased farmer incomes, improved soil health",
      image: "/images/climate-smart-agriculture.jpg"
    },
    {
      id: 2,
      icon: TreePine,
      title: "Ecological Restoration",
      subtitle: "Rebuilding landscapes, restoring livelihoods",
      description: "Community-led reforestation and land restoration projects that combat desertification while creating employment opportunities. Our restoration initiatives have planted over 2 million trees and restored 15,000 hectares of degraded land.",
      outcomes: "Carbon sequestration, watershed protection, green jobs creation",
      image: "/images/ecological-restoration.jpg"
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Renewable Energy Access",
      subtitle: "Powering progress with clean energy solutions",
      description: "Solar-powered systems bring reliable electricity to rural communities, enabling healthcare delivery, education advancement, and small business development. Clean energy access transforms entire communities.",
      outcomes: "Healthcare improvement, educational advancement, business expansion",
      image: "/images/renewable-energy-access.jpg"
    },
    {
      id: 4,
      icon: Building,
      title: "Green Enterprise Development",
      subtitle: "Building businesses that build futures",
      description: "Support entrepreneurs in developing profitable enterprises from waste management to sustainable manufacturing. Our business incubation programs have a 85% success rate, creating lasting employment and economic growth.",
      outcomes: "Job creation, income generation, market development",
      image: "/images/green-enterprise-development.jpg"
    },
    {
      id: 5,
      icon: Heart,
      title: "Peace & Resilience",
      subtitle: "Fostering cooperation across communities",
      description: "Cross-border initiatives that build bridges between Ethiopian and South Sudanese communities through shared economic opportunities and collaborative problem-solving.",
      outcomes: "Reduced conflict, enhanced cooperation, shared prosperity",
      image: "/images/peace-resilience.JPG"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pillars of Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We create lasting change by focusing on interconnected, high-impact sectors that address root causes while building sustainable prosperity.
          </p>
        </motion.div>

        <div className="space-y-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
            >
              <div className="lg:w-1/2">
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-fyi-blue/10 rounded-full flex items-center justify-center mr-4">
                    <pillar.icon className="h-6 w-6 text-fyi-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{pillar.title}</h3>
                    <p className="text-fyi-blue font-semibold">{pillar.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{pillar.description}</p>
                <div className="bg-fyi-green/5 p-4 rounded-lg border-l-4 border-fyi-green">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Key Outcomes:</p>
                  <p className="text-gray-600 italic">{pillar.outcomes}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Success Stories Section
function SuccessStoriesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stories = [
    {
      title: "Mangalla Women's Development Association",
      subtitle: "Transforming Groundnuts into Economic Independence",
      description: "The women of Mangalla have revolutionized their local economy by establishing a groundnut paste production cooperative. What began as a small group of 12 women has grown into a thriving enterprise serving regional markets.",
      impact: [
        "150 women members generating consistent income",
        "300% increase in household earnings",
        "Regional market expansion across 3 states",
        "Skills training provided to 500+ community members"
      ],
      quote: "We are no longer waiting for opportunities—we are creating them ourselves.",
      author: "Sarah Nyakuma, Cooperative Leader",
      image: "/images/mangalla-women-success.jpg"
    },
    {
      title: "Shalom Cooperative's Sustainable Agriculture Success",
      subtitle: "From Subsistence to Commercial Success",
      description: "The Shalom Cooperative demonstrates how climate-smart agriculture creates prosperity. Their integrated farming approach combines crop production with livestock management, generating multiple income streams while rebuilding soil health.",
      impact: [
        "45 member households with diversified income",
        "60% increase in agricultural productivity",
        "Climate-resilient farming practices adopted",
        "12 permanent jobs created in processing and marketing"
      ],
      quote: "Our land is more productive than ever, and our children see farming as a path to prosperity.",
      author: "James Monyluak, Cooperative Chairman",
      image: "/images/shalom-cooperative-success.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Stories from the Field
          </h2>
        </motion.div>

        <div className="space-y-20">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
            >
              <div className="lg:w-1/2">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.title}</h3>
                <p className="text-fyi-blue font-semibold mb-4">{story.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{story.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Impact Achieved:</h4>
                  <ul className="space-y-2">
                    {story.impact.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-fyi-green rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <blockquote className="bg-fyi-blue/5 p-6 rounded-lg border-l-4 border-fyi-blue">
                  <p className="text-gray-700 italic mb-2">"{story.quote}"</p>
                  <footer className="text-sm font-semibold text-fyi-blue">— {story.author}</footer>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Data Snapshot Section
function DataSnapshotSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: "94,000", label: "Lives directly impacted through our integrated programs" },
    { number: "10,373", label: "People experiencing measurable income increases" },
    { number: "115", label: "Sustainable jobs created across all program areas" },
    { number: "24", label: "Local enterprises supported and scaled" },
    { number: "2.1M", label: "Trees planted through restoration initiatives" },
    { number: "15,000", label: "Hectares of degraded land restored" },
    { number: "85%", label: "Business success rate for supported enterprises" },
    { number: "$2.4M", label: "Additional income generated in target communities" }
  ];

  return (
    <section className="py-20 bg-fyi-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Our Impact in Numbers (2023)
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-fyi-gold">
                {stat.number}
              </div>
              <div className="text-lg leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Call to Action Section
function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    message: ''
  });

  const opportunities = [
    { amount: "$50,000", description: "supports 100 youth entrepreneurs for one year" },
    { amount: "$150,000", description: "establishes a complete climate-smart agriculture program" },
    { amount: "$500,000", description: "launches cross-border peace and enterprise initiative" },
    { amount: "$1,000,000", description: "creates a regional hub for innovation and sustainability" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent('Partnership Inquiry from FYI Website');
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Organization/Company: ${formData.organization}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:solomonhussien@yahoo.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Reset form and close modal
    setFormData({ fullName: '', organization: '', email: '', message: '' });
    setShowForm(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/cta-background.jpg" 
          alt="Ethiopia-South Sudan border landscape"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Us in Building a Thriving Future
          </h2>
          <h3 className="text-2xl font-semibold text-fyi-blue mb-8">
            Your Partnership Can Transform a Region
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The Horn of Africa stands at a critical juncture. With your partnership, we can scale proven solutions that transform lives, build resilient communities, and create lasting peace through prosperity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6">We are seeking strategic partners to:</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-fyi-green rounded-full mt-3 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-900">Scale Impact:</span>
                  <span className="text-gray-600 ml-2">Expand successful programs to reach 250,000 people by 2027</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-fyi-green rounded-full mt-3 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-900">Innovation Investment:</span>
                  <span className="text-gray-600 ml-2">Develop cutting-edge climate adaptation technologies</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-fyi-green rounded-full mt-3 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-900">Capacity Building:</span>
                  <span className="text-gray-600 ml-2">Train the next generation of local leaders and entrepreneurs</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-fyi-green rounded-full mt-3 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-900">Market Development:</span>
                  <span className="text-gray-600 ml-2">Connect local enterprises to regional and international markets</span>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Investment Opportunities:</h4>
            <div className="space-y-4 mb-8">
              {opportunities.map((opp, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-fyi-gold">
                  <div className="text-2xl font-bold text-fyi-blue mb-2">{opp.amount}</div>
                  <div className="text-gray-600">{opp.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xl font-semibold text-gray-900 mb-8">
            Invest in local leaders. Invest in sustainable enterprise. Invest in peace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => setShowForm(true)}
              className="bg-fyi-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Become a Partner
            </button>
            <button className="bg-fyi-green hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Download Our Impact Report
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h5 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h5>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 mr-3 text-fyi-blue" />
                <span>partnerships@fyi-africa.org</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 mr-3 text-fyi-blue" />
                <span>+251 911 391 731 | +251 913 278 065</span>
              </div>
              <div className="flex items-center justify-center">
                <Globe className="h-5 w-5 mr-3 text-fyi-blue" />
                <span>www.fyi-africa.org</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Partnership Inquiry</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fyi-blue focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization/Company
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fyi-blue focus:border-transparent"
                    placeholder="Your organization or company"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fyi-blue focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fyi-blue focus:border-transparent resize-none"
                    placeholder="Please describe your partnership interest..."
                  ></textarea>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-fyi-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

// Footer Component
function Footer() {
  const navLinks = [
    "Home", "Our Approach", "Our Impact", "Partners", "Contact", "Resources"
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <img src="/logo.png" alt="FYI Logo" className="h-36 w-auto mb-6 brightness-0 invert" />
            <p className="text-gray-300 leading-relaxed mb-6">
              Building resilient futures through youth empowerment, sustainable enterprise, and cross-border cooperation in the Horn of Africa.
            </p>
            <p className="text-sm text-gray-400">
              Foundation for Youth Initiative (FYI) is a registered local organization in Ethiopia (Reg. No. 6860) and South Sudan. All donations are tax-deductible where applicable.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Follow Us</h3>
            
            {/* Contact Information */}
            <div className="mb-6 space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-fyi-blue" />
                <span>+251 911 391 731</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-fyi-blue" />
                <span>+251 913 278 065</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-fyi-blue" />
                <span>partnerships@fyi-africa.org</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mb-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-1 text-sm text-gray-400">
              <p>LinkedIn: /company/foundation-youth-initiative</p>
              <p>Twitter/X: @FYI_Africa</p>
              <p>Facebook: /FoundationYouthInitiative</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © 2024 Foundation for Youth Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;
