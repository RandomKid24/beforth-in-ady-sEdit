import { useEffect, useState, useRef } from 'react';
import { Users, BarChart3, Shield, Play, ArrowRight, Star, Zap, Target, Award, Globe, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { MobileMenu } from '../components/ui/mobile-menu';
import { ThemeProvider } from '../components/ui/theme-provider';
import { ServiceModal } from '../components/ui/service-modal';
import { Logo } from '../components/ui/logo';
import { NavLink } from '../components/ui/nav-link';
import { Footer } from '../components/ui/footer';
import { Typewriter } from '../components/ui/typewriter';
import { PageTransition } from '../components/ui/page-transition';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const navItems = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "About", link: "/about" },
  { name: "Team", link: "/team" },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" },
];

const services = [
  {
    id: 'hrms-implementation',
    title: "HRMS Implementation",
    description: "Comprehensive HRMS solution with extensive HR features for complete workforce management, like our implementation for Aureole Group.",
    icon: <Users className="h-8 w-8" />,
    className: "md:col-span-2",
    demoUrl: "https://hrms.aureolegroup.com/login",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-50/50 to-indigo-100/50 dark:from-blue-950/30 dark:to-indigo-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10"></div>
        <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-2 left-4 w-12 h-12 bg-indigo-500/20 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Users className="w-8 h-8 text-blue-500/40" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>
    ),
    features: ["Employee Records Management", "Attendance & Leave Tracking", "Payroll Processing", "Performance Management", "Recruitment & Onboarding", "Expense Management"],
    benefits: ["Streamline HR operations", "Automated compliance", "Real-time insights"],
    process: ["Requirements Analysis", "Custom Configuration", "Data Migration", "User Training", "Go-Live Support"]
  },
  {
    id: '4form-crm',
    title: "4form CRM",
    description: "Simple and effective CRM with mass email capabilities and built-in form/data collection support.",
    icon: <BarChart3 className="h-8 w-8" />,
    demoUrl: "https://4form.beforth.in/",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-50/50 to-green-100/50 dark:from-emerald-950/30 dark:to-green-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-600/10"></div>
        <div className="absolute top-3 right-6 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-2 w-14 h-14 bg-green-500/20 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <BarChart3 className="w-8 h-8 text-emerald-500/40" />
        </div>
      </div>
    ),
    features: ["Lead & Contact Management", "Mass Email Campaigns", "Built-in Form Builder", "Data Collection & Analytics", "Customer Pipeline Tracking", "Email Integration"],
    benefits: ["Simple & intuitive interface", "Powerful mass email features", "Easy data collection"],
    process: ["Account Setup", "Form Configuration", "Email Template Design", "Team Onboarding", "Campaign Launch"]
  }
];

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast Implementation",
    description: "Get your HRMS and CRM up and running in weeks, not months, with our proven implementation methodology."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise-Grade Security",
    description: "Bank-level security with data encryption, access controls, and compliance with international standards."
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Customized Solutions",
    description: "Tailored to your business needs with custom workflows, integrations, and reporting capabilities."
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Expert Support",
    description: "24/7 support from our experts who understand your business and technical requirements."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Scalable Architecture",
    description: "Grows with your business from startup to enterprise with cloud and on-premise deployment options."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Quick ROI",
    description: "See returns within 3-6 months with improved efficiency, reduced costs, and better decision-making."
  }
];

const approach = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Startup-Focused",
    description: "We understand startup challenges and provide cost-effective solutions that scale with your growth."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Rapid Deployment",
    description: "Get up and running quickly with our streamlined implementation process designed for fast-moving startups."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Future-Proof",
    description: "Modern, scalable architecture ensuring long-term flexibility and avoiding vendor lock-in."
  }
];

const stats = [
  { number: 2, suffix: "", label: "Live Products", color: "text-blue-600" },
  { number: 24, suffix: "/7", label: "Support Available", color: "text-green-600" },
  { number: 2025, suffix: "", label: "Founded", color: "text-purple-600" },
  { number: 100, suffix: "%", label: "Client Focused", color: "text-orange-600" }
];

const behindTheScenes = [
  { text: "Countless cups of chai fueling late-night brainstorming sessions" },
  { text: "Quick meetings that turned into breakthrough solutions" },
  { text: "'Just one more thing' moments that changed everything" },
  { text: "Lines of code written at 2 AM, powered by passion" },
  { text: "'This is impossible' moments we proved wrong" },
  { text: "Slack messages and every emoji that made it worth it" },
  { text: "Demo versions refined until we got it perfect" },
  { text: "Endless dedication to making your business better" }
];

const processSteps = [
  {
    number: "01",
    title: "We analyze your needs",
    description: "Deep dive into your business processes, challenges, and goals. We don't just implement—we understand your unique requirements first.",
    icon: <Target className="h-8 w-8" />
  },
  {
    number: "02",
    title: "We design & customize",
    description: "Tailored HRMS and CRM solutions built specifically for your workflows, with custom fields, reports, and integrations.",
    icon: <Zap className="h-8 w-8" />
  },
  {
    number: "03",
    title: "We deliver & support",
    description: "Smooth implementation with comprehensive training and 24/7 ongoing support. We're your partners in growth, not just vendors.",
    icon: <Award className="h-8 w-8" />
  }
];

function HomePage() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  // Animated Counter Hook
  const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const countRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.3 }
      );

      if (countRef.current) {
        observer.observe(countRef.current);
      }

      return () => {
        if (countRef.current) {
          observer.unobserve(countRef.current);
        }
      };
    }, [isVisible]);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return { count, countRef };
  };

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  useEffect(() => {
    (function(c, l, a, r, i) {
      let t: HTMLScriptElement;
      let y: HTMLElement;
      (c as any)[a] = (c as any)[a] || function () {
        ((c as any)[a].q = (c as any)[a].q || []).push(arguments);
      };
      t = l.createElement(r) as HTMLScriptElement;
      t.async = true;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0] as HTMLElement;
      y.parentNode!.insertBefore(t, y);
    })(window, document, "clarity", "script", "sdaak99ru3");
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ToastContainer position="top-right" autoClose={3000} />
      <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div className="flex items-center" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <Logo />
                <span className="text-xl font-semibold text-foreground">Beforth</span>
              </motion.div>
              
              <nav className="hidden md:flex space-x-8">
                {navItems.map((item, index) => (
                  <NavLink 
                    key={item.name} 
                    to={item.link}
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
              
              <div className="hidden md:flex items-center space-x-4">
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                  <Button size="sm" asChild>
                    <a href="/contact">Get Started</a>
                  </Button>
                </motion.div>
              </div>

              <MobileMenu navItems={navItems} />
            </div>
          </div>
        </header>

        {/* Hero Section - Enhanced Typography */}
        <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 bg-gradient-to-br from-stone-50 via-blue-50/20 to-purple-50/10 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Badge/Tag */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 text-sm font-medium text-blue-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Star className="w-4 h-4" fill="currentColor" />
              Live Products • Ready to Use
            </motion.div>

            <motion.div 
              className="mb-8 md:mb-10"
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-foreground leading-none tracking-tight">
                Transform
              </h1>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tight mt-2">
                <Typewriter 
                  words={['your business.', 'your workflow.', 'your future.', 'your success.']}
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                />
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed px-4" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Powerful open-source solutions: HRMS for complete workforce management and 4form CRM for simple, effective customer engagement with mass email capabilities.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16 md:mb-24 px-4" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl" asChild>
                <a href="/contact">Get Started</a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="https://4form.beforth.in/" target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4 mr-2" />
                  Try CRM Demo
                </a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="relative px-4 max-w-5xl mx-auto" 
              initial={{ opacity: 0, y: 40 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.6 }}
            >
              {/* Image Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-50"></div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Business professionals working with ERP systems" 
                  className="w-full rounded-2xl shadow-2xl border-4 border-white" 
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Animated Stats Section */}
        <section className="py-12 md:py-16 bg-stone-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center">
              {stats.map((stat, index) => {
                const { count, countRef } = useCountUp(stat.number);
                return (
                  <motion.div 
                    key={stat.label} 
                    ref={countRef}
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: index * 0.1 }} 
                    viewport={{ once: true }}
                  >
                    <div className={`text-4xl md:text-6xl font-bold mb-3 ${stat.color}`}>
                      {count}{stat.suffix}
                    </div>
                    <div className="text-sm md:text-base font-medium text-muted-foreground">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6 md:mb-8">
                Why choose <span className="font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Beforth?</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We deliver exceptional value through our expertise, proven methodology, and commitment to your success.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-16 md:py-20 bg-amber-50/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6 md:mb-8">
                Our <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">products.</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Live, production-ready solutions for modern businesses.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full p-8 hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/40 bg-gradient-to-br from-white via-indigo-50/40 to-blue-50/30">
                    <div className="text-center">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary mx-auto w-fit mb-6 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
                      <p className="text-muted-foreground text-base leading-relaxed mb-6">{service.description}</p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button 
                          variant="default" 
                          size="sm"
                          className="w-full sm:w-auto"
                          asChild
                        >
                          <a href={service.demoUrl} target="_blank" rel="noopener noreferrer">
                            Try Live Demo <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full sm:w-auto"
                          onClick={() => handleServiceClick(service)}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div className="text-center mt-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <a href="/contact">
                  <span className="hidden sm:inline">Contact Us for Custom Implementation</span>
                  <span className="sm:hidden">Custom Implementation</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Our Process Section - Inspired by Deseno */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6 md:mb-8">
                Our <span className="font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">approach.</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Here's how we deliver amazing results for our clients.
              </p>
            </motion.div>
            
            <div className="space-y-10 md:space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {index % 2 === 0 ? (
                      <>
                        <div className="flex-1 text-center md:text-right">
                          <div className="inline-block text-8xl md:text-9xl font-bold text-muted/20 group-hover:text-primary/30 transition-colors">
                            {step.number}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary w-fit mb-4">
                            {step.icon}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">{step.title}</h3>
                          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{step.description}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex-1 order-2 md:order-1">
                          <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary w-fit mb-4 md:ml-auto">
                            {step.icon}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 md:text-right">{step.title}</h3>
                          <p className="text-muted-foreground text-base md:text-lg leading-relaxed md:text-right">{step.description}</p>
                        </div>
                        <div className="flex-1 text-center md:text-left order-1 md:order-2">
                          <div className="inline-block text-8xl md:text-9xl font-bold text-muted/20 group-hover:text-primary/30 transition-colors">
                            {step.number}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Behind the Scenes Section */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12 md:mb-16" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6 md:mb-8">
                Behind the <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">scenes.</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The real story of building something meaningful.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {behindTheScenes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 group-hover:scale-150 transition-transform"></div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed group-hover:text-foreground transition-colors">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Startup Focus Section */}
        <section className="py-16 md:py-20 bg-orange-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6 md:mb-8">
                Built for <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">startups.</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're a startup too, so we understand the unique challenges you face. Our solutions are designed to grow with you.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {approach.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 bg-gradient-to-br from-white via-emerald-50/30 to-blue-50/20">
                    <div className="text-center">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary mx-auto w-fit mb-4 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6 md:mb-8">
                Ready to get started?<br />
                <span className="font-semibold">Try our products today.</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-blue-100 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
                Experience the power of Aureole HRMS and 4form CRM. Start with our live demos or contact us for a custom implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
                  <a href="https://hrms.aureolegroup.com/login" target="_blank" rel="noopener noreferrer">Try HRMS Demo</a>
                </Button>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
                  <a href="https://4form.beforth.in/" target="_blank" rel="noopener noreferrer">Try 4form CRM</a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-gray-900" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />

        {/* Service Modal */}
        {selectedService && (
          <ServiceModal isOpen={!!selectedService} onClose={closeModal} service={selectedService} />
        )}
      </div>
      </PageTransition>
    </ThemeProvider>
  );
}

export default HomePage;