import OurProjects from '../../Components/Home/OurProjects'
import HowWeWork from '../../Components/Home/HowWeWork'
import Navbar from '../../Components/Shared/Navbar'
import Welcome from '../../Components/Home/Welcome'

export default function Home () {
  return (
    <>
      <Navbar />
      <Welcome />
      <HowWeWork />
      <OurProjects />
    </>
  )
}
