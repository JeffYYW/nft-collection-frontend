import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { CONTRACT_ADDRESS } from "../../config/constants/origamiSwords";
import { OrigamiNFT__factory } from "../../typechain-types";
import { OrigamiNFT } from "../../typechain-types/contracts/OrigamiNFT";
import useGetTokensByAddress from "./hooks/useGetTokensByAddress";
import useGetRecentlyMintedTokens from "./hooks/useGetRecentlyMintedTokens";
import Spinner from "../../components/Spinner";
import { useConnectWallet } from "../../contexts/ConnectWalletContext";
import useGetContract from "./hooks/useGetContract";
import truncateHash from "../../utils/truncateHash";
import { spawn } from "child_process";
import useGetAccountBalance from "../../hooks/useGetAccountBalance";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

const Nft: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { currentAccount } = useConnectWallet();
  const { nftContract } = useGetContract();

  const { nftObjects } = useGetTokensByAddress(
    nftContract as OrigamiNFT,
    currentAccount as string
  );

  const { recentlyMintedTokens } = useGetRecentlyMintedTokens(
    nftContract as OrigamiNFT
  );

  // console.log("nftObjects", nftObjects);
  // console.log("get recently minted tokens", recentlyMintedTokens);

  // Contract effects
  useEffect(() => {
    const onNFTMint = async (sender: string, tokenId: number) => {
      console.log(
        `CharacterNFTMinted - sender: ${sender} tokenId: ${tokenId}}`
      );

      if (nftContract) {
        console.log(
          `Your NFT is all done -- see it here: https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId}`
        );
        alert(
          `Your NFT is all done -- see it here: https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId}`
        );
      }
    };

    if (nftContract) {
      // Setup NFT Minted Listener
      nftContract.on("NewOrigamiNFTMinted", onNFTMint);
    }

    return () => {
      // When your component unmounts, let's make sure to clean up this listener

      if (nftContract) {
        nftContract.off("NewOrigamiNFTMinted", onNFTMint);
      }
    };
  }, [nftContract]);

  const minNft = async () => {
    try {
      if (nftContract) {
        setIsLoading(true);
        let txn = await nftContract?.mintOrigamiNFT();
        await txn?.wait();
        setIsLoading(false);
        console.log("mint txn", txn);
      }
    } catch (error) {
      console.log("error minting nft");
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="container flex flex-col items-center">
        <h1 className="text-4xl m-8 text-center">
          Pastel Origami Sword Collection
        </h1>
        <button
          type="button"
          className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          onClick={minNft}
        >
          Mint NFT
        </button>
      </div>

      <section className="bg-slate-50 my-8">
        <h2 className="text-3xl my-4 text-center">
          {truncateHash(currentAccount)}'s NFT Tokens
        </h2>
        {isLoading && <Spinner text={"Minting in progress..."} />}
        <ul className="grid grid-cols-3 gap-4">
          {nftObjects.length === 0 && (
            <span>{"Can't find any tokens belonging to this address"}</span>
          )}
          {nftObjects &&
            nftObjects.map((nft) => (
              <li key={nft.name}>
                <h3>{nft.name}</h3>
                <Image
                  src={nft.image}
                  alt="nft image"
                  width={300}
                  height={300}
                />
                <h4>{nft.description}</h4>
                {nft.attributes.map((attr, index) => (
                  <h5 key={index}>
                    {attr.trait_type}: {attr.value}
                  </h5>
                ))}
              </li>
            ))}
        </ul>
      </section>
      <section className="my-8">
        <h2 className="text-3xl my-4 text-center">Recently Minted Tokens</h2>
        <ul className="grid grid-cols-3 gap-4">
          {recentlyMintedTokens.length === 0 && (
            <span>{"Can't find any recently minted tokens"}</span>
          )}
          {recentlyMintedTokens &&
            recentlyMintedTokens.map((nft) => (
              <li key={nft.name}>
                <h3>{nft.name}</h3>
                <Image
                  src={nft.image}
                  alt="nft image"
                  width={300}
                  height={300}
                />
                <h4>{nft.description}</h4>
                {nft.attributes.map((attr, index) => (
                  <h5 key={index}>
                    {attr.trait_type}: {attr.value}
                  </h5>
                ))}
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default Nft;
