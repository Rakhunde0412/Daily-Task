import { MoreVert } from "@mui/icons-material";
import classes from "./Post.module.css";
//  import "../../../public/assets/post/1.jpeg"
const Post = () => {
  return (
    <>
      <div className={classes.post}>
        <div className={classes.postWrapper}>
          <div className={classes.postTop}>
            <div className={classes.postTopLeft}>
              <img
                className={classes.postProfileImg}
                src="assets/person/1.jpeg"
                alt=""
              />
              <span className={classes.postUsername}>vivek rakhunde</span>
              <span className={classes.postDate}>3 minutes ago</span>
            </div>
            <div className={classes.postTopRight}>
              <MoreVert />
            </div>
          </div>
          <div className={classes.postCenter}>
            <span className={classes.postText}>Hey ! It is my first post </span>
            <img
              className={classes.postImg}
              src="assets/post/1.jpeg"
              alt="post"
            />
          </div>
          <div className={classes.postBottom}>
            <div className={classes.postBottomLeft}>
              <img className={classes.likeIcon} src="assets/like.png" alt="" />
              <img className={classes.likeIcon} src="assets/heart.png" alt="" />
              <span className={classes.postLikeCounter}> people like it</span>
            </div>
            <div className={classes.postBottomRight}>
              <span className={classes.postCommentText}>11 comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
