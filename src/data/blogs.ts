export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Register a Private Limited Company in India: A Step-by-Step Guide',
    excerpt: 'Starting a business in India? Here is everything you need to know about registering a Private Limited Company, from DSC to Certificate of Incorporation.',
    content: `
      <h2>Introduction</h2>
      <p>Registering a Private Limited Company is the most popular way to start a business in India. It offers limited liability protection to its shareholders and is recognized as a separate legal entity. In this guide, we will walk you through the entire process.</p>

      <h2>Step 1: Obtain Digital Signature Certificate (DSC)</h2>
      <p>The first step is to obtain a DSC for the proposed directors of the company. Since the registration process is entirely online, digital signatures are required to sign the electronic forms.</p>

      <h2>Step 2: Apply for Director Identification Number (DIN)</h2>
      <p>Every director of a company must have a unique DIN. This can be applied for along with the company registration form (SPICe+).</p>

      <h2>Step 3: Name Approval</h2>
      <p>You need to choose a unique name for your company. The name should not be similar to any existing company or trademark. You can apply for name approval through the RUN (Reserve Unique Name) service on the MCA portal.</p>

      <h2>Step 4: Filing for Incorporation</h2>
      <p>Once the name is approved, you need to file the SPICe+ form for incorporation. This form includes the Memorandum of Association (MoA) and Articles of Association (AoA).</p>

      <h2>Step 5: Certificate of Incorporation</h2>
      <p>After the Registrar of Companies (RoC) verifies the documents, they will issue a Certificate of Incorporation. This certificate is proof that the company has been legally registered.</p>

      <h2>Conclusion</h2>
      <p>Registering a company can be a complex process, but with the right guidance, it can be completed smoothly. At 1XFILING, we help thousands of entrepreneurs launch their dream businesses every year.</p>
    `,
    author: 'Amit Sharma',
    date: 'Feb 15, 2026',
    category: 'Startup',
    image: 'https://picsum.photos/seed/startup/800/600',
    readTime: '8 min read'
  },
  {
    id: '2',
    title: 'GST Filing Dates for 2026: Stay Compliant and Avoid Penalties',
    excerpt: 'Missing GST deadlines can lead to heavy penalties. Check out the important GST filing dates for the year 2026 and keep your business compliant.',
    content: `
      <h2>Importance of GST Compliance</h2>
      <p>Goods and Services Tax (GST) has streamlined the indirect tax system in India. However, it requires regular filing of returns. Timely compliance is crucial to avoid late fees and maintain a good compliance rating.</p>

      <h2>Monthly Returns (GSTR-1 and GSTR-3B)</h2>
      <p>For most businesses, GSTR-1 (details of outward supplies) must be filed by the 11th of the following month, and GSTR-3B (summary of returns and tax payment) by the 20th.</p>

      <h2>Quarterly Returns (QRMP Scheme)</h2>
      <p>Small taxpayers with an aggregate turnover of up to Rs 5 crore can opt for the Quarterly Return Filing and Monthly Payment of Taxes (QRMP) scheme.</p>

      <h2>Annual Return (GSTR-9)</h2>
      <p>The annual return for a financial year must be filed by December 31st of the following financial year.</p>

      <h2>How 1XFILING Can Help</h2>
      <p>Our automated GST platform ensures that you never miss a deadline. We handle the reconciliations and filings so you can focus on your business.</p>
    `,
    author: 'Priya Patel',
    date: 'Feb 10, 2026',
    category: 'GST',
    image: 'https://picsum.photos/seed/gst/800/600',
    readTime: '5 min read'
  },
  {
    id: '3',
    title: 'Top 10 Tax Saving Tips for Salaried Individuals in India',
    excerpt: 'Maximize your take-home salary with these effective tax-saving strategies under Section 80C, 80D, and more.',
    content: `
      <h2>Maximize Your Savings</h2>
      <p>Tax planning is an essential part of financial management. For salaried individuals, there are several avenues to reduce tax liability legally.</p>

      <h2>1. Section 80C Deductions</h2>
      <p>Invest up to Rs 1.5 lakh in instruments like PPF, ELSS, LIC, and NSC to claim deductions under Section 80C.</p>

      <h2>2. Health Insurance (Section 80D)</h2>
      <p>Premiums paid for health insurance for yourself, your spouse, children, and parents are eligible for deduction under Section 80D.</p>

      <h2>3. House Rent Allowance (HRA)</h2>
      <p>If you live in a rented house, you can claim HRA exemption to reduce your taxable income.</p>

      <h2>4. Standard Deduction</h2>
      <p>A flat standard deduction of Rs 50,000 is available to all salaried employees.</p>

      <h2>Conclusion</h2>
      <p>Starting your tax planning early in the financial year is the best way to ensure you maximize your savings.</p>
    `,
    author: 'Rahul Verma',
    date: 'Feb 5, 2026',
    category: 'Taxation',
    image: 'https://picsum.photos/seed/tax/800/600',
    readTime: '6 min read'
  }
];
