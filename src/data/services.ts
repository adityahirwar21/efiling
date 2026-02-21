import { Category } from "../types";

export const categories: Category[] = [
  {
    id: "startup",
    name: "Startup",
    services: [
      {
        id: "private-limited",
        name: "Private Limited Company",
        category: "startup",
        description: "The most popular legal structure for startups in India.",
        heroTitle: "Register Your Private Limited Company",
        heroSubtitle: "Get your business incorporated in 10-15 days with expert assistance.",
        benefits: [
          "Limited Liability Protection",
          "Separate Legal Entity",
          "Easy to Raise Funds",
          "Builds Credibility",
          "Perpetual Succession"
        ],
        documents: [
          "PAN Card of Directors",
          "Aadhar Card of Directors",
          "Passport Size Photos",
          "Proof of Registered Office (Utility Bill)",
          "NOC from Owner"
        ],
        process: [
          { title: "DSC & DIN", description: "Obtain Digital Signature Certificate and Director Identification Number." },
          { title: "Name Approval", description: "Reserve your unique company name through the RUN service." },
          { title: "Documentation", description: "Drafting of MoA, AoA and other incorporation documents." },
          { title: "Filing", description: "Submit SPICe+ form with MCA for incorporation." },
          { title: "Certificate", description: "Receive Certificate of Incorporation, PAN and TAN." }
        ],
        pricing: {
          marketRate: 15000,
          ourPrice: 6999,
          label: "Professional Fees"
        }
      },
      {
        id: "opc",
        name: "One Person Company",
        category: "startup",
        description: "Perfect for solo entrepreneurs who want limited liability.",
        heroTitle: "One Person Company Registration",
        heroSubtitle: "Enjoy the benefits of a company with just one director.",
        benefits: ["Single Ownership", "Limited Liability", "Fewer Compliances", "Legal Recognition"],
        documents: ["PAN Card", "Aadhar Card", "Address Proof", "Office Proof"],
        process: [
          { title: "DSC", description: "Get Digital Signature." },
          { title: "Name", description: "Apply for name reservation." },
          { title: "Incorporation", description: "File for OPC incorporation." }
        ],
        pricing: { marketRate: 12000, ourPrice: 5999, label: "Professional Fees" }
      }
    ]
  },
  {
    id: "registrations",
    name: "Registrations",
    services: [
      {
        id: "fssai",
        name: "FSSAI License",
        category: "registrations",
        description: "Mandatory food safety registration for food businesses.",
        heroTitle: "FSSAI Registration & Licensing",
        heroSubtitle: "Ensure your food business is compliant with FSSAI standards.",
        benefits: ["Legal Benefits", "Consumer Trust", "Brand Value", "Expansion Ease"],
        documents: ["Photo ID", "Address Proof", "List of Food Products", "Layout Plan"],
        process: [
          { title: "Application", description: "Submit online application on FoSCoS." },
          { title: "Inspection", description: "Government inspection if required for license." },
          { title: "Issuance", description: "Receive FSSAI certificate." }
        ],
        pricing: { marketRate: 5000, ourPrice: 1999, label: "Registration Fees" }
      }
    ]
  },
  { id: "ip", name: "Intellectual Property", services: [] },
  { id: "gst", name: "GST", services: [] },
  { id: "income-tax", name: "Income Tax", services: [] },
  { id: "mca", name: "MCA", services: [] },
  { id: "compliance", name: "Compliance", services: [] }
];
