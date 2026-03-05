import Hero from './components/Hero'
import Companies from './components/Companies'
import Categories from './components/Categories'
import Banner from './components/Banner'
import FeaturedJobs from './components/FeaturedJobs'
import LatestJobs from './components/LatestJobs'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Companies />
      <Categories />
      <Banner />
      <LatestJobs />
      <Footer />
    </div>
  )
}

export default App
