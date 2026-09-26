import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { GitHubStats } from './components/GitHubStats'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1200px] mx-auto px-6 w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubStats />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
