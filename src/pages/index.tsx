import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <h1>Hello World</h1>
      </main>
    </Layout>
  );
};

export default Home;
