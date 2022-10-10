// import HospitalIcon from "../../assets/hospital.png";
import LogoutIcon from "../../assets/logout.png";

const SideBar = ({ logout }) => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img
          src={
            "https://cdn1.iconfinder.com/data/icons/ui-color/512/Untitled-4-512.png"
          }
          alt="Hospital"
          width="30"
        />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner" onClick={logout}>
        <img src={LogoutIcon} alt="Logout" width="30" />
      </div>
    </div>
  </div>
);

export default SideBar;
