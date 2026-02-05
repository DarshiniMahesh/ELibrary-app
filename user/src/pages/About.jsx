import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-amazon-light">
      <Header />
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero Section */}
        <section className="text-center mb-16 lg:mb-24">
          <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-amazon-blue to-indigo-700 bg-clip-text text-transparent mb-6">
            Library App
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Making reading accessible, fast, and enjoyable—bringing books, authors, and knowledge together in one modern place.
          </p>
        </section>

        {/* Mission & Inspiration */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-10 border border-white/50 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-2 h-8 bg-amazon-blue rounded-full mr-3"></span>
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Library App democratizes access to knowledge with seamless search, secure uploads, and personalized reading experiences. Built for readers, builders, and explorers everywhere.
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-xl p-8 lg:p-10 border border-indigo-100 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-r from-amazon-blue to-indigo-600 rounded-full mr-3"></span>
              The Inspiration
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Created to showcase scalable full-stack architecture—from secure PDF uploads to real-time search. A project blending React, Node.js, and ML-ready design for real-world impact.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🔍", title: "Advanced Search", desc: "Find books by title, author, language, or category with live filters." },
              { icon: "📤", title: "Secure Uploads", desc: "Share PDFs with covers; metadata extraction and validation included." },
              { icon: "❤️", title: "Bookmarks & Progress", desc: "Save favorites, track reading, and manage your library." },
              { icon: "⚡", title: "Fast Performance", desc: "Optimized for speed with pagination, caching, and responsive UI." },
              { icon: "📱", title: "Mobile-First", desc: "Works flawlessly on phones, tablets, and desktops." },
              { icon: "🔒", title: "Secure & Scalable", desc: "Built with authentication-ready backend and production-grade security." }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amazon-blue transition-colors">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "React.js + Tailwind CSS",
              "Node.js + Express.js",
              "SQLite + MangoDB",
              "PDF Processing + Reading"
            ].map((tech, idx) => (
              <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border">
                <p className="font-mono text-lg font-semibold text-gray-900">{tech}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 italic">Designed for easy deployment, reproducibility, and production scaling.</p>
        </section>

        {/* Developer & Contact */}
       
<section className="text-center mb-16">
  <div className="bg-white rounded-2xl shadow-2xl p-10 lg:p-12 max-w-2xl mx-auto border border-gray-100">
    
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8 mb-8">
      <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          DMS
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-bold text-gray-900 mb-1">Darshini M S</h3>
          <a href="mailto:darshinims00@gmail.com" className="text-indigo-600 hover:text-indigo-700 font-semibold text-lg block">
            darshinims00@gmail.com
          </a>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8">
      <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">🤝 Contributor</h4>
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          DM
        </div>
        <div className="text-center lg:text-left">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Deepak M</h4>
          <a href="mailto:deepakmallesh2004@gmail.com" className="text-indigo-600 hover:text-indigo-700 font-semibold text-lg block">
            deepakmallesh2004@gmail.com
          </a>
        </div>
      </div>
    </div>

    <p className="text-sm text-gray-500 mt-8">Feedback? Contributions? Let's connect!</p>
  </div>
</section>

      </main>
      <Footer />
    </div>
  );
}
