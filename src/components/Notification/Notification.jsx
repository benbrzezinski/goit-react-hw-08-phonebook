import useIcons from "../../utils/hooks/useIcons";
import scss from "./Notification.module.scss";

const Notification = () => {
  const { ContactsIcon } = useIcons();

  return (
    <p className={scss.info}>
      There are no contacts&nbsp;
      <ContactsIcon className={scss.icon} />
    </p>
  );
};

export default Notification;
