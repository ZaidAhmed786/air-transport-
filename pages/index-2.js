import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import About2T2 from "@/components/sections/About2T2"
import Banner2 from "@/components/sections/Banner2"
import CallToAction2 from "@/components/sections/CallToAction2"
import Clients2 from "@/components/sections/Clients2"
import Contact2 from "@/components/sections/Contact2"
import Funfact2 from "@/components/sections/Funfact2"
import News2 from "@/components/sections/News2"
import Progress2 from "@/components/sections/Progress2"
import Project2 from "@/components/sections/Project2"
import Services2 from "@/components/sections/Services2"
import Team2 from "@/components/sections/Team2"
import WhyChooseUs2 from "@/components/sections/WhyChooseUs2"
export default function Home2() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <Banner2 />
                <About2 />
                <Services2 />
                <About2T2 />
                <Funfact2 />
                <CallToAction2 />
                <Project2 />
                <WhyChooseUs2 />
                <Team2 />
                <Progress2 />
                <Contact2 />
                <News2 />
                <Clients2 />
            </Layout>
        </>
    )
}