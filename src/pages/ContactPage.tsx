import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { ThemeProvider } from '../components/ui/theme-provider';
import { ThemeToggle } from '../components/ui/theme-toggle';
import { Logo } from '../components/ui/logo';
import { MobileMenu } from '../components/ui/mobile-menu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
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

function ContactPage() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formBody = new URLSearchParams(formData).toString();

    try {
      const response = await fetch('https://console.4form.beforth.in/form/beforth-contact-form/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
      });

        if (response.ok) {
          toast.success('Form submitted successfully!');
          setFormData({
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            company: '',
            industry: '',
            message: '',
          });
        } else {
          toast.error('Failed to submit form.');
        }

    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong.');
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ToastContainer position="top-right" autoClose={3000} />
      
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
        <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 bg-gradient-to-br from-background via-pink-50/30 to-orange-50/20 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1 
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-foreground leading-none tracking-tight mb-8 md:mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Get in <br />
              <span className="font-semibold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">touch.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to transform your business? We're here to help you implement HRMS and CRM solutions every step of the way.
            </motion.p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h2 className="text-3xl md:text-5xl font-light text-foreground mb-8">
                    Send us a <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">message</span>
                  </h2>
                  <form className="space-y-6" onSubmit={handleSubmit} method='POST'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input placeholder="First Name" name='first_name' value={formData.first_name} onChange={handleChange} required />
                      <Input placeholder="Last Name" name='last_name' value={formData.last_name} onChange={handleChange} required />
                      <Input type="email" placeholder="Email" name='email' value={formData.email} onChange={handleChange} required />
                      <Input type="tel" placeholder="Phone" name='phone' value={formData.phone} onChange={handleChange} required />
                      <Input placeholder="Company" name='company' value={formData.company} onChange={handleChange} required />
                      <select 
                        className="w-full px-0 py-3 border-0 border-b-2 border-border bg-transparent focus:border-primary focus:ring-0 text-base text-foreground font-light transition-colors" 
                        name='industry' 
                        value={formData.industry}
                        onChange={handleChange}
                        required
                      >
                        <option value="" className="text-muted-foreground">Industry</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Retail">Retail</option>
                        <option value="Finance">Finance</option>
                        <option value="Technology">Technology</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <Textarea 
                      placeholder="Tell us about your HR and CRM requirements..."
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <div className="pt-4">
                      <Button size="lg" className="w-full sm:w-auto px-12" type="submit">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h2 className="text-3xl md:text-5xl font-light text-foreground mb-4">
                    Let's <span className="font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">connect</span>
                  </h2>
                  <p className="text-base font-light text-muted-foreground leading-relaxed mb-8">
                    We're here to help you transform your business with our HRMS and CRM solutions. 
                    Reach out to us for a free consultation or any questions you might have.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {[
                    {
                      icon: Mail,
                      title: "Support",
                      content: "support@beforth.in",
                      description: "Technical support and assistance",
                      bgColor: "bg-blue-100",
                      iconColor: "text-blue-600"
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      content: "+919766183834",
                      description: "Mon-Fri from 9am to 6pm",
                      bgColor: "bg-emerald-100",
                      iconColor: "text-emerald-600"
                    },
                    {
                      icon: MapPin,
                      title: "Visit Us",
                      content: "Nashik, Maharashtra, India",
                      description: "Our development center",
                      bgColor: "bg-purple-100",
                      iconColor: "text-purple-600"
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      content: "Monday - Friday: 9:00 AM - 6:00 PM",
                      description: "Saturday: 10:00 AM - 4:00 PM",
                      bgColor: "bg-orange-100",
                      iconColor: "text-orange-600"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4 }}
                      className="rounded-2xl bg-card border-2 border-border shadow-md hover:shadow-xl hover:border-border/80 transition-all duration-300 p-6 cursor-pointer"
                    >
                      <div className="flex items-start space-x-4">
                        {/* Icon with subtle background */}
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center`}>
                            <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">{item.title}</h3>
                          <p className="text-base font-semibold text-foreground mb-1 break-words">{item.content}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Follow Us</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                      { icon: Twitter, href: "#", label: "Twitter" },
                      { icon: Facebook, href: "#", label: "Facebook" },
                      { icon: Instagram, href: "#", label: "Instagram" },
                      { icon: Youtube, href: "#", label: "YouTube" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-12 h-12 bg-card border-2 border-border rounded-xl flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-200"
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
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
              Ready to get started?
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl font-light text-primary-foreground/80 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Schedule a free consultation to discuss how our HRMS and CRM solutions 
              can transform your business operations.
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
                Download Brochure
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default ContactPage;
