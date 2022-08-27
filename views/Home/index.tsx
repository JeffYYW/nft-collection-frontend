import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Just a playground for some projects
      </h1>
      <ul>
        <li>
          <Link href="/nft">NFT Collection</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
