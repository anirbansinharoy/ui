export default function FeaturesPage() {
    const features = [
      {
        title: "Identity Verification",
        description: "Advanced document verification and biometric authentication",
        details: [
          "Multi-document cross-referencing",
          "Facial recognition technology",
          "Global database checks"
        ]
      },
      {
        title: "Compliance Management",
        description: "Comprehensive regulatory adherence solutions",
        details: [
          "Global KYC standards compliance",
          "Automated AML screening",
          "Real-time regulatory updates"
        ]
      },
      {
        title: "Risk Assessment",
        description: "Proactive risk evaluation and monitoring",
        details: [
          "AI-powered risk scoring",
          "Continuous customer risk profiling",
          "Instant alerting mechanisms"
        ]
      }
    ]
  
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Features</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(feature => (
            <div key={feature.title} className="border p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">{feature.title}</h2>
              <p className="mb-4">{feature.description}</p>
              <ul className="list-disc pl-5">
                {feature.details.map(detail => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  }