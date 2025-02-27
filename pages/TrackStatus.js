import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";

import TrackStatus from "@/components/sections/TrackStatus";
export default function Trackstatus() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="Track Status" />
        <TrackStatus />
      </Layout>
    </>
  );
}
