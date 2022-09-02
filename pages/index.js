import Head from "next/head";
import Context from "../src/components/Context/Context";
import ReduxTool from "../src/components/ReduxTool";
import Zustand from "../src/components/Zustand/Zustand";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-10 my-3 col-lg-4">
            <ReduxTool />
          </div>
          <div className="col-10 my-3 col-lg-4">
            <Zustand />
          </div>
          <div className="col-10 my-3 col-lg-4">
            <Context />
          </div>
        </div>
      </div>
    </div>
  );
}
