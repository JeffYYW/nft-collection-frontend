import { ethers } from "ethers";
import { useState, useEffect } from "react";

const useGetAccountBalance = () => {
  const [accountBalance, setAccountBalance] = useState("");

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum as any);

      const getBalance = async () => {
        const balance = await provider.getBalance(
          "0xF8B860C66A07aBBFd413237DE4b657132cE44182"
        );
        const formattedBalance = ethers.utils.formatEther(balance);

        setAccountBalance(formattedBalance);
      };

      getBalance();
    } else {
      console.log("Ethereum object no found");
    }
  }, []);

  return {
    accountBalance,
  };
};

export default useGetAccountBalance;
