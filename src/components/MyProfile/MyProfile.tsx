import styles from "./MyProfile.module.css";
import React from "react";
import ProfileNavigate from "../ProfileNavigate/ProfileNavigate";
import ProfileEdit from "../ProfileEdit/ProfileEdit";
import { useSelector } from "react-redux";
import { AuthState } from "../../services/types/types";
import Loader from "../Loader/Loader";
import { AppDispatch } from "../../services/store";
import { useDispatch } from "react-redux";
import { getUserData } from "../../services/actions/getUserDataAction";

const MyProfile: React.FC<{}> = () => {
  const dispatch: AppDispatch = useDispatch();
  const userData = useSelector(
    (state: { authentificate: AuthState }) => state.authentificate
  );
  React.useEffect(() => {
    const fetchData = async () => {
      await dispatch(getUserData());
    };
    if (!userData.name || !userData.email) {
      fetchData();
    }
  }, [dispatch, userData]);
  if (!userData.name && !userData.email) {
    return <Loader />;
  }
  return (
    <div className={styles.page}>
      <div className={styles.profile}>
        <ProfileNavigate />
        <ProfileEdit />
      </div>
    </div>
  );
};

export default MyProfile;
