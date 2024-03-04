import blogData from "../../assets/data/data.js";
import "./Info.css";
const Info = () => {
  console.log(blogData);
  console.log(window.location.pathname);
  let id = window.location.pathname.split("/").pop();
  console.log(id);

  return (
    <section className="info">
      <img src={blogData[id].img_url} alt="" />
      <article>
        <div>
          <h3>{blogData[id].title}</h3>
          <p>{blogData[id].published_date}</p>
        </div>
        <p>{blogData[id].description}</p>
        <p>{blogData[id].author}</p>
      </article>
    </section>
  );
};

export default Info;
