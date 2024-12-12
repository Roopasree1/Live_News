import image from "../assets/newss.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 mx-3"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src || image}
        className="card-img-top"
        alt="News Thumbnail"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "Untitled"}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "News description unavailable."}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;

