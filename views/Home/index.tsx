import Link from "next/link";
import React, { useContext } from "react";
import { useConnectWallet } from "../../contexts/ConnectWalletContext";
import Head from "next/head";

const Home: React.FC = () => {
  const { currentAccount } = useConnectWallet();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">
        Just a playground for some projects
      </h1>
      <h2>context: {currentAccount}</h2>
      <ul>
        <li className="underline">
          <Link href="/nft">NFT Collection</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
