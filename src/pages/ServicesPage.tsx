import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BarChart3, Shield, Clock, Play } from 'lucide-react';
import { Button } from '../components/ui/button';
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';
import { MobileMenu } from '../components/ui/mobile-menu';
import { ThemeProvider } from '../components/ui/theme-provider';
import { ThemeToggle } from '../components/ui/theme-toggle';
import { ServiceModal } from '../components/ui/service-modal';
import { Logo } from '../components/ui/logo';
import { NavLink } from '../components/ui/nav-link';
import { Footer } from '../components/ui/footer';

const navItems = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "About", link: "/about" },
  { name: "Team", link: "/team" },
  // { name: "Blog", link: "/blog" },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" },
];

const services = [
  {
    id: 'hrms-implementation',
    title: "HRMS Implementation",
    description: "Comprehensive HRMS solution with extensive features for complete workforce management, like our implementation for Aureole Group.",
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
    features: [
      "Employee Records Management with personal, job, and document data",
      "Attendance & Leave Management with automated tracking and approvals",
      "Shift & Roster Management for complex scheduling needs",
      "Comprehensive Payroll with salary structures, tax calculations, PF/ESI",
      "Performance Management with appraisals, goals, and feedback systems",
      "Recruitment Module with job postings, applications, and interview scheduling",
      "Employee Self-Service Portal for leave applications and payslip access",
      "Expense Management and reimbursement tracking",
      "Advanced HR Reports and Analytics for data-driven decisions"
    ],
    benefits: [
      "Streamline HR operations and reduce manual work",
      "Ensure compliance with labor laws and regulations",
      "Improve employee satisfaction with self-service capabilities",
      "Real-time visibility into workforce analytics and trends",
      "Automated payroll processing with accuracy",
      "Enhanced recruitment efficiency with automated workflows"
    ],
    process: [
      "Requirements Analysis & System Planning",
      "Custom Configuration & Data Migration",
      "User Training & Change Management",
      "Go-Live Support & Optimization"
    ]
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute top-2 left-2 w-2 h-2 bg-emerald-400/60 rounded-full"></div>
        <div className="absolute bottom-3 right-3 w-1 h-1 bg-green-400/60 rounded-full"></div>
      </div>
    ),
    features: [
      "Lead & Contact Management with easy organization and tracking",
      "Mass Email Campaigns with templates and scheduling",
      "Built-in Form Builder for custom data collection",
      "Data Collection & Analytics with real-time insights",
      "Customer Pipeline Tracking with visual dashboards",
      "Email Integration for seamless communication",
      "Automated follow-ups and reminders",
      "Mobile-friendly interface for teams on the go",
      "Export and reporting capabilities"
    ],
    benefits: [
      "Simple, intuitive interface that's easy to learn",
      "Powerful mass email features to reach customers at scale",
      "Easy data collection through customizable forms",
      "Increase response rates with automated follow-ups",
      "Better customer engagement and retention",
      "Cost-effective solution for growing businesses"
    ],
    process: [
      "Account Setup & Configuration",
      "Form & Email Template Design",
      "Team Onboarding & Training",
      "Campaign Launch & Monitoring"
    ]
  },
  {
    id: 'integration',
    title: "Custom Integration Services",
    description: "Integrate our HRMS and CRM solutions with your existing business systems for seamless operations.",
    icon: <Shield className="h-8 w-8" />,
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-50/50 to-violet-100/50 dark:from-purple-950/30 dark:to-violet-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-600/10"></div>
        <div className="absolute top-2 right-2 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1 left-1 w-16 h-16 bg-violet-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Shield className="w-8 h-8 text-purple-500/40" />
        </div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(147,51,234,0.1),transparent_120deg,rgba(139,92,246,0.1),transparent_240deg)]"></div>
        <div className="absolute top-4 left-4 w-1 h-8 bg-purple-400/30 rounded-full transform rotate-45"></div>
        <div className="absolute bottom-4 right-4 w-1 h-6 bg-violet-400/30 rounded-full transform -rotate-45"></div>
      </div>
    ),
    features: [
      "API-based integration with existing ERP, accounting, and business systems",
      "Real-time data synchronization between systems",
      "Custom connector development for legacy systems",
      "Single Sign-On (SSO) implementation",
      "Data mapping and transformation for consistent information flow",
      "Automated backup and disaster recovery setup",
      "Security protocols and access control implementation",
      "Integration monitoring and error handling"
    ],
    benefits: [
      "Eliminate data silos and manual data entry",
      "Reduce errors and improve data accuracy",
      "Streamline workflows across all business systems",
      "Enable real-time reporting and analytics",
      "Maintain data consistency across platforms",
      "Reduce IT maintenance overhead"
    ],
    process: [
      "System Audit & Integration Planning",
      "API Development & Testing",
      "Data Migration & Validation",
      "Go-Live & Monitoring Setup"
    ]
  },
  {
    id: 'support',
    title: "Training & Support",
    description: "Complete training and 24/7 support to ensure your team gets the most out of our solutions.",
    icon: <Clock className="h-8 w-8" />,
    className: "md:col-span-2",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-50/50 to-red-100/50 dark:from-orange-950/30 dark:to-red-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10"></div>
        <div className="absolute top-1 right-1 w-28 h-28 bg-orange-500/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-2 left-3 w-18 h-18 bg-red-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Clock className="w-8 h-8 text-orange-500/40" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.1),transparent_50%)]"></div>
        <div className="absolute top-3 left-6 w-3 h-3 bg-orange-400/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-5 right-6 w-2 h-2 bg-red-400/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-6 right-8 w-1 h-1 bg-orange-300/60 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    ),
    features: [
      "Comprehensive user training programs for all features",
      "Role-based training sessions for different user groups",
      "Interactive workshops and hands-on practice",
      "Custom training materials and documentation",
      "24/7 technical support via email, chat, and phone",
      "Regular system health checks and optimization",
      "Knowledge base and video tutorials",
      "Dedicated support team for enterprise clients"
    ],
    benefits: [
      "Achieve high user adoption rates quickly",
      "Reduce support dependency through proper training",
      "Maximize ROI through effective system utilization",
      "Ensure business continuity with reliable support",
      "Build internal expertise for long-term success",
      "Stay updated with latest features and best practices"
    ],
    process: [
      "Training Needs Assessment",
      "Customized Training Program Development",
      "Training Delivery & Certification",
      "Ongoing Support & Knowledge Transfer"
    ]
  }
];

function ServicesPage() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center h-16">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Logo />
                <span className="text-xl font-semibold text-foreground">Beforth</span>
              </motion.div>
              
              {/* Desktop Navigation */}
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
              
              {/* Desktop Actions */}
              <div className="hidden md:flex items-center space-x-4">
                <ThemeToggle />
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Button size="sm">Get Started</Button>
                </motion.div>
              </div>

              {/* Mobile Menu */}
              <MobileMenu navItems={navItems} />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 bg-gradient-to-br from-background via-emerald-50/30 to-blue-50/20 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1 
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-foreground leading-none tracking-tight mb-8 md:mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our <br />
              <span className="font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">services.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Live products and comprehensive services for your business needs.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl" asChild>
                <a href="https://hrms.aureolegroup.com/login" target="_blank" rel="noopener noreferrer">Try HRMS Demo</a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="https://4form.beforth.in/" target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4 mr-2" />
                  Try 4form CRM
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-20 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-7xl"
            >
              <BentoGrid className="grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
                {services.map((item, i) => (
                  <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={item.className || ""}
                    onClick={() => handleServiceClick(item)}
                  />
                ))}
              </BentoGrid>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-8 md:mb-12 leading-tight">
                  Why choose<br />
                  <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Beforth?</span>
                </h2>
                <div className="space-y-8 md:space-y-10">
                  {[
                    {
                      title: "Real, Production-Ready Solutions",
                      description: "Our HRMS and CRM solutions are live and actively used by businesses. Try them yourself with our demo links.",
                      color: "border-l-blue-500"
                    },
                    {
                      title: "Simple & Effective",
                      description: "Built for startups and growing businesses. No complex workflows, just powerful features that work.",
                      color: "border-l-green-500"
                    },
                    {
                      title: "Quick Implementation",
                      description: "Get started fast with our streamlined setup process. Your team can be up and running in days.",
                      color: "border-l-purple-500"
                    },
                    {
                      title: "Dedicated Support",
                      description: "24/7 support from our team who understands your business needs and technical requirements.",
                      color: "border-l-orange-500"
                    }
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`pl-6 border-l-4 ${benefit.color}`}
                    >
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 md:mb-4">{benefit.title}</h3>
                      <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Team collaborating on ERP implementation"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 text-center">
              {[
                { number: "2", label: "Live Products", color: "text-blue-600" },
                { number: "24/7", label: "Support Available", color: "text-green-600" },
                { number: "2025", label: "Founded", color: "text-purple-600" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`text-5xl md:text-7xl font-extralight mb-3 ${stat.color}`}>{stat.number}</div>
                  <div className="text-base md:text-lg font-medium text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 md:mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to transform<br />
              <span className="font-semibold">your business?</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl font-light text-primary-foreground/80 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Schedule a free consultation to discuss how our HRMS and CRM 
              solutions can meet your specific business requirements.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Schedule Free Consultation
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <a href="/contact" className="flex items-center">
                  Contact Us
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />

        {/* Service Modal */}
        {selectedService && (
          <ServiceModal
            isOpen={!!selectedService}
            onClose={closeModal}
            service={selectedService}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default ServicesPage;
