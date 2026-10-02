import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

function UploadFlyer() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // The backend will handle saving this later.
    navigate("/board");
  }

  return (
    <main style={{ textAlign: "center" }}>
      <h1>Upload a Flyer</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Flyer title
          <input type="text" required />
        </label>

        <label>
          Description
          <textarea required />
        </label>

        <label>
          Date
          <input type="date" required />
        </label>

        <label>
          Location
          <input type="text" required />
        </label>

        <label>
          Flyer image
          <input type="file" accept="image/*" />
        </label>

        <button type="submit">Upload Flyer</button>
      </form>

      <Link to="/board">Back to Bulletin Board</Link>
    </main>
  );
}

export default UploadFlyer;