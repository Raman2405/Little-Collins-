import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'
import { Star, Clock, MapPin, Coffee, Utensils, ChevronRight } from 'lucide-react'

// Menu items data
const menuItems = [
  {
    category: "Coffee",
    items: [
      { name: "Flat White", price: "$4.50", description: "Double shot espresso with steamed milk" },
      { name: "Long Black", price: "$4.00", description: "Double shot espresso with hot water" },
      { name: "Cappuccino", price: "$4.25", description: "Espresso with steamed milk and foam" },
    ]
  },
  {
    category: "Food",
    items: [
      { name: "Avocado Toast", price: "$12.00", description: "Sourdough, smashed avo, feta, cherry tomatoes" },
      { name: "Breakfast Roll", price: "$14.00", description: "Egg, bacon, cheese, tomato relish" },
      { name: "Granola Bowl", price: "$11.00", description: "House-made granola, yogurt, seasonal fruits" },
    ]
  }
]

// Gallery images
const galleryImages = [
  { src: "/gallery-1.jpg", alt: "Coffee preparation" },
  { src: "/gallery-2.jpg", alt: "Café interior" },
  { src: "/gallery-3.jpg", alt: "Food presentation" },
  { src: "/gallery-4.jpg", alt: "Barista at work" },
]

// Testimonials data
const testimonials = [
  {
    quote: "The best coffee in Midtown! Their flat whites are consistently perfect.",
    author: "Sarah M.",
    role: "Regular Customer"
  },
  {
    quote: "Love the Australian vibe and the friendly staff. My go-to spot for meetings.",
    author: "Michael T.",
    role: "Local Business Owner"
  },
  {
    quote: "The breakfast roll is to die for! Authentic Aussie flavors in NYC.",
    author: "Emma R.",
    role: "Food Blogger"
  }
]

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpg"
              alt="Little Collins NYC café interior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>
          
          <div className="container relative z-10 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 gradient-text">
                When Melbourne met Manhattan
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Experience the perfect blend of Australian coffee culture and NYC hustle
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/menu" className="btn-primary">
                  View Menu
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section-padding bg-gradient-to-b from-background via-background/95 to-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden card">
                <Image
                  src="/about-image.jpg"
                  alt="Little Collins NYC coffee and food"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
                  Born in Midtown Manhattan
                </h2>
                <p className="text-lg text-muted-foreground">
                  Blending Melbourne's coffee culture with NYC hustle — loved by locals for over a decade.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="card p-4 flex items-center space-x-3">
                    <Star className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-medium">4.8</p>
                      <p className="text-sm text-muted-foreground">Rating</p>
                    </div>
                  </div>
                  <div className="card p-4 flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-accent" />
                    <div>
                      <p className="font-medium">10+ Years</p>
                      <p className="text-sm text-muted-foreground">In Business</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Preview Section */}
        <section className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">
                Our Menu
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience authentic Melbourne-style coffee and delicious food made with locally sourced ingredients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {menuItems.map((category) => (
                <div key={category.category} className="card p-8 space-y-6">
                  <div className="flex items-center space-x-3">
                    {category.category === "Coffee" ? (
                      <Coffee className="h-8 w-8 text-accent" />
                    ) : (
                      <Utensils className="h-8 w-8 text-accent" />
                    )}
                    <h3 className="text-2xl font-display font-semibold gradient-text">{category.category}</h3>
                  </div>
                  <div className="space-y-6">
                    {category.items.map((item) => (
                      <div key={item.name} className="flex justify-between items-start group">
                        <div>
                          <h4 className="font-medium group-hover:text-accent transition-colors">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <span className="font-medium text-accent">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/menu" className="btn-primary inline-flex items-center space-x-2">
                <span>View Full Menu</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">
                Our Space
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take a peek inside our café and see what makes Little Collins special.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="card group relative aspect-square overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 gradient-text">
                What Our Customers Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join our community of happy customers who make Little Collins their daily ritual.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6 italic text-muted-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background">
          <div className="container">
            <div className="card p-8 md:p-12 max-w-3xl mx-auto text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 gradient-text">
                  Loved by Locals
                </h2>
                <blockquote className="text-xl md:text-2xl text-muted-foreground italic mb-8">
                  "Great coffee, fast service, and the friendliest staff. It's my daily ritual!"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {1584} reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background">
          <div className="container text-center">
            <div className="card p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 gradient-text">
                  Visit Us Today
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Located in the heart of Midtown Manhattan, we're serving up Melbourne-style coffee and delicious food daily.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/order" className="btn-primary">
                    Order Online
                  </Link>
                  <a
                    href="https://maps.google.com/?q=667+Lexington+Ave+New+York+NY+10022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center justify-center space-x-2"
                  >
                    <MapPin className="h-5 w-5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 