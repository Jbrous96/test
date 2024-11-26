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
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img
                src="/api/placeholder/150/40"
                alt="Platform Logo"
                className="h-8"
              />
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <a
                href="#features"
                className="text-gray-700 hover:text-green-500 text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#analytics"
                className="text-gray-700 hover:text-green-500 text-sm font-medium"
              >
                Analytics
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-green-500 text-sm font-medium"
              >
                Pricing
              </a>
              <button className="bg-green-500 text-white px-6 py-2.5 rounded-md hover:bg-green-600 text-sm font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-green-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                All-In-One Website Performance Platform
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Optimize, analyze, and grow with a platform designed to empower
                creators of all sizes.
              </p>
              <div className="flex items-center space-x-6">
                <button className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 flex items-center group">
                  Try for Free
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="text-gray-700 flex items-center group">
                  Watch Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-gray-50 rounded-2xl p-8">
                <img
                  src="/api/placeholder/600/400"
                  alt="Dashboard Preview"
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Real-Time Analytics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Analyze & Optimize
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automated tools to monitor and improve web performance, including
              SEO insights, page speeds, and engagement metrics.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart className="h-6 w-6 text-green-500" />,
                title: 'Web Vitals Tracking',
                description:
                  'Get in-depth analysis of your website performance and speed metrics by country.',
              },
              {
                icon: <FileText className="h-6 w-6 text-green-500" />,
                title: 'SEO Insights',
                description:
                  'Monitor backlinks, traffic, and keyword performance from a centralized dashboard.',
              },
              {
                icon: <Settings className="h-6 w-6 text-green-500" />,
                title: 'Custom Events',
                description:
                  'Track specific user actions to gain actionable insights tailored to your needs.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            No hidden fees. Cancel anytime.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Analytics',
                price: '$0/month',
                features: [
                  'Core analytics tools',
                  'Performance reports',
                  'SEO metrics',
                ],
              },
              {
                title: 'Ad Serving',
                price: '$49/month',
                features: [
                  'Custom events',
                  'Ad revenue reports',
                  'Advanced integrations',
                ],
              },
              {
                title: 'Links',
                price: '$19/month',
                features: [
                  'Short link tracking',
                  'Link engagement data',
                  'Country-level insights',
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {plan.title}
                </h3>
                <div className="text-4xl font-bold text-green-500 mb-4">
                  {plan.price}
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
