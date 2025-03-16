"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChartLine, FaRobot, FaChartPie, FaNewspaper, FaExchangeAlt, FaShieldAlt, FaMoon, FaSun, FaArrowRight, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        {/* Header */}
        <header className="border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FaChartLine className="text-blue-600 dark:text-blue-400 text-2xl" />
              <span className="text-xl font-bold">FinVision</span>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-8">
                <a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Features</a>
                <a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Testimonials</a>
                <a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Pricing</a>
                <a href="#faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition">FAQ</a>
              </nav>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
              </button>
              <div className="flex space-x-3">
                <Link href="/auth/login" className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                  Log in
                </Link>
                <Link href="/auth/register" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Smart Trading with <span className="text-blue-600 dark:text-blue-400">AI-Powered</span> Insights
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              FinVision combines advanced analytics, real-time market data, and AI signals to help you make better trading decisions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link href="/auth/register" className="px-8 py-4 rounded-lg bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
                Get Started <FaArrowRight />
              </Link>
              <Link href="/dashboard" className="px-8 py-4 rounded-lg bg-gray-200 dark:bg-gray-800 text-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                View Demo
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 z-10 h-20 bottom-0 top-auto"></div>
              <img 
                src="https://placehold.co/1200x630/png?text=FinVision+Dashboard+Preview" 
                alt="FinVision Dashboard Preview" 
                className="rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Everything you need to analyze markets, manage your portfolio, and execute trades with confidence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<FaRobot className="text-blue-600 dark:text-blue-400 text-4xl" />}
                title="AI Trading Signals"
                description="Receive AI-powered trading recommendations with confidence scores and detailed reasoning."
              />
              <FeatureCard 
                icon={<FaChartLine className="text-green-600 dark:text-green-400 text-4xl" />}
                title="Advanced Charts"
                description="Analyze markets with interactive charts, technical indicators, and drawing tools."
              />
              <FeatureCard 
                icon={<FaChartPie className="text-purple-600 dark:text-purple-400 text-4xl" />}
                title="Portfolio Management"
                description="Track your investments, monitor performance, and analyze asset allocation."
              />
              <FeatureCard 
                icon={<FaExchangeAlt className="text-red-600 dark:text-red-400 text-4xl" />}
                title="Trading Platform"
                description="Execute trades with real-time market data and comprehensive position management."
              />
              <FeatureCard 
                icon={<FaNewspaper className="text-yellow-600 dark:text-yellow-400 text-4xl" />}
                title="Market News"
                description="Stay updated with the latest financial news filtered by relevance and impact."
              />
              <FeatureCard 
                icon={<FaShieldAlt className="text-indigo-600 dark:text-indigo-400 text-4xl" />}
                title="Secure & Private"
                description="Your data is encrypted and protected with industry-leading security practices."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Hear from traders who have transformed their investment strategy with FinVision.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="FinVision's AI signals have completely changed how I approach the market. My returns have increased by 28% since I started using it."
                author="Sarah Johnson"
                role="Day Trader"
                avatar="https://placehold.co/100x100/png?text=SJ"
              />
              <TestimonialCard 
                quote="The portfolio analytics are incredible. I can see exactly how my investments are performing and make data-driven decisions."
                author="Michael Chen"
                role="Investment Analyst"
                avatar="https://placehold.co/100x100/png?text=MC"
              />
              <TestimonialCard 
                quote="As a beginner investor, FinVision made it easy to understand market trends and make smart investment choices."
                author="Emily Rodriguez"
                role="Retail Investor"
                avatar="https://placehold.co/100x100/png?text=ER"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your trading needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard 
                title="Basic"
                price="$29"
                period="per month"
                description="Perfect for beginners and casual traders"
                features={[
                  "Real-time market data",
                  "Basic portfolio tracking",
                  "5 AI signals per day",
                  "Standard charts",
                  "Email support"
                ]}
                buttonText="Get Started"
                buttonLink="/auth/register"
                highlighted={false}
              />
              <PricingCard 
                title="Pro"
                price="$79"
                period="per month"
                description="For active traders who need more power"
                features={[
                  "Everything in Basic",
                  "Advanced portfolio analytics",
                  "20 AI signals per day",
                  "Advanced charts with indicators",
                  "API access",
                  "Priority support"
                ]}
                buttonText="Get Started"
                buttonLink="/auth/register"
                highlighted={true}
              />
              <PricingCard 
                title="Enterprise"
                price="$199"
                period="per month"
                description="For professional traders and teams"
                features={[
                  "Everything in Pro",
                  "Unlimited AI signals",
                  "Custom indicators",
                  "Team collaboration",
                  "White-label options",
                  "Dedicated account manager"
                ]}
                buttonText="Contact Sales"
                buttonLink="#contact"
                highlighted={false}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about FinVision.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <FaqItem 
                question="How accurate are the AI trading signals?"
                answer="Our AI signals have demonstrated a 72% accuracy rate over the past year. We continuously train our models with new market data to improve performance."
              />
              <FaqItem 
                question="Can I connect my brokerage account?"
                answer="Yes, FinVision integrates with major brokerages including Alpaca, Interactive Brokers, TD Ameritrade, and more. You can connect your account in the Settings page."
              />
              <FaqItem 
                question="Is my financial data secure?"
                answer="Absolutely. We use bank-level encryption to protect your data, and we never store your brokerage passwords. We also offer two-factor authentication for added security."
              />
              <FaqItem 
                question="Can I try FinVision before subscribing?"
                answer="Yes, we offer a 14-day free trial with full access to all features. No credit card required to start your trial."
              />
              <FaqItem 
                question="What market data is available?"
                answer="FinVision provides real-time data for US stocks, ETFs, indices, forex, and cryptocurrencies. International markets are available on Pro and Enterprise plans."
              />
              <FaqItem 
                question="How do I cancel my subscription?"
                answer="You can cancel your subscription anytime from your account settings. If you cancel, you'll continue to have access until the end of your billing period."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 dark:bg-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Trading?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Join thousands of traders who are making smarter investment decisions with FinVision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/auth/register" className="px-8 py-4 rounded-lg bg-white text-blue-600 text-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2">
                Start Free Trial <FaArrowRight />
              </Link>
              <Link href="#contact" className="px-8 py-4 rounded-lg bg-blue-700 text-white text-lg font-semibold hover:bg-blue-800 transition">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <FaChartLine className="text-blue-400 text-2xl" />
                  <span className="text-xl font-bold text-white">FinVision</span>
                </div>
                <p className="mb-4">
                  Advanced trading platform with AI-powered insights for modern investors.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="https://github.com/Zweiblum66/finvision" className="text-gray-400 hover:text-white transition">
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="hover:text-blue-400 transition">Features</a></li>
                  <li><a href="#pricing" className="hover:text-blue-400 transition">Pricing</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">API</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Integrations</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-400 transition">Documentation</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Tutorials</a></li>
                  <li><a href="#faq" className="hover:text-blue-400 transition">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
                  <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} FinVision. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ quote, author, role, avatar }: { quote: string, author: string, role: string, avatar: string }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
      <div className="flex items-start mb-4">
        <div className="text-4xl text-blue-600 dark:text-blue-400">"</div>
      </div>
      <p className="mb-6 text-gray-600 dark:text-gray-300">{quote}</p>
      <div className="flex items-center">
        <img src={avatar} alt={author} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

// Pricing Card Component
function PricingCard({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  buttonText, 
  buttonLink, 
  highlighted 
}: { 
  title: string, 
  price: string, 
  period: string, 
  description: string, 
  features: string[], 
  buttonText: string, 
  buttonLink: string, 
  highlighted: boolean 
}) {
  return (
    <div className={`p-8 rounded-xl ${
      highlighted 
        ? 'bg-blue-600 text-white shadow-xl scale-105 z-10' 
        : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700'
    }`}>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className={`ml-2 ${highlighted ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>{period}</span>
      </div>
      <p className={`mb-6 ${highlighted ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}`}>{description}</p>
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className={`w-5 h-5 mr-2 ${highlighted ? 'text-blue-200' : 'text-blue-600 dark:text-blue-400'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className={highlighted ? 'text-blue-100' : ''}>{feature}</span>
          </li>
        ))}
      </ul>
      <Link href={buttonLink} className={`block w-full py-3 px-4 rounded-lg text-center font-semibold ${
        highlighted 
          ? 'bg-white text-blue-600 hover:bg-gray-100' 
          : 'bg-blue-600 text-white hover:bg-blue-700'
      } transition`}>
        {buttonText}
      </Link>
    </div>
  );
}

// FAQ Item Component
function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-4 text-left font-semibold focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`px-4 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
        <p className="text-gray-600 dark:text-gray-300">{answer}</p>
      </div>
    </div>
  );
}