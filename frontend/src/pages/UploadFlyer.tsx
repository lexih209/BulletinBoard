import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

function UploadFlyer() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [imageData, setImageData] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/flyers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          category,
          event_date: date,
          image_url: imageData || null,

          // TEMPORARY DEMO USER
          created_by: 1,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to create flyer.");
      }

      navigate("/board");
    } catch (error) {
      console.error(error);
      setError("Could not create flyer.");
    }
  }

  return (
    <main style={{ textAlign: "center" }}>
      <h1>Upload a Flyer</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Flyer title
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </label>

        <label>
          Description
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>

        <label>
          Category
          <input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </label>

        <label>
          Date
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <label>
          Flyer Image
          <input
            type="file"
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files?.[0];

              if (!file) {
                setImageData(null);
                return;
              }

              const reader = new FileReader();

              reader.onloadend = () => {
                setImageData(reader.result as string);
              };

              reader.readAsDataURL(file);
            }}
          />
        </label>

        {error && <p>{error}</p>}

        <button type="submit">Upload Flyer</button>
      </form>

      <Link to="/board">Back to Bulletin Board</Link>
    </main>
  );
}

export default UploadFlyer;