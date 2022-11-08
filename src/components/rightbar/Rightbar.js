import classes from "./Rightbar.module.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const HomeRightbar = () => {
  return (
    <>
      <div className={classes.birthdayContainer}>
        <img className={classes.birthdayImg} src="assets/gift.png" alt="" />
        <span className={classes.birthdayText}>
          <b>vivek rakhunde</b> and <b>3 other friends</b> have a birthday
          today.
        </span>
      </div>
      <img className={classes.rightbarAd} src="assets/ad.png" alt="" />
      <h4 className={classes.rightbarTitle}>Online Friends</h4>
      <ul className={classes.rightbarFriendList}>
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))}
      </ul>
    </>
  );
};

  const ProfileRightbar =() =>{
    return(
      <>
        <h4 className={classes.rightbarTitle}>User information</h4>
        <div className={classes.rightbarInfo}>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>City:</span>
            <span className={classes.rightbarInfoValue}>Pune</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>From:</span>
            <span className={classes.rightbarInfoValue}>Chalisgaon</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>Relationship:</span>
            <span className={classes.rightbarInfoValue}>Single</span>
          </div>
        </div>
        <h4 className={classes.rightbarTitle}>User friends</h4>
        <div className={classes.rightbarFollowings}>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/1.jpeg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>vivek rakhunde</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/2.jpeg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>vivek rakhunde</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/3.jpeg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>vivek rakhunde</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/4.jpeg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>vivek rakhunde</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/5.jpeg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>vivek rakhunde</span>
          </div>
          <div className={classes.rightbarFollowing}>
            <img
              src="assets/person/6.jpeg"
              alt=""
              className={classes.rightbarFollowingImg}
            />
            <span className={classes.rightbarFollowingName}>vivek rakhunde</span>
          </div>
        </div>
      </>
    )
  }

const Rightbar = ({ profile }) => {
  return (
    <>
      <div className={classes.rightbar}>
        <div className={classes.rightbarWrapper}>
          <ProfileRightbar/>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
