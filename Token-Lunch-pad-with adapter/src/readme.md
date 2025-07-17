 <ConnectionProvider endpoint={"https://api.mainnet-beta.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />
          <div>hey its my first wallet</div>
          <Airdrop></Airdrop>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>