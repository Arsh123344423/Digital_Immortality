import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/spline-scene"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"
import { SparklesCore } from "@/components/ui/sparkles"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { Navbar } from "@/components/ui/navbar"
import { Pricing } from "@/components/ui/pricing"
import {
  CheckCircle,
  ArrowRight,
  Brain,
  MessageSquare,
  Lightbulb,
  BookOpen,
  Calculator,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="container mx-auto px-4">
          <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-none">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

            <div className="flex h-full">
              {/* Left content */}
              <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text">
                  Chat with Einstein's Genius
                </h1>
                <p className="mt-4 text-neutral-300 max-w-lg">
                  Experience conversations with history's greatest mind. Get insights on physics, philosophy,
                  creativity, and life from an AI powered by Einstein's wisdom and revolutionary thinking.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
                    <a href="/einstein">
                      Book Consultation with Einstein
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 bg-transparent"
                    asChild
                  >
                    <a href="/einstein">Explore Einstein's Mind</a>
                  </Button>
                </div>

                <div className="flex items-center gap-8 text-sm text-neutral-400 mt-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Unlimited Conversations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Historical Accuracy</span>
                  </div>
                </div>
              </div>

              {/* Right content */}
              <div className="flex-1 relative">
                <SplineScene
                  scene="https://prod.spline.design/UbM7F-HZcyTbZ4y3/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Stuck with Complex Questions?</h2>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  Struggling to understand complex scientific concepts
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  Need creative inspiration for breakthrough thinking
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  Want philosophical insights on life's big questions
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  Seeking guidance on innovation and problem-solving
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Einstein's Wisdom at Your Fingertips</h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Deep conversations about physics, relativity, and quantum mechanics
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Creative problem-solving using Einstein's thought experiments
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Philosophical discussions on curiosity, imagination, and wonder
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Personalized learning adapted to your level of understanding
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Explore Einstein's Mind</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Dive deep into the thoughts and wisdom of history's most brilliant physicist
            </p>
          </div>

          <BentoGrid className="lg:grid-rows-3">
            <BentoCard
              name="Physics & Science"
              className="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={Brain}
              description="Explore relativity, quantum mechanics, and the fundamental laws of the universe through Einstein's revolutionary perspective and groundbreaking discoveries."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Creative Thinking"
              className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={Lightbulb}
              description="Unlock your creative potential with Einstein's famous thought experiments and innovative problem-solving approaches."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Philosophy & Life"
              className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={BookOpen}
              description="Discuss life's deeper meanings, the nature of reality, and Einstein's thoughts on curiosity, imagination, and human potential."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Mathematics"
              className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={Calculator}
              description="Master complex mathematical concepts with Einstein's intuitive explanations and elegant mathematical insights."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Interactive Learning"
              className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={MessageSquare}
              description="Engage in dynamic conversations that adapt to your curiosity level, from beginner questions to advanced theoretical discussions."
              href="#"
              cta="Learn more"
            />
          </BentoGrid>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Minds Expanded by Einstein</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/80 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <p className="text-gray-300">
                    "Chatting with Einstein helped me finally understand relativity! His explanations are so intuitive
                    and he makes complex physics feel accessible."
                  </p>
                  <div>
                    <p className="font-semibold text-white">Dr. Sarah Chen</p>
                    <p className="text-sm text-gray-400">Physics Student, MIT</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/80 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <p className="text-gray-300">
                    "Einstein's thought experiments revolutionized how I approach creative problem-solving in my
                    engineering work. Pure genius!"
                  </p>
                  <div>
                    <p className="font-semibold text-white">Michael Rodriguez</p>
                    <p className="text-sm text-gray-400">Innovation Engineer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/80 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <p className="text-gray-300">
                    "The philosophical discussions with Einstein about curiosity and imagination have completely changed
                    my perspective on learning and discovery."
                  </p>
                  <div>
                    <p className="font-semibold text-white">Emma Thompson</p>
                    <p className="text-sm text-gray-400">Philosophy Professor</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Transform Your Understanding</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the power of learning from history's greatest mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto">
                <Brain className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Deep</h3>
              <p className="text-gray-300">Understanding of Complex Concepts</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-purple-900/40 rounded-full flex items-center justify-center mx-auto">
                <Lightbulb className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Creative</h3>
              <p className="text-gray-300">Problem-Solving Breakthroughs</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-green-900/40 rounded-full flex items-center justify-center mx-auto">
                <MessageSquare className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">24/7</h3>
              <p className="text-gray-300">Access to Einstein's Wisdom</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-orange-900/40 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Infinite</h3>
              <p className="text-gray-300">Learning Possibilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Simple 3-Step Learning Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Start your journey of discovery with Einstein in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-white text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-white">Ask Your Question</h3>
              <p className="text-gray-300">
                Start a conversation with Einstein about anything - from simple curiosity to complex theories
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-white text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-white">Engage & Explore</h3>
              <p className="text-gray-300">
                Dive deep into discussions, explore thought experiments, and challenge your understanding
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-white text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-white">Transform Your Mind</h3>
              <p className="text-gray-300">
                Apply Einstein's insights to expand your thinking and approach problems with genius-level creativity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <AnimatedGradientBackground
          Breathing={true}
          gradientColors={["#0A0A0A", "#2979FF", "#FF80AB", "#FF6D00", "#FFD600", "#00E676", "#3D5AFE"]}
          gradientStops={[35, 50, 60, 70, 80, 90, 100]}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="relative h-32 w-full flex flex-col items-center justify-center">
              <div className="w-full absolute inset-0">
                <SparklesCore
                  id="ctasparticles"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                  speed={0.8}
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 relative z-20 text-balance">
                Ready to chat with Einstein?
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100" asChild>
                <a href="/einstein">
                  Book Your Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <a href="/einstein">Explore Einstein's Mind</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative py-20 bg-black border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/90" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Einstein AI</h3>
                <p className="text-gray-300 leading-relaxed">
                  Experience the brilliance of Albert Einstein through advanced AI conversations that bring history's
                  greatest mind to life.
                </p>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Topics */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Explore Topics</h4>
              <ul className="space-y-3">
                {[
                  "Physics & Relativity",
                  "Creative Thinking",
                  "Philosophy & Life",
                  "Mathematics",
                  "Thought Experiments",
                ].map((topic) => (
                  <li key={topic}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {topic}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Company</h4>
              <ul className="space-y-3">
                {[
                  { name: "About Einstein AI", href: "#" },
                  { name: "Learning Stories", href: "#testimonials" },
                  { name: "Blog", href: "#" },
                  { name: "Careers", href: "#" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:hello@einsteinai.com" className="hover:text-white transition-colors duration-300">
                    hello@einsteinai.com
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <Phone className="h-4 w-4" />
                  </div>
                  <a href="tel:+15551234567" className="hover:text-white transition-colors duration-300">
                    (555) 123-4567
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>Princeton, New Jersey</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-16 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <p className="text-gray-400 text-center lg:text-left">© 2024 Einstein AI. All rights reserved.</p>

              <div className="flex flex-wrap justify-center lg:justify-end space-x-8">
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
