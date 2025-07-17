export const Token_Lunch = () => {
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
      <button className="btn">Create a token</button>
    </div>
  );
};
