import { cn } from '@/utils/cn';
import darkLogo from '@public/images/shared/logo-dark.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn('bg-secondary dark:bg-background-8 relative z-0 overflow-hidden pt-16', className)}>
      <div className="main-container px-5">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Image src={darkLogo} alt="Schedulaa" className="max-w-[170px]" />
            <p className="text-accent/60 text-tagline-1 mt-4">
              Schedulaa is the operating system for service businesses: scheduling, payroll, and website booking in one
              platform.
            </p>
          </div>

          <div>
            <p className="text-primary-50 text-tagline-1 font-medium">Product</p>
            <ul className="mt-5 space-y-3">
              <li><Link href="/features" className="footer-link">Features</Link></li>
              <li><Link href="/pricing" className="footer-link">Pricing</Link></li>
              <li><Link href="/payroll" className="footer-link">Payroll</Link></li>
              <li><Link href="/docs" className="footer-link">Docs</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-primary-50 text-tagline-1 font-medium">Resources</p>
            <ul className="mt-5 space-y-3">
              <li><Link href="/blog" className="footer-link">Blog</Link></li>
              <li><Link href="/compare" className="footer-link">Compare</Link></li>
              <li><Link href="/alternatives" className="footer-link">Alternatives</Link></li>
              <li><Link href="/faq" className="footer-link">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-primary-50 text-tagline-1 font-medium">Legal</p>
            <ul className="mt-5 space-y-3">
              <li><Link href="/privacy" className="footer-link">Privacy</Link></li>
              <li><Link href="/terms" className="footer-link">Terms</Link></li>
              <li><Link href="/login" className="footer-link">Log in</Link></li>
              <li><Link href="/signup" className="footer-link">Get started</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-accent/10 border-t py-6 text-center">
          <p className="text-tagline-2 text-primary-50">© {new Date().getFullYear()} Schedulaa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
Footer.displayName = 'Footer';
export default Footer;
