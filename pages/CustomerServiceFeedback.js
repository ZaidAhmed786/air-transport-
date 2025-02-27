import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import CustomerServiceFeedback from "@/components/sections/CustomerServiceFeedback";
export default function CSFeedback() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="CustomerServiceFeedback" />
        <CustomerServiceFeedback />
      </Layout>
    </>
  );
}
