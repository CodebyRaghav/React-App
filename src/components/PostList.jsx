import Post from "./Post";
import classes from "./PostList.module.css";
function PostList(props) {
  return (
    <ul className={classes.posts}>
      <Post author="Raghav" body="React.js is awesome" />
      <Post author="Ashu" body="Checkout the Full Course!" />
      <Post author="Tushar" body="3D Modelling is awesome" />
      <Post author="Kartik" body="Check out my editor's portfolio" />
    </ul>
  );
}

export default PostList;
