import { Link } from "react-router-dom";

const flyers = [
  {
    id: 1,
    title: "Campus Movie Night",
    description: "Join us for a free movie and snacks.",
    imageUrl: "https://placehold.co/300x400"
  },
  {
    id: 2,
    title: "Club Fair",
    description: "Explore student clubs and organizations.",
    imageUrl: "https://placehold.co/300x400"
  }
];

function BulletinBoard() {
  return (
    <main style={{ textAlign: "center" }}>
      <h1 className="board-title" style={{ fontSize: "80px" }}>Campus Bulletin Board</h1>

      <Link to="/upload" style={{margin: "0 auto", padding: "14px 32px", fontSize: "20px", width: "220px"}}>Upload Flyer</Link>

      <section>
        {flyers.map((flyer) => (
          <article key={flyer.id}>
            <Link to={`/flyers/${flyer.id}`}>
              <img
                src={flyer.imageUrl}
                alt={flyer.title}
                width="200"
              />

              <h2>{flyer.title}</h2>
              <p>{flyer.description}</p>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default BulletinBoard;