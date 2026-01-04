import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Featured Content Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in-up">
              Discover Amazing Content
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto animate-fade-in-up">
              Explore trending videos and stunning photos from creators around the world
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: '🎥',
                title: 'HD Video Streaming',
                description: 'Watch high-quality videos with smooth playback and zero buffering',
                gradient: 'from-[var(--color-primary)] to-[var(--color-teal)]',
              },
              {
                icon: '📸',
                title: 'Photo Galleries',
                description: 'Browse beautiful photo collections in stunning high resolution',
                gradient: 'from-[var(--color-teal)] to-[var(--color-success)]',
              },
              {
                icon: '💬',
                title: 'Social Features',
                description: 'Like, comment, and interact with your favorite creators',
                gradient: 'from-[var(--color-accent)] to-[var(--color-warning)]',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="card-glass group hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[var(--color-text-primary)]">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: 'var(--gradient-hero)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite',
          }}
        />
        <div className="container relative z-10">
          <div className="glass-strong rounded-2xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Ready to Start Creating?
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
              Join thousands of creators sharing their stories and connecting with audiences worldwide
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/auth/signup">
                <button className="btn btn-primary text-lg px-8 py-4">
                  Create Free Account
                </button>
              </a>
              <a href="/videos">
                <button className="btn btn-glass text-lg px-8 py-4">
                  Browse Videos
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
