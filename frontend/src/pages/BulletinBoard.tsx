import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Flyer = {
  id: number;
  title: string;
  description: string | null;
  category: string | null;
  event_date: string | null;
  image_url: string | null;
  created_by: number | null;
};

function BulletinBoard() {
  const [flyers, setFlyers] = useState<Flyer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/flyers")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load flyers.");
        }

        return response.json();
      })
      .then((data) => {
        setFlyers(data);
      })
      .catch((error) => {
        console.error(error);
        setError("Could not load flyers.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main style={{ textAlign: "center" }}>
      <h1 className="board-title" style={{ fontSize: "80px" }}>
        Campus Bulletin Board
      </h1>

      <Link
        to="/upload"
        style={{
          margin: "0 auto",
          padding: "14px 32px",
          fontSize: "20px",
          width: "220px"
        }}
      >
        Upload Flyer
      </Link>

      <section>
        {loading && <p>Loading flyers...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && flyers.length === 0 && (
          <p>No flyers have been posted yet.</p>
        )}

        {flyers.map((flyer) => (
          <article key={flyer.id}>
            <Link to={`/flyers/${flyer.id}`}>
              <img
                src={
                  flyer.image_url ||
                  "https://placehold.co/300x400?text=No+Image"
                }
                alt={flyer.title}
                width="200"
              />

              <h2>{flyer.title}</h2>

              {flyer.description && <p>{flyer.description}</p>}

              {flyer.category && <p>Category: {flyer.category}</p>}

              {flyer.event_date && <p>Date: {flyer.event_date}</p>}
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default BulletinBoard;