import { motion } from 'framer-motion';
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProcessPage() {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Research',
      description: 'We start by understanding your business, target audience, and goals. Through in-depth research, we identify opportunities and develop a strategic foundation for your digital marketing success.',
      details: [
        'Comprehensive business analysis',
        'Competitor research and market positioning',
        'Audience insights and behavior patterns',
        'Platform selection and strategy development'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Strategy & Planning',
      description: 'Based on our research, we create a customized marketing plan tailored to your specific needs. This includes content themes, posting schedules, ad strategies, and measurable objectives.',
      details: [
        'Content calendar and theme development',
        'Ad campaign planning and budget allocation',
        'Creative direction and brand guidelines',
        'KPI definition and success metrics'
      ]
    },
    {
      icon: Rocket,
      title: 'Creation & Launch',
      description: 'Our team produces high-quality short-form video content and launches targeted ad campaigns. We handle everything from filming and editing to copywriting and campaign setup.',
      details: [
        'Professional video production and editing',
        'Compelling copywriting and captions',
        'Ad creative development and testing',
        'Campaign launch and initial optimization'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Optimize & Scale',
      description: 'We continuously monitor performance, analyze data, and refine our approach. As we identify what works best, we scale successful strategies to maximize your return on investment.',
      details: [
        'Daily performance monitoring and reporting',
        'A/B testing and creative iteration',
        'Budget optimization and reallocation',
        'Monthly strategy reviews and adjustments'
      ]
    }
  ];

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
              Our Process
            </h1>
            <p className="font-paragraph text-lg lg:text-xl text-softgraytext max-w-3xl mx-auto leading-relaxed">
              A proven methodology for digital marketing success. From initial discovery to ongoing optimization, we guide your business through every step of the journey.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Process Steps */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 flex items-center justify-center border-2 border-primary rounded-full">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="font-heading text-6xl font-bold text-pastelblue">
                      0{index + 1}
                    </span>
                  </div>
                  <h2 className="font-heading text-4xl font-bold text-primary mb-4">
                    {step.title}
                  </h2>
                  <p className="font-paragraph text-lg text-softgraytext leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <span className="text-primary mt-1">→</span>
                        <span className="font-paragraph text-base text-softgraytext">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`bg-${index % 2 === 0 ? 'pastelblue' : 'secondary'} aspect-square flex items-center justify-center`}>
                    <step.icon className="w-32 h-32 text-primary opacity-20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why It Works */}
      <section className="w-full bg-pastelblue py-20">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              Why This Process Works
            </h2>
            <p className="font-paragraph text-lg text-softgraytext max-w-3xl mx-auto">
              Our systematic approach ensures consistent results and sustainable growth for local businesses
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background p-8 text-center"
            >
              <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                Data-Driven Decisions
              </h3>
              <p className="font-paragraph text-base text-softgraytext leading-relaxed">
                Every strategy is backed by research and analytics, ensuring we make informed choices that drive real results for your business.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background p-8 text-center"
            >
              <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                Continuous Improvement
              </h3>
              <p className="font-paragraph text-base text-softgraytext leading-relaxed">
                We don't set and forget. Our ongoing optimization ensures your campaigns get better over time, maximizing your investment.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background p-8 text-center"
            >
              <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                Transparent Communication
              </h3>
              <p className="font-paragraph text-base text-softgraytext leading-relaxed">
                You'll always know what we're doing and why. Regular reports and check-ins keep you informed and involved in the process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary p-12 lg:p-16 text-center"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our proven process can help your business grow. Schedule a free strategy call today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-paragraph text-lg hover:bg-primary/90 transition-colors"
            >
              Book Your Strategy Call
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
