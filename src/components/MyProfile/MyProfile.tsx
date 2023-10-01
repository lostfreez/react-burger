import styles from "./MyProfile.module.css";
import React from "react";
import ProfileNavigate from "../ProfileNavigate/ProfileNavigate";
import ProfileEdit from "../ProfileEdit/ProfileEdit";
import Loader from "../Loader/Loader";
import { useAppSelector } from "../../services/types/typedHooks";
import { getUserData } from "../../services/actions/getUserDataAction";
import { useAppDispatch } from "../../services/types/typedHooks";

const MyProfile: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.authentificate);
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
