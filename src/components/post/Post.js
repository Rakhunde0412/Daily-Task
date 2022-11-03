import { MoreVert } from "@mui/icons-material";
import classes from "./Post.module.css";
import { Users } from "../../dummyData";
const Post = ({ post }) => {
  const user=Users.filter(u=>u.id===1)
  console.log(user[0].username);
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
              <span className={classes.postDate}>{post.date}</span>
            </div>
            <div className={classes.postTopRight}>
              <MoreVert />
            </div>
          </div>
          <div className={classes.postCenter}>
            <span className={classes.postText}>{post?.desc} </span>
            <img className={classes.postImg} src={post.photo} alt="post" />
          </div>
          <div className={classes.postBottom}>
            <div className={classes.postBottomLeft}>
              <img className={classes.likeIcon} src="assets/like.png" alt="" />
              <img className={classes.likeIcon} src="assets/heart.png" alt="" />
              <span className={classes.postLikeCounter}>
                {" "}
                {post.like} people like it
              </span>
            </div>
            <div className={classes.postBottomRight}>
              <span className={classes.postCommentText}>{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
