import classes from "./CloseFriends.module.css";

const CloseFriends = ({user}) => {
  return (
    <div>
        <li className={classes.sidebarFriend}>
      <img className={classes.sidebarFriendImg} src={user.profilePicture} alt="img" />
      <span className={classes.sidebarFriendName}>{user.username}</span>
    </li>
    </div>
  )
}

export default CloseFriends
