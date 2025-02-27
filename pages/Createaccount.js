import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import CreateAccount from "@/components/sections/CreateAccount";
export default function Createaccount() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="Create Account" />
        <CreateAccount />
      </Layout>
    </>
  );
}
