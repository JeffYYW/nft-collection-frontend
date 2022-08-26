import { useState, useEffect } from "react";
import { OrigamiNFT } from "../../../typechain-types/contracts/OrigamiNFT";
import { ethers } from "ethers";
import { INFTObject } from "../types";

const useGetRecentlyMintedTokens = (contract: OrigamiNFT) => {
  const [recentlyMintedTokens, setRecentlyMintedTokens] = useState<
    INFTObject[]
  >([]);

  useEffect(() => {
    const getTokens = async () => {
      try {
        const tokens: ethers.BigNumber[] =
          (await contract?.getAllMintedTokens()) as ethers.BigNumber[];

        const readableTokens: number[] = tokens.map((token) =>
          token.toNumber()
        );

        if (readableTokens.length !== 0) {
          const getUris = async () => {
            const uriList: string[] = [];
            // Get uri which looks like 'data:application/json...'
            // only get the last 4
            await Promise.all(
              readableTokens.slice(-4).map(async (token) => {
                const URI: string = await contract?.tokenURI(token);
                uriList.push(URI);
              })
            );

            // convert URIs to Nft token object
            const nftTokenObjectList: INFTObject[] = uriList.map((uri) => {
              const json = atob(uri.substring(29));
              const result: INFTObject = JSON.parse(json);
              return result;
            });

            setRecentlyMintedTokens(nftTokenObjectList);
          };

          getUris();
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (contract) {
      getTokens();
    }
  }, [contract]);

  return { recentlyMintedTokens };
};

export default useGetRecentlyMintedTokens;
