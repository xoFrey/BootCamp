import { Link } from "react-router-dom";
import "./BlogData.css";
const BlogData = (props) => {
  const href = "/blog/info/" + props.blogData.id;
  return (
    <div className="blog-data">
      <img src={props.blogData.img_url} alt="" />
      <h3>{props.blogData.title}</h3>
      <Link to={href}>Click me</Link>
    </div>
  );
};

export default BlogData;
