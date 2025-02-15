import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import About2 from "@/components/sections/About2"
import Services2 from "@/components/sections/Services2"
import Funfact2 from "@/components/sections/Funfact2"
import CallToAction2 from "@/components/sections/CallToAction2"
import Project1 from "@/components/sections/Project1"
import CallToAction1 from "@/components/sections/CallToAction1"

export default function PageAbout() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="About Us" />

    <About2 />
    <Services2 />
    <Funfact2 />
    <CallToAction2 />
    <Project1 />
    <CallToAction1 />
    </Layout>
    </>
  )
}