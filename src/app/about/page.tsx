export default function AboutPage() {
    const leadership = [
      { name: "Jane Doe", title: "CEO", bio: "20 years in fintech and compliance" },
      { name: "John Smith", title: "CTO", bio: "Expert in AI and identity verification" },
      { name: "Emily Chen", title: "Chief Compliance Officer", bio: "Global regulatory expert" }
    ]
  
    return (
      <div className="container mx-auto px-4 py-16">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Company Overview</h1>
          <p className="text-lg">
            Founded in 2015, our company is dedicated to revolutionizing KYC processes 
            through innovative technology and comprehensive compliance solutions.
          </p>
        </section>
  
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map(leader => (
              <div key={leader.name} className="border p-6 rounded-lg">
                <h3 className="text-2xl font-medium">{leader.name}</h3>
                <p className="font-semibold">{leader.title}</p>
                <p className="mt-3">{leader.bio}</p>
              </div>
            ))}
          </div>
        </section>
  
        <section>
          <h2 className="text-3xl font-semibold mb-6">Careers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {["Software Engineering", "Compliance Specialist", "Customer Success"].map(role => (
              <div key={role} className="border p-6 rounded-lg">
                <h3 className="text-2xl font-medium mb-3">{role}</h3>
                <p>Join our innovative team and help shape the future of identity verification</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }