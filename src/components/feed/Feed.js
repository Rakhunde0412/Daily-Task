
import Post from "../post/Post";
import Share from "../share/Share";
import classes from "./Feed.module.css";
const Feed = () => {
  return (
    <>
     <div className={classes.feed}>
      <div className={classes.feedWrapper}>
       <Share/>
       <Post/>
        {/* {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
      </div>
    </div>
    </>
  )
}

export default Feed;
