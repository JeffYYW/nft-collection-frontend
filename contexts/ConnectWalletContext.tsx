import React, { createContext, useContext, useEffect, useState } from "react";

interface IContext {
  currentAccount: string;
  walletConnecting: boolean;
  connectWalletAction(): any;
}

const initialContext = {
  currentAccount: "",
  walletConnecting: false,
  connectWalletAction: () => null,
};

interface IProps {
  children: React.ReactNode;
}

const ConnectWalletContext = createContext<IContext>(initialContext);

export function useConnectWallet() {
  return useContext(ConnectWalletContext);
}

export const ConnectWalletProvider: React.FC<IProps> = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isWalletLoading, setWalletIsLoading] = useState(false);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install MetaMask");
        setWalletIsLoading(false);
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

    setWalletIsLoading(false);
  };

  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install MetaMask");
        setWalletIsLoading(false);
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

  useEffect(() => {
    setWalletIsLoading(true);
    checkIfWalletIsConnected();
    connectWalletAction();
  }, []);

  const value = {
    currentAccount,
    walletConnecting: isWalletLoading,
    connectWalletAction,
  };

  return (
    <ConnectWalletContext.Provider value={value}>
      {children}
    </ConnectWalletContext.Provider>
  );
};
