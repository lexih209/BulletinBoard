import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type Flyer = {
  id: number;
  title: string;
  description: string | null;
  category: string | null;
  event_date: string | null;
  image_url: string | null;
};

function FlyerDetails() {
  const { id } = useParams();

  const [flyer, setFlyer] = useState<Flyer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/flyers/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Flyer not found");
        }

        return response.json();
      })
      .then((data) => {
        setFlyer(data);
      })
      .catch((error) => {
        console.error(error);
        setError("Could not load flyer.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading flyer...</p>;
  }

  if (error || !flyer) {
    return (
      <main>
        <h1>Flyer not found</h1>
        <Link to="/board">Back to Bulletin Board</Link>
      </main>
    );
  }

  return (
    <main style={{ textAlign: "center" }}>
      {flyer.image_url && (
        <img
          src={flyer.image_url}
          alt={flyer.title}
          width="400"
        />
      )}

      <h1>{flyer.title}</h1>

      {flyer.description && <p>{flyer.description}</p>}
      {flyer.category && <p>Category: {flyer.category}</p>}
      {flyer.event_date && <p>Date: {flyer.event_date}</p>}

      <Link to="/board">Back to Bulletin Board</Link>
    </main>
  );
}

export default FlyerDetails;