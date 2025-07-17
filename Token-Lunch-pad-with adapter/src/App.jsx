import { Token_Lunch } from "./components/TokenLaunchpad.jsx";
import "./App.css";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
function App() {
  return (
    <>
      <div>
        <ConnectionProvider endpoint={"https://api.mainnet-beta.solana.com"}>
          <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 20,
                }}
              >
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <Token_Lunch />
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </>
  );
}

export default App;
