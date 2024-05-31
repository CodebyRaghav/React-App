import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostList.module.css";

function PostsList() {
  const posts = useLoaderData();

  // function addPostHandler(postData) {
  //It's not a react feature it is available out of the box in browser. It is used to fetch data as well as used to send data.
  //setPosts((existingPosts) => [postData, ...existingPosts]); //React make sures that you get latest correct state even if you have multiple pending state updates. This is to use if new state is depend upon the previous existing state
  //}

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            /> //Key prop is used which is unique for every body
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no Posts yet.</h2>
          <p>Start adding some! </p>
        </div>
      )}
    </>
  );
}

export default PostsList;
