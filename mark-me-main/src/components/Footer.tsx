import { Link } from 'react-router-dom';
import { Instagram, Send, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-creamhighlight border-t border-primary/10">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                <span className="font-heading text-lg font-bold text-primary italic">M</span>
              </div>
              <span className="font-heading text-xl font-bold text-primary">Mark Me</span>
            </div>
            <p className="font-paragraph text-base text-softgraytext leading-relaxed">
              Pasadena's digital marketing team specializing in short-form video and paid social ads for local businesses.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-semibold text-primary mb-6">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/packages" className="font-paragraph text-base text-softgraytext hover:text-primary transition-colors">
                Packages
              </Link>
              <Link to="/process" className="font-paragraph text-base text-softgraytext hover:text-primary transition-colors">
                Process
              </Link>
              <Link to="/contact" className="font-paragraph text-base text-softgraytext hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-semibold text-primary mb-6">Get in Touch</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="font-paragraph text-base text-softgraytext">Pasadena, California</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <a href="mailto:markmedigi@gmail.com" className="font-paragraph text-base text-softgraytext hover:text-primary transition-colors">
                  markmedigi@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                  <Send className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/10">
          <p className="font-paragraph text-sm text-softgraytext text-center">
            © {new Date().getFullYear()} Mark Me Digital Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
