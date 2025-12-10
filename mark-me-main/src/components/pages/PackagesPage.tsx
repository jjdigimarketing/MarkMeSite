import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { MarketingPackages } from '@/entities';

export default function PackagesPage() {
  const [packages, setPackages] = useState<MarketingPackages[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPackages() {
      const { items } = await BaseCrudService.getAll<MarketingPackages>('marketingpackages');
      setPackages(items);
      setLoading(false);
    }
    fetchPackages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="font-paragraph text-lg text-softgraytext">Loading packages...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full bg-secondary py-20 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-primary mb-6">
              Marketing Packages
            </h1>
            <p className="font-paragraph text-lg lg:text-xl text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
              Tailored solutions for local businesses ready to grow their digital presence. From content creation to complete marketing strategies.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Packages Grid */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          {packages.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-paragraph text-lg text-softgraytext">No packages available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-creamhighlight overflow-hidden"
                >
                  {pkg.packageImage && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <Image
                        src={pkg.packageImage}
                        alt={pkg.packageName || 'Marketing package'}
                        className="w-full h-full object-cover"
                        width={800}
                      />
                    </div>
                  )}
                  <div className="p-8 lg:p-10">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-3">
                      {pkg.packageName}
                    </h2>
                    {pkg.tagline && (
                      <p className="font-paragraph text-lg text-primary italic mb-6">
                        {pkg.tagline}
                      </p>
                    )}
                    {pkg.description && (
                      <p className="font-paragraph text-base text-softgraytext leading-relaxed mb-6">
                        {pkg.description}
                      </p>
                    )}
                    {pkg.servicesIncluded && (
                      <div className="mb-6">
                        <h3 className="font-paragraph text-base font-semibold text-primary mb-3">
                          What's Included:
                        </h3>
                        <p className="font-paragraph text-base text-softgraytext leading-relaxed whitespace-pre-line">
                          {pkg.servicesIncluded}
                        </p>
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-6 border-t border-primary/20">
                      {pkg.price !== undefined && (
                        <div>
                          <span className="font-heading text-3xl font-bold text-primary">
                            ${pkg.price}
                          </span>
                          <span className="font-paragraph text-base text-softgraytext ml-2">
                            /month
                          </span>
                        </div>
                      )}
                      <Link
                        to={`/packages/${pkg._id}`}
                        className="px-6 py-2 border-2 border-primary text-primary font-paragraph text-base hover:bg-primary hover:text-primary-foreground transition-colors inline-flex items-center gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full bg-pastelblue py-20">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
              Not Sure Which Package is Right?
            </h2>
            <p className="font-paragraph text-lg text-softgraytext max-w-2xl mx-auto mb-8">
              Schedule a free strategy call and we'll help you find the perfect solution for your business goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-paragraph text-lg hover:bg-primary/90 transition-colors"
            >
              Book Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
