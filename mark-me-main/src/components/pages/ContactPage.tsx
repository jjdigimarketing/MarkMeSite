import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      businessName: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full bg-creamhighlight py-20 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-primary mb-6">
              Let's Talk
            </h1>
            <p className="font-paragraph text-lg lg:text-xl text-softgraytext max-w-3xl mx-auto leading-relaxed">
              Ready to grow your business with strategic digital marketing? Schedule a free strategy call and let's discuss how we can help you succeed.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                Book Your Strategy Call
              </h2>
              <p className="font-paragraph text-base text-softgraytext mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours to schedule your free consultation.
              </p>
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-pastelblue border-l-4 border-primary flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="font-paragraph text-base text-primary">
                    Thank you! We'll be in touch soon to schedule your strategy call.
                  </p>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-paragraph text-base text-primary mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-primary/20 focus:border-primary"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-paragraph text-base text-primary mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-primary/20 focus:border-primary"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block font-paragraph text-base text-primary mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-primary/20 focus:border-primary"
                    placeholder="(626) 555-0123"
                  />
                </div>
                
                <div>
                  <label htmlFor="businessName" className="block font-paragraph text-base text-primary mb-2">
                    Business Name *
                  </label>
                  <Input
                    id="businessName"
                    name="businessName"
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full border-primary/20 focus:border-primary"
                    placeholder="Your Business Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-paragraph text-base text-primary mb-2">
                    Tell Us About Your Goals
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-primary/20 focus:border-primary resize-none"
                    placeholder="What are you hoping to achieve with digital marketing?"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-paragraph flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
            
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:pl-12"
            >
              <div className="bg-pastelblue p-8 lg:p-10 mb-8">
                <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="font-paragraph text-base text-softgraytext">
                      <strong className="text-primary">Free 30-minute consultation</strong> to discuss your business goals and challenges
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="font-paragraph text-base text-softgraytext">
                      <strong className="text-primary">Custom strategy recommendations</strong> tailored to your specific needs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="font-paragraph text-base text-softgraytext">
                      <strong className="text-primary">No pressure or obligations</strong> - just honest advice and insights
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="font-paragraph text-base text-softgraytext">
                      <strong className="text-primary">Clear next steps</strong> if you decide to work together
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-8 lg:p-10">
                <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                  Why Choose Mark Me?
                </h3>
                <p className="font-paragraph text-base text-secondary-foreground leading-relaxed mb-4">
                  We're a Pasadena-based team that specializes in helping local businesses thrive online. Our focus on short-form video and paid social advertising has helped dozens of businesses achieve measurable growth.
                </p>
                <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                  Whether you need content creation, ad management, or a complete digital marketing strategy, we're here to help you succeed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
