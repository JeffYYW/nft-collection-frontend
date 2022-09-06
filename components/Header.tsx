import Link from "next/link";
import React from "react";
import { useConnectWallet } from "../contexts/ConnectWalletContext";
import useGetAccountBalance from "../hooks/useGetAccountBalance";
import truncateHash from "../utils/truncateHash";
import Spinner from "./Spinner";

const Header: React.FC = () => {
  const { currentAccount, connectWalletAction, walletConnecting } =
    useConnectWallet();

  const { accountBalance } = useGetAccountBalance();

  return (
    <div className="shadow bg-white">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/">Logo</Link>
          </li>
          <li>
            <Link href="/nft">NFT</Link>
          </li>
          <li>
            <a className="hover:text-cyan-500 transition-colors" href="">
              Link 3
            </a>
          </li>
          <li>
            <a className="hover:text-cyan-500 transition-colors" href="">
              Link 4
            </a>
          </li>
          <li>
            <a className="hover:text-cyan-500 transition-colors" href="">
              Link 5
            </a>
          </li>
        </ul>

        <ul className="flex items-center gap-5">
          <li>Current balance: {accountBalance.slice(0, 4)}</li>
          <li>
            {walletConnecting && <Spinner text={"Wallet Connecting..."} />}
            {currentAccount && (
              <span>
                Connected Account:
                <br />
                {truncateHash(currentAccount)}
              </span>
            )}
            {!currentAccount && (
              <button
                type="button"
                className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                onClick={connectWalletAction}
              >
                Connect Wallet
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
