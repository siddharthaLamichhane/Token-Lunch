import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  MINT_SIZE,
  TOKEN_2022_PROGRAM_ID,
  createInitializeMint2Instruction,
  createMint,
  getMinimumBalanceForRentExemptMint,
} from "@solana/spl-token";

export function Token_Lunch() {
  const { connection } = useConnection();
  const wallet = useWallet();

  async function createToken() {
    const mintKeypair = Keypair.generate();
    const lamports = await getMinimumBalanceForRentExemptMint(connection);

    const transaction = new Transaction().add(
      SystemProgram.createAccount({
        fromPubkey: wallet.publicKey,
        newAccountPubkey: mintKeypair.publicKey,
        space: MINT_SIZE,
        lamports,
        programId: TOKEN_2022_PROGRAM_ID,
      }),
      createInitializeMint2Instruction(
        mintKeypair.publicKey,
        9,
        wallet.publicKey,
        wallet.publicKey,
        TOKEN_2022_PROGRAM_ID
      )
    );

    transaction.feePayer = wallet.publicKey;
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;
    transaction.partialSign(mintKeypair);

    await wallet.sendTransaction(transaction, connection);
    console.log(`Token mint created at ${mintKeypair.publicKey.toBase58()}`);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Solana Token Launchpad</h1>
      <input className="inputText" type="text" placeholder="Name"></input>
      <input className="inputText" type="text" placeholder="Symbol"></input>
      <input className="inputText" type="text" placeholder="Image URL"></input>
      <input
        className="inputText"
        type="text"
        placeholder="Initial Supply"
      ></input>
      <button onClick={createToken} className="btn">
        Create a token
      </button>
    </div>
  );
}
