import { Button } from "@/components/ui/button"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$99/month",
      features: [
        "Basic Identity Verification",
        "Limited Compliance Checks",
        "Email Support"
      ]
    },
    {
      name: "Professional",
      price: "$299/month",
      features: [
        "Advanced Identity Verification",
        "Comprehensive Compliance Checks",
        "Priority Support",
        "Monthly Reporting"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Full-suite KYC Solutions",
        "Unlimited Verification",
        "Dedicated Account Manager",
        "24/7 Support"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Pricing</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map(plan => (
          <div key={plan.name} className="border p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Button>Choose Plan</Button>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <h2 className="text-3xl font-semibold mb-4">Need a Custom Solution?</h2>
        <p className="mb-6">Contact our sales team for a tailored pricing plan</p>
        <Button variant="secondary">Request Custom Quote</Button>
      </div>
    </div>
  )
}