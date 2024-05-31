import { MdMessage, MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/create-post" className={classes.button}>
          New Post
          <MdPostAdd size={18} />
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
