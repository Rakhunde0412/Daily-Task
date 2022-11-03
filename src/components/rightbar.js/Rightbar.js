import classes from "./Rightbar.module.css";

const Rightbar = () => {
  return (
    <>
      <div>
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
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img
                className={classes.rightbarProfileImg}
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span className={classes.rightbarUsername}>vivek rakhunde</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img
                className={classes.rightbarProfileImg}
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span className={classes.rightbarUsername}>Pratik </span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img
                className={classes.rightbarProfileImg}
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span className={classes.rightbarUsername}>Avishkar</span>
          </li>
          <li className={classes.rightbarFriend}>
            <div className={classes.rightbarProfileImgContainer}>
              <img
                className={classes.rightbarProfileImg}
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className={classes.rightbarOnline}></span>
            </div>
            <span className={classes.rightbarUsername}>Avishkar</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Rightbar;
