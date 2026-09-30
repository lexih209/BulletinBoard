import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/board");
  }

  return (
    <main>
      <h1>Campus Bulletin Board</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" required />
        </label>

        <label>
          Password
          <input type="password" required />
        </label>

        <button type="submit">Log In</button>
      </form>
    </main>
  );
}

export default Welcome;