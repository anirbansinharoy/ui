export const sections = [
  {
    title: "Home",
    href: "/",
    description: "Introduce services and key benefits",
    subsections: [
      { 
        title: "Overview", 
        href: "#overview", 
        description: "Comprehensive introduction to services" 
      },
      { 
        title: "Call-to-Action (CTA)", 
        href: "#cta", 
        description: "Encourage visitors to learn more or request a demo" 
      }
    ]
  },
  {
    title: "Solutions",
    href: "/solutions",
    description: "Tailored KYC and compliance solutions",
    subsections: [
      { 
        title: "By Industry", 
        href: "/solutions/industry", 
        description: "Solutions for banking, fintech, insurance, e-commerce" 
      },
      { 
        title: "By Use Case", 
        href: "/solutions/use-case", 
        description: "Onboarding, AML compliance, fraud prevention solutions" 
      }
    ]
  },
  {
    title: "Features",
    href: "/features",
    description: "Advanced KYC and compliance technologies",
    subsections: [
      { 
        title: "Identity Verification", 
        href: "/features#identity-verification", 
        description: "Document verification, biometric checks, database cross-referencing" 
      },
      { 
        title: "Compliance Management", 
        href: "/features#compliance-management", 
        description: "Global KYC and AML regulation adherence" 
      },
      { 
        title: "Risk Assessment", 
        href: "/features#risk-assessment", 
        description: "Advanced risk evaluation and monitoring systems" 
      }
    ]
  },
  {
    title: "Resources",
    href: "/",
    description: "Insights and knowledge sharing",
    subsections: [
      { 
        title: "Blog", 
        href: "/resources/blog", 
        description: "Industry trends and regulatory updates" 
      },
      { 
        title: "Case Studies", 
        href: "/resources/case-studies", 
        description: "Real-world client implementation examples" 
      },
      { 
        title: "Whitepapers", 
        href: "/resources/whitepapers", 
        description: "In-depth KYC challenge analyses" 
      }
    ]
  },
  {
    title: "Pricing",
    href: "/pricing",
    description: "Flexible service tiers",
    subsections: [
      { 
        title: "Plans", 
        href: "/pricing#plans", 
        description: "Service tiers with detailed features" 
      },
      { 
        title: "Custom Quotes", 
        href: "/pricing#custom-quotes", 
        description: "Tailored solution pricing" 
      }
    ]
  },
  {
    title: "About",
    href: "/about",
    description: "Company background and culture",
    subsections: [
      { 
        title: "Company Overview", 
        href: "/about#overview", 
        description: "Mission, vision, and company history" 
      },
      { 
        title: "Leadership Team", 
        href: "/about#leadership", 
        description: "Key executives and their backgrounds" 
      },
      { 
        title: "Careers", 
        href: "/about#careers", 
        description: "Job opportunities and company culture" 
      }
    ]
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with our team",
    subsections: [
      { 
        title: "Support", 
        href: "/contact#support", 
        description: "Customer assistance channels" 
      },
      { 
        title: "Sales Inquiries", 
        href: "/contact#sales", 
        description: "Contact details for potential clients" 
      },
      { 
        title: "Office Locations", 
        href: "/contact#locations", 
        description: "Global office addresses and maps" 
      }
    ]
  }
]

export type Section = typeof sections[number]
export type Subsection = Section['subsections'][number]