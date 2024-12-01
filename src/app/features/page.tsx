import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Support</h2>
            <p className="mb-4">Need help? Our support team is available:</p>
            <p>Email: support@company.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Office Locations</h2>
            <div>
              <p>Headquarters: New York, USA</p>
              <p>European Office: London, UK</p>
              <p>Asia Pacific: Singapore</p>
            </div>
          </section>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-6">Sales Inquiries</h2>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input placeholder="Email Address" type="email" />
            <Input placeholder="Company Name" />
            <Textarea placeholder="Your Message" rows={5} />
            <Button type="submit">Send Inquiry</Button>
          </form>
        </div>
      </div>
    </div>
  )
}