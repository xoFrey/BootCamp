import BlogData from "../../components/BlogData/BlogData";
import blogData from "../../assets/data/data.js";
import "./Blog.css";
const Blog = () => {
  return (
    <>
      <section className="grid-info">
        {blogData.map((item, index) => (
          <BlogData blogData={item} index={index} />
        ))}
      </section>
    </>
  );
};

export default Blog;
