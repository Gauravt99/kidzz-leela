import { Link } from 'react-router-dom';
import siteContent from '@/config/siteContent.json';
import pngLogo from "../assets/logo.png";

const Footer = () => {
  const { brandName, logo, footer, newsletter, navigation } = siteContent;

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-gradient-secondary py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
              {newsletter.heading}
            </h3>
            <p className="text-foreground/70 mb-6">
              {newsletter.subheading}
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="flex-1 px-5 py-3 rounded-full bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                {newsletter.buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link to="/" className="inline-flex items-center gap-2 mb-4">
                {/* <span className="text-3xl">{logo.icon}</span> */}
                <img src={pngLogo} alt="Logo" className="h-12 w-12" />
                <span className="font-heading font-bold text-xl">{brandName}</span>
              </Link>
              <p className="text-primary-foreground/70 mb-4 max-w-sm">
                {footer.tagline}
              </p>
              <div className="flex gap-4">
                {footer.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    className="text-2xl hover:scale-110 transition-transform"
                    aria-label={social.platform}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li>
                  <a href={`mailto:${footer.contact.email}`} className="hover:text-primary-foreground transition-colors">
                    📧 {footer.contact.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${footer.contact.phone}`} className="hover:text-primary-foreground transition-colors">
                    📞 {footer.contact.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm">
            {footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
