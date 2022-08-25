import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { ethers } from "ethers";
import origamiNFT from "../utils/OrigamiNFT.json";
import { CONTRACT_ADDRESS } from "../constants";
import { OrigamiNFT__factory } from "../typechain-types/factories/contracts/OrigamiNFT__factory";
import { OrigamiNFT } from "../typechain-types/contracts/OrigamiNFT";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

const Home: NextPage = () => {
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

  // Contract effects
  useEffect(() => {
    const getNFTs = async () => {
      console.log("trying to get nfts");
      try {
        const tokens: ethers.BigNumber[] =
          (await nftContract?.getTokensByAddress(
            currentAccount
          )) as ethers.BigNumber[];
        console.log("tokens", tokens);

        const readableTokens: number[] = tokens?.map((token) =>
          token.toNumber()
        );
        console.log("readable tokens", readableTokens);

        if (readableTokens.length !== 0) {
          // const tokenURI: string = (await nftContract?.tokenURI(
          //   readableTokens[0]
          // )) as string;

          console.log("readableTokens in get", readableTokens);
          const getUris = async () => {
            await Promise.all(
              readableTokens.map(async (token) => {
                const URI = await nftContract?.tokenURI(token);
                console.log(URI);
              })
            );
          };

          getUris();

          //   // const json = atob(tokenURI.substring(29)); // 29 = length of "data:application/json;base64,"
          //   // const result = JSON.parse(json);
          //   // console.log("result", result);
        }
      } catch (error) {
        console.log("cannot get nfts");
        console.log(error);
      }
    };
    if (nftContract) getNFTs();

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
        let txn = await nftContract?.mintOrigamiNFT();
        await txn?.wait();
        console.log("mint txn", txn);
      }
    } catch (error) {
      console.log("error minting nft");
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!currentAccount && (
        <button
          className="cta-button connect-wallet-button"
          onClick={connectWalletAction}
        >
          Connect Wallet To Get Started
        </button>
      )}
      {currentAccount && (
        <span>{`${currentAccount.slice(0, 4)}...${currentAccount.slice(
          currentAccount.length - 4,
          currentAccount.length
        )}`}</span>
      )}

      <button onClick={minNft}>Mint NFT</button>
    </div>
  );
};

export default Home;
