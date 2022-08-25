import React, { useState, useEffect } from "react";
import { OrigamiNFT } from "../typechain-types/contracts/OrigamiNFT";

const useGetTokensByAddress = async (contract: OrigamiNFT, address: string) => {
  const [tokenIds, setTokenIds] = useState([]);

  useEffect(() => {
    const getNFTs = async () => {
      console.log("trying to get nfts");
      try {
        const tokens = await contract?.getTokensByAddress(address);
        console.log(tokens);

        const readableTokens = tokens?.map((token) =>
          console.log(token.toNumber())
        );
        console.log("readable tokens", readableTokens);

        const tokenURI = (await contract?.tokenURI(1)) as string;
        console.log("token URI", tokenURI);

        const json = atob(tokenURI.substring(29)); // 29 = length of "data:application/json;base64,"
        const result = JSON.parse(json);
        console.log("result", result);
      } catch (error) {
        console.log("cannot get nfts");
        console.log(error);
      }
    };
    getNFTs();
  });

  return <div>useGetTokensByAddress</div>;
};

export default useGetTokensByAddress;
