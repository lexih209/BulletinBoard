import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/board");
  }

  return (
    <main style={{ textAlign: "center" }}>
      <h1 className="board-title" style={{ fontSize: "80px" }}>Campus Bulletin Board</h1>

      <form onSubmit={handleSubmit} style={{ margin: "0 auto" }}>
        <label className="board-title" style={{ fontSize: "40px" }}>
          Username
        </label>
        <input type="text" required />

        <label className="board-title" style={{ fontSize: "40px" }}>
          Password
        </label>
          <input type="password" required />
          
        <button type="submit" style={{margin: "0 auto", padding: "14px 32px", fontSize: "20px", width: "180px"}}>Log In</button>
      </form>
    </main>
  );
}

export default Welcome;