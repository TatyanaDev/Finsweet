import WebsiteDevelopment from '../../Components/Home/WebsiteDevelopment'
import QuestionsAsked from '../../Components/Home/QuestionsAsked'
import OurProjects from '../../Components/Home/OurProjects'
import HowWeWork from '../../Components/Home/HowWeWork'
import Features from '../../Components/Home/Features'
import Navbar from '../../Components/Shared/Navbar'
import Welcome from '../../Components/Home/Welcome'
import Reviews from '../../Components/Home/Reviews'

export default function Home () {
  return (
    <>
      <Navbar />
      <Welcome />
      <HowWeWork />
      <OurProjects />
      <Features />
      <Reviews />
      <QuestionsAsked />
      <WebsiteDevelopment />
    </>
  )
}
