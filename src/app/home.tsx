"use client"

import { Button } from "@/components/ui/button"
import Layout from '@/app/layout';


export default function HomePage() {
  return (
    <Layout>
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-6">Welcome to Advanced KYC Solutions</h1>
            
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Overview</h2>
                <p className="text-lg mb-4">
                We provide cutting-edge Know Your Customer (KYC) solutions that help businesses 
                verify identities, manage compliance, and mitigate risks across various industries.
                </p>
                <Button>Learn More</Button>
            </section>

            <section>
                <h2 className="text-3xl font-semibold mb-4">Call to Action</h2>
                <p className="text-lg mb-4">
                Ready to transform your customer verification process? 
                Schedule a personalized demo today and see how our solutions can work for you.
                </p>
                <Button variant="secondary">Request Demo</Button>
            </section>
        </div>
    </Layout>
  )
}