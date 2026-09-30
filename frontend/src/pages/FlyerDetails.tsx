import { Link, useParams } from "react-router-dom";

const flyers = [
  {
    id: 1,
    title: "Campus Movie Night",
    description: "Join us for a free movie and snacks.",
    date: "October 10, 2026",
    location: "Student Center",
    imageUrl: "https://placehold.co/600x800"
  },
  {
    id: 2,
    title: "Club Fair",
    description: "Explore student clubs and organizations.",
    date: "October 15, 2026",
    location: "Main Quad",
    imageUrl: "https://placehold.co/600x800"
  }
];

function FlyerDetails() {
  const { id } = useParams();
  const flyer = flyers.find((item) => item.id === Number(id));

  if (!flyer) {
    return (
      <main>
        <h1>Flyer not found</h1>
        <Link to="/board">Back to Bulletin Board</Link>
      </main>
    );
  }

  return (
    <main>
      <img src={flyer.imageUrl} alt={flyer.title} width="400" />

      <h1>{flyer.title}</h1>
      <p>{flyer.description}</p>
      <p>Date: {flyer.date}</p>
      <p>Location: {flyer.location}</p>

      <Link to="/board">Back to Bulletin Board</Link>
    </main>
  );
}

export default FlyerDetails;