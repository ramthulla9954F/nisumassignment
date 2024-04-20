import { wrapper } from "@/redux/Store";
import {
  setDeviceSpecification,
  setPageSpecification,
} from "@/redux/actions/DeviceActions";
import Layout from "@/components/partials/Layout";
import HomeBanner from "@/components/banners/HomeBanner";
import DataTable from "@/components/tables/DataTable";
import { _getTableData } from "@/services/Services";
import { useUserAgent } from "next-useragent";

function Home({ result }) {
  return (
    <Layout>
      <HomeBanner />
      <DataTable data={result} />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const ua = useUserAgent(context.req.headers["user-agent"]);
    await store.dispatch(setDeviceSpecification(ua));
    const tableData = await _getTableData();
    let result = []
    if (tableData.status == 200) {
      result = tableData.data.data
    }
    await store.dispatch(
      setPageSpecification({
        title: "Nisum",
        description: "Nisum...",
      })
    );
    return {
      props: { result },
    };
  }
);

export default Home;
