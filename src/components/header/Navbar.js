import React from "react";
import classes from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Navbar = () => {
  return (
    <div>
      <div className={classes.topbarContainer}>
        <div className={classes.topbarLeft}>
          <span className={classes.logo}>You Social</span>
        </div>
        <div className={classes.topbarCenter}>
          <div className={classes.searchbar}>
            <SearchIcon className={classes.searchIcon} />
            <input
              placeholder="Search for friend, post or video"
              className={classes.searchInput}
            />
          </div>
        </div>
        <div className={classes.topbarRight}>
          <div className={classes.topbarLinks}>
            <span className={classes.topbarLink}>Homepage</span>
            <span className={classes.topbarLink}>Timeline</span>
          </div>
          <div className={classes.topbarIcons}>
            <div className={classes.topbarIconItem}>
              <SearchIcon />
              <span className={classes.topbarIconBadge}>1</span>
            </div>
            <div className={classes.topbarIconItem}>
              <ChatIcon />
              <span className={classes.topbarIconBadge}>2</span>
            </div>
            <div className={classes.topbarIconItem}>
              <NotificationsIcon />
              <span className={classes.topbarIconBadge}>1</span>
            </div>
          </div>
          <img
            src="/assets/person/1.jpeg"
            alt=""
            className={classes.topbarImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
