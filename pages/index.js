import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import CallToAction1 from "@/components/sections/CallToAction1"
import Contact1 from "@/components/sections/Contact1"
import Features1 from "@/components/sections/Features1"
import Services1 from "@/components/sections/Services1"
import Slider1 from "@/components/sections/Slider1"
import Subscription1 from "@/components/sections/Subscription1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Video1 from "@/components/sections/Video1"
import WhyChooseUs1 from "@/components/sections/WhyChooseUs1"
export default function Home() {

    return (
      <>
        <Layout headerStyle={1} footerStyle={1}>
          <Slider1 />
          <Features1 />
          <About1 />
          {/* <Subscription1 /> */}
          <Services1 />
          {/* <Clients1 /> */}
          {/* <About1T2 /> */}
          <Video1 />
          <Testimonial1 />
          {/* <Project1 /> */}
          <CallToAction1 />
          <WhyChooseUs1 />
          {/* <News1 /> */}
          <Contact1 />
        </Layout>
      </>
    );
}