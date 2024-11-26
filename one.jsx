import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  ArrowRight,
  Shield,
  Users,
  BarChart,
  FileText,
  Settings,
  Globe,
  Lock,
  Zap,
  PieChart,
  Clock,
  MessageSquare,
  Activity
} from 'lucide-react';

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src="/api/placeholder/150/40" alt="Xtreme MortgageWorx" className="h-8" />
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <a href="#platform" className="text-gray-700 hover:text-green-500 text-sm font-medium">Platform</a>
              <a href="#features" className="text-gray-700 hover:text-green-500 text-sm font-medium">Features</a>
              <a href="#security" className="text-gray-700 hover:text-green-500 text-sm font-medium">Security</a>
              <a href="#integrations" className="text-gray-700 hover:text-green-500 text-sm font-medium">Integrations</a>
              <button className="bg-gray-900 text-white px-6 py-2.5 rounded-md hover:bg-gray-800 text-sm font-medium">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                The Future of Mortgage Management is Here
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the most sophisticated CRM platform built exclusively for mortgage professionals. Streamline workflows, automate tasks, and close more deals.
              </p>
              <div className="flex items-center space-x-6">
                <button className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 flex items-center group">
                  Get Started 
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="text-gray-700 flex items-center group">
                  Watch Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl p-8">
                <img src="/api/placeholder/600/400" alt="Dashboard Preview" className="rounded-lg shadow-2xl" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Live Pipeline Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "$50B+", label: "Loans Processed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "10,000+", label: "Active Users" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Advanced Mortgage Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful tools designed specifically for mortgage professionals
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500/10 to-gray-800 rounded-2xl p-8">
                <img src="/api/placeholder/600/400" alt="Pipeline View" className="rounded-lg shadow-2xl" />
              </div>
              <div className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center space-x-3">
                  <Activity className="h-5 w-5" />
                  <span className="text-sm font-medium">Live Updates</span>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              {[
                {
                  icon: <PieChart className="h-6 w-6 text-green-500" />,
                  title: "Smart Pipeline Management",
                  description: "Visualize and track every stage of your mortgage applications with automated status updates and milestone tracking."
                },
                {
                  icon: <Clock className="h-6 w-6 text-green-500" />,
                  title: "Automated Follow-ups",
                  description: "Set intelligent reminders and automated communications to keep clients engaged throughout the process."
                },
                {
                  icon: <MessageSquare className="h-6 w-6 text-green-500" />,
                  title: "Client Communication Hub",
                  description: "Centralize all client interactions with integrated email, SMS, and secure messaging capabilities."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-700 rounded-lg p-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/api/placeholder/150/40" alt="Xtreme MortgageWorx" className="h-8 mb-6" />
              <p className="text-sm">
                Powered by advanced technology to help mortgage professionals succeed.
              </p>
            </div>
            {[
              {
                title: "Product",
                links: ["Features", "Security", "Updates"]
              },
              {
                title: "Company",
                links: ["About", "Contact", "Blog"]
              },
              {
                title: "Resources",
                links: ["Documentation", "Support", "API"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, lIndex) => (
                    <li key={lIndex}>
                      <a href="#" className="hover:text-white">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
