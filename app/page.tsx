'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('videos');

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Width with Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]" />
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6">
                <div className="glass px-4 py-2 rounded-full inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--color-success)] rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Join 10,000+ Creators</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Create, Share,
                <br />
                <span className="gradient-text">Inspire</span>
              </h1>

              <p className="text-xl text-[var(--color-text-secondary)] mb-8 max-w-xl">
                The modern platform for creators to share videos, showcase photos, and build a community around their content.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/auth/signup">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary text-lg px-8 py-4"
                  >
                    Start Creating
                  </motion.button>
                </Link>
                <Link href="/videos">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-glass text-lg px-8 py-4"
                  >
                    Explore Content
                  </motion.button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { value: '10K+', label: 'Creators' },
                  { value: '50K+', label: 'Videos' },
                  { value: '100K+', label: 'Photos' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-[var(--color-text-secondary)]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="card-glass p-6 aspect-square flex flex-col justify-between"
                  >
                    <div className="text-4xl">🎥</div>
                    <div>
                      <div className="text-2xl font-bold mb-1">HD Videos</div>
                      <div className="text-sm text-[var(--color-text-secondary)]">
                        Stream in high quality
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="card-glass p-6 aspect-square flex flex-col justify-between mt-8"
                  >
                    <div className="text-4xl">📸</div>
                    <div>
                      <div className="text-2xl font-bold mb-1">Photos</div>
                      <div className="text-sm text-[var(--color-text-secondary)]">
                        Beautiful galleries
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="card-glass p-6 aspect-square flex flex-col justify-between"
                  >
                    <div className="text-4xl">💬</div>
                    <div>
                      <div className="text-2xl font-bold mb-1">Engage</div>
                      <div className="text-sm text-[var(--color-text-secondary)]">
                        Connect with fans
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="card-glass p-6 aspect-square flex flex-col justify-between mt-8"
                  >
                    <div className="text-4xl">🎯</div>
                    <div>
                      <div className="text-2xl font-bold mb-1">Discover</div>
                      <div className="text-sm text-[var(--color-text-secondary)]">
                        Personalized feed
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Asymmetric Layout */}
      <section className="py-24 bg-[var(--color-bg-secondary)]">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)]">
              Powerful tools designed for modern content creators
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Large Feature Card */}
            <div className="lg:col-span-2 lg:row-span-2">
              <motion.div
                whileHover={{ y: -5 }}
                className="card-glass p-8 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-teal)] flex items-center justify-center text-3xl mb-6 shadow-md">
                    🎬
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Professional Video Streaming</h3>
                  <p className="text-lg text-[var(--color-text-secondary)] mb-6">
                    Upload and stream videos in stunning HD quality. Our platform supports all major formats with adaptive bitrate streaming for smooth playback on any device.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="glass px-3 py-1 rounded-full text-sm">HD Quality</span>
                  <span className="glass px-3 py-1 rounded-full text-sm">Fast Upload</span>
                  <span className="glass px-3 py-1 rounded-full text-sm">All Formats</span>
                  <span className="glass px-3 py-1 rounded-full text-sm">Adaptive Streaming</span>
                </div>
              </motion.div>
            </div>

            {/* Small Feature Cards */}
            <motion.div
              whileHover={{ y: -5 }}
              className="card-glass p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-success)] flex items-center justify-center text-2xl mb-4 shadow-md">
                📱
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile Optimized</h3>
              <p className="text-[var(--color-text-secondary)]">
                Perfect experience on all devices
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card-glass p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-warning)] flex items-center justify-center text-2xl mb-4 shadow-md">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-[var(--color-text-secondary)]">
                Optimized for speed and performance
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card-glass p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-2xl mb-4 shadow-md">
                🔒
              </div>
              <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
              <p className="text-[var(--color-text-secondary)]">
                Your content is protected and safe
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card-glass p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-success)] to-[var(--color-teal)] flex items-center justify-center text-2xl mb-4 shadow-md">
                📊
              </div>
              <h3 className="text-xl font-bold mb-2">Analytics</h3>
              <p className="text-[var(--color-text-secondary)]">
                Track views and engagement
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Tabs Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Amazing Content
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)]">
              Discover what creators are sharing
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {['videos', 'photos', 'trending'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-teal)] text-white shadow-md'
                    : 'glass hover:bg-[var(--color-bg-tertiary)]'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item * 0.1 }}
                whileHover={{ y: -5 }}
                className="card-glass overflow-hidden group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-teal)] opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="p-4">
                  <h3 className="font-bold mb-2">Sample {activeTab} {item}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Explore amazing content from creators
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={`/${activeTab}`}>
              <button className="btn btn-primary px-8 py-3">
                View All {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width with Background */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-teal)] opacity-10" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to share your story?
              </h2>
              <p className="text-xl text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
                Join thousands of creators who are already building their audience on StreamShare
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/auth/signup">
                  <button className="btn btn-primary text-lg px-10 py-4">
                    Get Started Free
                  </button>
                </Link>
                <Link href="/videos">
                  <button className="btn btn-glass text-lg px-10 py-4">
                    Watch Demo
                  </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--color-text-secondary)]">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-success)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-success)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--color-success)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
