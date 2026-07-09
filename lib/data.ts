import {
  FileText,
  Receipt,
  Calculator,
  BookOpen,
  ShieldCheck,
  ClipboardCheck,
  Building2,
  Users,
  Handshake,
  User,
  Factory,
  Briefcase,
  Store,
  CreditCard,
  Stamp,
  HardHat,
  UtensilsCrossed,
  IdCard,
  ShieldPlus,
  FileSignature,
  PiggyBank,
  Wallet,
  Landmark,
  TrendingUp,
  Award,
  Scroll,
  FileCheck,
  Plane,
  BadgeCheck,
  Lightbulb,
  PieChart,
  BadgePercent,
  Clock,
  Lock,
  Smile,
  Target,
  Eye,
  Gem,
  Star,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
};

export const services: Service[] = [
  { title: 'Income Tax Returns', description: 'Accurate and timely ITR filing for individuals, professionals and businesses with maximum tax efficiency.', icon: FileText, category: 'Taxation' },
  { title: 'GST Registration', description: 'Seamless GST registration for your business with complete documentation and expert guidance.', icon: Receipt, category: 'GST' },
  { title: 'GST Returns', description: 'Monthly, quarterly and annual GST return filing with reconciliation and compliance review.', icon: Receipt, category: 'GST' },
  { title: 'Accounting', description: 'Professional accounting services maintaining accurate books and financial records.', icon: Calculator, category: 'Accounting' },
  { title: 'Bookkeeping', description: 'Systematic recording of all financial transactions to keep your business compliant and informed.', icon: BookOpen, category: 'Accounting' },
  { title: 'Audit Services', description: 'Comprehensive audit services ensuring accuracy, compliance and financial integrity.', icon: ShieldCheck, category: 'Audit' },
  { title: 'GST Audit', description: 'Detailed GST audit services with reconciliation and statutory compliance verification.', icon: ClipboardCheck, category: 'Audit' },
  { title: 'Income Tax Audit', description: 'Statutory income tax audit under Section 44AB with thorough documentation and reporting.', icon: ClipboardCheck, category: 'Audit' },
  { title: 'Company Registration', description: 'End-to-end company incorporation services with all statutory compliances handled.', icon: Building2, category: 'Registration' },
  { title: 'LLP Registration', description: 'Limited Liability Partnership registration protecting partners while ensuring flexibility.', icon: Users, category: 'Registration' },
  { title: 'Partnership Registration', description: 'Partnership firm registration and deed drafting with clear terms and legal protection.', icon: Handshake, category: 'Registration' },
  { title: 'OPC Registration', description: 'One Person Company registration for solo entrepreneurs seeking limited liability.', icon: User, category: 'Registration' },
  { title: 'Private Limited Company', description: 'Private Limited Company registration with complete legal and compliance support.', icon: Building2, category: 'Registration' },
  { title: 'MSME Registration', description: 'MSME / Udyam registration to unlock government benefits and subsidies for your business.', icon: Factory, category: 'Registration' },
  { title: 'Labour License', description: 'Labour license procurement and renewal ensuring statutory compliance for your establishment.', icon: HardHat, category: 'Licenses' },
  { title: 'Trade License', description: 'Trade license application and renewal for legal operation of your business premises.', icon: Store, category: 'Licenses' },
  { title: 'Food License', description: 'FSSAI food license registration and renewal for food businesses of all sizes.', icon: UtensilsCrossed, category: 'Licenses' },
  { title: 'PAN Card', description: 'PAN card application, correction and reprint services for individuals and entities.', icon: IdCard, category: 'Documentation' },
  { title: 'TAN Card', description: 'TAN allotment for TDS compliance and filing with the Income Tax Department.', icon: IdCard, category: 'Documentation' },
  { title: 'Digital Signature', description: 'Digital Signature Certificate issuance and renewal for e-filing and digital transactions.', icon: FileSignature, category: 'Documentation' },
  { title: 'PF Registration', description: 'Provident Fund registration and compliance for employee social security.', icon: ShieldPlus, category: 'Payroll & Labour' },
  { title: 'ESI Registration', description: 'ESI registration and compliance management for employee health insurance.', icon: ShieldPlus, category: 'Payroll & Labour' },
  { title: 'Payroll', description: 'Complete payroll processing including salary, deductions, payslips and compliance.', icon: Wallet, category: 'Payroll & Labour' },
  { title: 'TDS Returns', description: 'TDS return preparation and filing with accurate deduction and deposit verification.', icon: FileText, category: 'Taxation' },
  { title: 'Professional Tax', description: 'Professional tax registration and return filing for businesses and professionals.', icon: Briefcase, category: 'Taxation' },
  { title: 'Trademark Registration', description: 'Trademark registration and protection for your brand identity and intellectual property.', icon: Stamp, category: 'Registration' },
  { title: 'Net Worth Certificate', description: 'Net worth certificate issuance for visas, loans and business requirements.', icon: Award, category: 'Certification' },
  { title: 'Income Certificate', description: 'Income certificate preparation for various official and personal requirements.', icon: Scroll, category: 'Certification' },
  { title: 'Visa Certificate', description: 'Financial and income certificates for visa applications and immigration purposes.', icon: Plane, category: 'Certification' },
  { title: 'Solvency Certificate', description: 'Solvency certificate issuance confirming financial standing for loans and tenders.', icon: BadgeCheck, category: 'Certification' },
  { title: 'Business Advisory', description: 'Strategic business advisory services to optimise operations and drive growth.', icon: Lightbulb, category: 'Advisory' },
  { title: 'Tax Planning', description: 'Proactive tax planning strategies to minimise liability and maximise savings legally.', icon: PieChart, category: 'Advisory' },
  { title: 'Certification Services', description: 'Statutory certification services by qualified Chartered Accountant for various needs.', icon: FileCheck, category: 'Certification' },
];

export type Stat = { label: string; value: number; suffix: string };

export const stats: Stat[] = [
  { label: 'Happy Clients', value: 1000, suffix: '+' },
  { label: 'Years of Experience', value: 5, suffix: '+' },
  { label: 'Client Satisfaction', value: 98, suffix: '%' },
  { label: 'Professional Support', value: 24, suffix: '×7' },
];

export type Testimonial = {
  name: string;
  role: string;
  service: string;
  rating: number;
  text: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Rajesh Kumar Sharma',
    role: 'Managing Director, Sharma Traders Pvt Ltd',
    service: 'GST Filing',
    rating: 5,
    initials: 'RS',
    text: 'K. Umamaheswara Reddy and the PPR Tax Consultancy team have handled our GST filings flawlessly for over two years. Their attention to detail and timely submissions have saved us from penalties multiple times. Truly professional service.',
  },
  {
    name: 'Priya Venkatesh',
    role: 'Founder, Sri Lakshmi Boutique',
    service: 'Income Tax Filing',
    rating: 5,
    initials: 'PV',
    text: 'I was confused about my income tax returns as a small business owner. PPR Tax Consultancy made the entire process effortless. Umamaheswara Reddy sir explained everything patiently and ensured I got the maximum refund. Highly recommended!',
  },
  {
    name: 'Srinivas Reddy',
    role: 'Proprietor, SV Constructions',
    service: 'Audit Services',
    rating: 5,
    initials: 'SR',
    text: 'The audit services provided by PPR Tax Consultancy were thorough and professional. Their team identified compliance gaps we were unaware of and helped us rectify them. The level of expertise is comparable to any big firm.',
  },
  {
    name: 'Lakshmi Narayana',
    role: 'Director, Narayana Textiles',
    service: 'Accounting',
    rating: 5,
    initials: 'LN',
    text: 'Outsourcing our accounting to PPR Tax Consultancy was the best decision. Our books are now accurate, up-to-date, and always audit-ready. Umamaheswara Reddy garu brings a level of dedication that is rare to find.',
  },
  {
    name: 'Anitha Reddy',
    role: 'CEO, Anitha Foods & Beverages',
    service: 'Company Registration',
    rating: 5,
    initials: 'AR',
    text: 'From company registration to ongoing compliance, PPR Tax Consultancy handled everything seamlessly. They guided us through the entire incorporation process and made it stress-free. Excellent service at fair pricing.',
  },
  {
    name: 'Murali Krishna',
    role: 'Partner, Krishna Associates LLP',
    service: 'PAN Card Services',
    rating: 5,
    initials: 'MK',
    text: 'Needed PAN cards for our entire team urgently. PPR Tax Consultancy processed all applications quickly and accurately. Their responsiveness and professionalism are outstanding. Will definitely return for all tax-related needs.',
  },
  {
    name: 'Suresh Babu',
    role: 'Founder, Babu Electronics',
    service: 'Payroll Services',
    rating: 5,
    initials: 'SB',
    text: 'Managing payroll for 40 employees was a headache until we engaged PPR Tax Consultancy. Now everything runs on autopilot — salaries, PF, ESI, and payslips. Umamaheswara Reddy sir is always available for guidance.',
  },
  {
    name: 'Deepika Reddy',
    role: 'Director, Reddy Pharma Distributors',
    service: 'Overall Professionalism',
    rating: 5,
    initials: 'DR',
    text: 'PPR Tax Consultancy is our one-stop solution for all financial and compliance needs. From GST to audit to advisory, their service is consistently excellent. The team is knowledgeable, approachable, and genuinely cares about clients.',
  },
];

export type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: 'GST Returns: A Complete Filing Guide for Businesses in 2026',
    excerpt: 'Understand the different types of GST returns, due dates, and the step-by-step process for filing. Learn how to avoid common mistakes and penalties.',
    category: 'GST',
    date: 'Jan 15, 2026',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/6863253/pexels-photo-6863253.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Income Tax Saving Strategies Every Salaried Employee Should Know',
    excerpt: 'Maximise your tax savings with these proven strategies under Sections 80C, 80D, 80CCD and more. Plan your investments smartly this financial year.',
    category: 'Income Tax',
    date: 'Jan 10, 2026',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'The Importance of Proper Bookkeeping for Small Businesses',
    excerpt: 'Why maintaining accurate books is critical for business growth, compliance, and decision-making. Tips for setting up an effective bookkeeping system.',
    category: 'Accounting',
    date: 'Jan 5, 2026',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Statutory Audit: What Every Company Director Needs to Understand',
    excerpt: 'A clear explanation of statutory audit requirements, the auditor\'s role, and how to prepare your company for a smooth audit process.',
    category: 'Auditing',
    date: 'Dec 28, 2025',
    readTime: '9 min read',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'MSME Registration: Benefits, Process and Required Documents',
    excerpt: 'Everything you need to know about Udyam MSME registration — the benefits, eligibility, documents required, and the step-by-step online process.',
    category: 'MSME Registration',
    date: 'Dec 20, 2025',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Private Limited Company Registration: A Step-by-Step Guide',
    excerpt: 'Learn the complete process of registering a Private Limited Company in India, including documents, timelines, costs, and post-incorporation compliance.',
    category: 'Company Registration',
    date: 'Dec 12, 2025',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'TDS Returns: Due Dates, Rates and Filing Procedure Explained',
    excerpt: 'A comprehensive guide to TDS — understanding deduction rates, return filing due dates, Form 26Q, 24Q, and how to avoid common TDS errors.',
    category: 'TDS',
    date: 'Dec 5, 2025',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/4386329/pexels-photo-4386329.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Payroll Management Best Practices for Growing Businesses',
    excerpt: 'Streamline your payroll process with these best practices. Learn about compliance, automation, and how to handle payroll as your team scales.',
    category: 'Payroll',
    date: 'Nov 28, 2025',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Financial Planning for Startups: Building a Strong Foundation',
    excerpt: 'Essential financial planning strategies for startups — from budgeting and cash flow management to fundraising readiness and tax planning.',
    category: 'Financial Planning',
    date: 'Nov 20, 2025',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Top 10 Tax Saving Investments Under Section 80C for 2026',
    excerpt: 'Explore the best tax-saving investment options under Section 80C — from PPF and ELSS to NSC and life insurance. Choose what suits you best.',
    category: 'Tax Saving',
    date: 'Nov 12, 2025',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/4386440/pexels-photo-4386440.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Business Compliance Checklist: What Every SME Must Follow',
    excerpt: 'A month-by-month compliance checklist for SMEs covering GST, TDS, PF, ESI, ROC filings and more. Stay compliant and avoid penalties.',
    category: 'Business Compliance',
    date: 'Nov 5, 2025',
    readTime: '9 min read',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Understanding GST Audit: When and How It Applies to Your Business',
    excerpt: 'Learn about GST audit thresholds, the reconciliation process in GSTR-9C, and how to prepare your business for a smooth GST audit.',
    category: 'GST',
    date: 'Oct 28, 2025',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/6863253/pexels-photo-6863253.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const contactInfo = {
  phone: '+91 9618561434',
  phoneRaw: '919618561434',
  email: 'pprtaxconsultancy@gmail.com',
  address:
    'H No-206, S1 2nd Floor, Vasantha Lakshmi Nilayam, Jaya Prakash Narayan Nagar, Miyapur, Hyderabad, Telangana – 500049',
  addressShort: 'Miyapur, Hyderabad, Telangana – 500049',
  hours: [
    { day: 'Monday – Friday', time: '9:30 AM – 7:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 5:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  mapEmbed:
    'https://www.google.com/maps?q=Miyapur,Hyderabad,Telangana,500049&output=embed',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const whyChooseUs = [
  { title: 'Experienced Professionals', description: 'Led by K. Umamaheswara Reddy, B.Com (CA), with years of expertise in taxation and compliance.', icon: Award },
  { title: 'Transparent Pricing', description: 'Clear, upfront pricing with no hidden charges. You know exactly what you pay for.', icon: BadgePercent },
  { title: 'Timely Filing', description: 'We ensure all your filings and compliances are completed well before deadlines.', icon: Clock },
  { title: 'Complete Compliance', description: 'End-to-end compliance management so you never miss a statutory requirement.', icon: ShieldCheck },
  { title: 'Personalised Support', description: 'Dedicated support tailored to your specific business needs and circumstances.', icon: Users },
  { title: 'Modern Technology', description: 'Leveraging the latest tools and software for accurate, efficient service delivery.', icon: TrendingUp },
  { title: 'Strict Confidentiality', description: 'Your financial data is handled with the utmost security and confidentiality.', icon: Lock },
  { title: 'Customer Satisfaction', description: '98% client satisfaction rate — we go the extra mile to ensure you are happy.', icon: Smile },
];

export const aboutCards = [
  {
    title: 'Our Mission',
    description:
      'To empower individuals and businesses with reliable, accurate and timely financial and tax services, enabling them to achieve compliance and financial success with confidence.',
    icon: 'target',
  },
  {
    title: 'Our Vision',
    description:
      'To be the most trusted tax consultancy in India, recognised for our integrity, expertise and commitment to building long-term client relationships that span generations.',
    icon: 'eye',
  },
  {
    title: 'Core Values',
    description:
      'Integrity, transparency, accuracy and dedication form the foundation of everything we do. We believe in doing right by our clients, every single time.',
    icon: 'gem',
  },
  {
    title: 'Why Choose Us',
    description:
      'With 1000+ satisfied clients and 5+ years of experience, we combine deep expertise with personalised service to deliver results that exceed expectations.',
    icon: 'star',
  },
];

export const floatingIcons = [
  { icon: 'receipt', delay: 0, position: 'top-[15%] left-[8%]' },
  { icon: 'calculator', delay: 0.5, position: 'top-[25%] right-[10%]' },
  { icon: 'chart', delay: 1, position: 'bottom-[30%] left-[12%]' },
  { icon: 'file', delay: 1.5, position: 'bottom-[20%] right-[8%]' },
  { icon: 'building', delay: 2, position: 'top-[50%] left-[5%]' },
  { icon: 'wallet', delay: 2.5, position: 'top-[60%] right-[6%]' },
];
