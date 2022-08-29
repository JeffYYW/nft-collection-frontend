import Link from "next/link";
import React, { useContext } from "react";
import { useConnectWallet } from "../../contexts/ConnectWalletContext";

const Home: React.FC = () => {
  const { currentAccount } = useConnectWallet();

  return (
    <div>
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
