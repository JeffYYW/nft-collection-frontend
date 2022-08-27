import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { ethers } from "ethers";
import origamiNFT from "../../config/abi/OrigamiNFT.json";
import { CONTRACT_ADDRESS } from "../../config/constants/origamiSwords";
import { OrigamiNFT__factory } from "../../typechain-types";
import { OrigamiNFT } from "../../typechain-types/contracts/OrigamiNFT";
import useGetTokensByAddress from "./hooks/useGetTokensByAddress";
import useGetRecentlyMintedTokens from "./hooks/useGetRecentlyMintedTokens";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

const Nft: NextPage = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [nftContract, setNftContract] = useState<OrigamiNFT>();
  const [isLoading, setIsLoading] = useState(false);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install MetaMask");
        setIsLoading(false);
        return;
      }

      const accounts = (await ethereum.request({
        method: "eth_accounts",
      })) as string[];

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Connected", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install MetaMask");
        setIsLoading(false);
        return;
      }

      const accounts = (await ethereum.request({
        method: "eth_requestAccounts",
      })) as string[];

      if (accounts.length !== 0) {
        console.log("Connected", accounts[0]);
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Wallet connection effects
  useEffect(() => {
    setIsLoading(true);
    checkIfWalletIsConnected();
    connectWalletAction();
  }, []);

  // Get contract on component mount
  useEffect(() => {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum as any);
      const signer = provider.getSigner();
      const origamiNFTContract = OrigamiNFT__factory.connect(
        CONTRACT_ADDRESS,
        signer
      );

      setNftContract(origamiNFTContract);
    } else {
      console.log("Ethereum object no found");
    }
  }, []);

  const { nftObjects } = useGetTokensByAddress(
    nftContract as OrigamiNFT,
    currentAccount
  );

  const { recentlyMintedTokens } = useGetRecentlyMintedTokens(
    nftContract as OrigamiNFT
  );
  console.log("get recently minted tokens", recentlyMintedTokens);

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
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!currentAccount && (
        <button
          type="button"
          className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          onClick={connectWalletAction}
        >
          Connect Wallet
        </button>
      )}
      {currentAccount && (
        <span>{`${currentAccount.slice(0, 4)}...${currentAccount.slice(
          -4
        )}`}</span>
      )}

      <button
        type="button"
        className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        onClick={minNft}
      >
        Mint NFT
      </button>

      {isLoading && (
        <>
          <span>Minting in progress...</span>
          <svg
            role="status"
            className="inline h-8 w-8 animate-spin mr-2 text-gray-200 dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </>
      )}

      <h3 className="text-3xl mb-4">Pastel Origami Sword Collection</h3>
      <ul className="grid grid-cols-3 gap-4">
        {recentlyMintedTokens &&
          recentlyMintedTokens.map((nft) => (
            <li key={nft.name}>
              <h3>{nft.name}</h3>
              <Image src={nft.image} alt="nft image" width={300} height={300} />
              <h4>{nft.description}</h4>
              {nft.attributes.map((attr, index) => (
                <h5 key={index}>
                  {attr.trait_type}: {attr.value}
                </h5>
              ))}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Nft;
