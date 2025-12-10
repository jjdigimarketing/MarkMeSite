import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { MarketingPackages } from '@/entities';

export default function PackageDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [packageData, setPackageData] = useState<MarketingPackages | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPackage() {
      if (!id) return;
      const pkg = await BaseCrudService.getById<MarketingPackages>('marketingpackages', id, ['relatedcasestudies']);
      setPackageData(pkg);
      setLoading(false);
    }
    fetchPackage();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="font-paragraph text-lg text-softgraytext">Loading package details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12 py-20 text-center">
          <h1 className="font-heading text-4xl font-bold text-primary mb-6">Package Not Found</h1>
          <Link to="/packages" className="text-primary hover:text-secondary inline-flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Back to Packages
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full bg-creamhighlight py-20 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <Link to="/packages" className="inline-flex items-center gap-2 text-primary hover:text-secondary mb-12 font-paragraph text-base transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Packages
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-primary mb-4">
                {packageData.packageName}
              </h1>
              {packageData.tagline && (
                <p className="font-paragraph text-2xl text-primary italic mb-6">
                  {packageData.tagline}
                </p>
              )}
              {packageData.price !== undefined && (
                <div className="mb-8">
                  <span className="font-heading text-5xl font-bold text-primary">
                    ${packageData.price}
                  </span>
                  <span className="font-paragraph text-xl text-softgraytext ml-2">
                    /month
                  </span>
                </div>
              )}
            </motion.div>
            
            {packageData.packageImage && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={packageData.packageImage}
                  alt={packageData.packageName || 'Package'}
                  className="w-full h-full object-cover"
                  width={800}
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {packageData.description && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="font-heading text-3xl font-semibold text-primary mb-6">
                    Package Overview
                  </h2>
                  <p className="font-paragraph text-lg text-softgraytext leading-relaxed whitespace-pre-line">
                    {packageData.description}
                  </p>
                </motion.div>
              )}
              
              {packageData.servicesIncluded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-12 bg-pastelblue p-8"
                >
                  <h2 className="font-heading text-3xl font-semibold text-primary mb-6">
                    What's Included
                  </h2>
                  <div className="font-paragraph text-lg text-softgraytext leading-relaxed whitespace-pre-line">
                    {packageData.servicesIncluded}
                  </div>
                </motion.div>
              )}
              

            </div>
            
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-secondary p-8 sticky top-8">
                <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
                  Ready to Get Started?
                </h3>
                <p className="font-paragraph text-base text-secondary-foreground mb-6 leading-relaxed">
                  Schedule a free strategy call to discuss how this package can help grow your business.
                </p>
                <Link
                  to="/contact"
                  className="block w-full px-6 py-3 bg-primary text-primary-foreground text-center font-paragraph text-base hover:bg-primary/90 transition-colors mb-4"
                >
                  Book Strategy Call
                </Link>
                {packageData.learnMoreUrl && (
                  <a
                    href={packageData.learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 border-2 border-primary text-primary text-center font-paragraph text-base hover:bg-primary hover:text-primary-foreground transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
