import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { CONTRACT_ADDRESS } from "../../../config/constants/origamiSwords";
import { OrigamiNFT, OrigamiNFT__factory } from "../../../typechain-types";

const useGetContract = () => {
  const [nftContract, setNftContract] = useState<OrigamiNFT>();

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

  return { nftContract };
};

export default useGetContract;
