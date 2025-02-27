import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import TrackOrder2 from "@/components/sections/TrackOrder2";
export default function pageProjectGrid() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="Track" />
        <TrackOrder2 />
      </Layout>
    </>
  );
}
