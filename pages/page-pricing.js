import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Pricing from "@/components/sections/innerpages/Pricing"

export default function PagePricing() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName="Pricing" />

    <Pricing />
    </Layout>
    </>
  )
}