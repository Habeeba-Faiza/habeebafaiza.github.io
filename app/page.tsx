import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Achievements } from '@/components/Achievements'
import { Experience } from '@/components/Experience'
import { Expertise } from '@/components/Expertise'
import { ThoughtLeadership } from '@/components/ThoughtLeadership'
import { Portfolio } from '@/components/Portfolio'
import { Contact, Footer } from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Achievements />
      <Experience />
      <Expertise />
      <ThoughtLeadership />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
