import React, { useState, useEffect } from "react";
import { OrigamiNFT } from "../typechain-types/contracts/OrigamiNFT";
import { ethers } from "ethers";

interface INFTObject {
  description: string;
  image: string;
  name: string;
}

const useGetTokensByAddress = (contract: OrigamiNFT, address: string) => {
  const [nftObjects, setNftObjects] = useState<INFTObject[]>([]);

  useEffect(() => {
    const getNFTs = async () => {
      console.log("trying to get nfts");
      try {
        const tokens: ethers.BigNumber[] = (await contract?.getTokensByAddress(
          address
        )) as ethers.BigNumber[];
        console.log("tokens", tokens);

        const readableTokens: number[] = tokens?.map((token) =>
          token.toNumber()
        );
        console.log("readable tokens", readableTokens);

        if (readableTokens.length !== 0) {
          console.log("readableTokens in get", readableTokens);
          const getUris = async () => {
            const uriList: string[] = [];

            await Promise.all(
              readableTokens.map(async (token) => {
                const URI: string = (await contract?.tokenURI(token)) as string;
                uriList.push(URI);
              })
            );

            const jsonObjectList: INFTObject[] = uriList.map((uri) => {
              const json = atob(uri.substring(29));
              const result: INFTObject = JSON.parse(json);
              return result;
            });

            setNftObjects(jsonObjectList);
          };

          getUris();
        }
      } catch (error) {
        console.log("cannot get nfts");
        console.log(error);
      }
    };
    if (contract) getNFTs();
  }, [contract, address]);

  return { nftObjects };
};

export default useGetTokensByAddress;
