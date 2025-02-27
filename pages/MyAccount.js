import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import MyAccount from "@/components/sections/MyAccount";
export default function Myacount() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <PageTitle pageName="My Acount" />
        <MyAccount />
      </Layout>
    </>
  );
}
