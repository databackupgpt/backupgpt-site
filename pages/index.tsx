export default function Home() {
  return (
    <main className="font-sans">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white py-4 shadow">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Backup GPT Logo"
              className="w-40 h-auto"
            />
          </div>
          <nav className="hidden md:flex gap-6 text-white/90 font-medium">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How It Works</a>
            <a href="#use" className="hover:text-white">Use Cases</a>
          </nav>
          <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg">
            Download
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="flex flex-col justify-center items-center bg-gradient-to-b from-sky-500 to-cyan-400 text-white py-24 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight">
          Free AI-Powered Data Protection for Personal and Business
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-white/90">
          Intelligent AI backup assistant powered by a US-Compliant Backup Provider.
          Secure your VMs, servers, PCs, Microsoft 365, and cloud infrastructure with enterprise-grade protection.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-slate-900 hover:bg-white/90 px-6 py-3 rounded-lg font-medium">
            ⬇️ Download Now
          </button>
          <button className="bg-white/10 text-white hover:bg-white/20 px-6 py-3 rounded-lg font-medium border border-white/30">
            Learn More
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
            Our Complete Feature Set
          </h2>
          <p className="text-slate-600 text-center mt-3">
            You want a feature? Chances are we have it!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              "Most Secure and US-Compliant",
              "Easy to Use and Setup",
              "No Cost – Completely Free",
              "Back up PCs",
              "Back up Folders and Files",
              "Backup Servers (Physical and Virtual)"
            ].map((title, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-slate-600 text-sm">
                  Enterprise-grade backup, easy setup, and full protection for servers, PCs, and cloud — all free.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
            How It Works
          </h2>
          <p className="text-slate-600 text-center mt-3">
            Get started with enterprise-grade backup in four simple steps
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              "Download the Backup Software",
              "Choose Your Use Case",
              "Configure Your Backup",
              "Get Your Free License"
            ].map((s, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow">
                <div className="text-6xl font-black text-slate-200 select-none">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="-mt-10 text-xl font-semibold">{s}</h3>
                <p className="mt-2 text-slate-600 text-sm">
                  Follow the setup wizard to protect your data fast and free.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR EVERYONE */}
      <section id="use" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
            Built for Everyone
          </h2>
          <p className="text-slate-600 text-center mt-3">
            Whether you're protecting personal data or enterprise infrastructure, we've got you covered
          </p>
          <div className="grid lg:grid-cols-2 gap-6 mt-12">
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-xl font-semibold">Personal Use</h3>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1 text-sm">
                <li>Full machine backup</li>
                <li>File-level recovery</li>
                <li>Automated schedules</li>
                <li>Local & cloud storage</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-xl font-semibold">Business Use</h3>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1 text-sm">
                <li>VMware & Hyper-V backup</li>
                <li>Physical & cloud server protection</li>
                <li>Microsoft 365 & AWS EC2 backup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-sky-500 to-cyan-400 text-white text-center px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Ready to Protect Your Data?
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Download the backup solution now and get started with enterprise-grade data protection. After installation, request your free license to continue beyond the trial period.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-slate-900 hover:bg-white/90 px-6 py-3 rounded-lg font-medium">
            ⬇️ Download Now
          </button>
          <button className="bg-white/10 text-white hover:bg-white/20 px-6 py-3 rounded-lg font-medium border border-white/30">
            Request Free License ↗
          </button>
        </div>
        <p className="mt-6 text-white/80 text-sm">
          No credit card required • Free forever • US compliant
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-slate-700 text-sm">
          <div>
            <img
              src="/logo.jpg"
              alt="Backup GPT Logo"
              className="w-44 h-auto mb-4"
            />
            <p>
              Free Data Protection for Personal and Business powered by{" "}
              <strong>US-Compliant Backup Provider</strong>.
            </p>
            <div className="mt-4 space-y-1 text-slate-600">
              <p><strong>Mike Wynn</strong> – CEO</p>
              <p><a href="mailto:mike.wynn@databackupgpt.com" className="hover:underline">mike.wynn@databackupgpt.com</a></p>
              <p>+44 1252 856230</p>
              <p>
                Unit 11, The Enterprise Centre,<br />
                Coxbridge Business Park,<br />
                Alton Road, Farnham, GU10 5EH, UK
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Product</h3>
            <ul className="space-y-1">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#how" className="hover:underline">How It Works</a></li>
              <li><a href="#use" className="hover:underline">Use Cases</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Download</a></li>
              <li><a href="#" className="hover:underline">Request License</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Connect</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t py-4 text-center text-slate-500 text-sm">
          © 2025 Backup GPT. All rights reserved. · Privacy Policy · Terms of Service
        </div>
      </footer>
    </main>
  );
}
