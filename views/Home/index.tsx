import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      Just a playground for some projects
      <ul>
        <li>
          <Link href="/nft">NFT Collection</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
