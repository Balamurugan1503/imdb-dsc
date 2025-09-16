export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">Welcome to Your App</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your application is now running successfully. The 404 error has been resolved.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Get Started
            </button>
            <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
