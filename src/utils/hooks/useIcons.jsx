import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { BiLoaderAlt } from "react-icons/bi";
import { MdDriveFileRenameOutline, MdAppRegistration } from "react-icons/md";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { RiContactsBook2Line } from "react-icons/ri";

const iconPropTypes = {
  className: PropTypes.string.isRequired,
};

const useIcons = () => {
  const AuthPendingIcon = ({ className }) => (
    <IconContext.Provider value={{ className }}>
      <BiLoaderAlt />
    </IconContext.Provider>
  );

  AuthPendingIcon.propTypes = iconPropTypes;

  const NameIcon = ({ className }) => (
    <IconContext.Provider value={{ className }}>
      <MdDriveFileRenameOutline />
    </IconContext.Provider>
  );

  NameIcon.propTypes = iconPropTypes;

  const PhoneIcon = ({ className }) => (
    <IconContext.Provider value={{ className }}>
      <AiOutlinePhone />
    </IconContext.Provider>
  );

  PhoneIcon.propTypes = iconPropTypes;

  const EmailIcon = ({ className }) => (
    <IconContext.Provider value={{ className }}>
      <AiOutlineMail />
    </IconContext.Provider>
  );

  EmailIcon.propTypes = iconPropTypes;

  const UserIcon = ({ className }) => (
    <IconContext.Provider value={{ className }}>
      <AiOutlineUser />
    </IconContext.Provider>
  );

  UserIcon.propTypes = iconPropTypes;

  const LogOutIcon = ({ className }) => (
    <IconContext.Provider value={{ className }}>
      <LuLogOut />
    </IconContext.Provider>
  );

  LogOutIcon.propTypes = iconPropTypes;

  const ContactsIcon = ({ className }) => (
    <IconContext.Provider value={{ className }}>
      <RiContactsBook2Line />
    </IconContext.Provider>
  );

  ContactsIcon.propTypes = iconPropTypes;

  const RegisterIcon = ({ className }) => (
    <IconContext.Provider value={{ className }}>
      <MdAppRegistration />
    </IconContext.Provider>
  );

  RegisterIcon.propTypes = iconPropTypes;

  const LogInIcon = ({ className }) => (
    <IconContext.Provider value={{ className }}>
      <LuLogIn />
    </IconContext.Provider>
  );

  LogInIcon.propTypes = iconPropTypes;

  return {
    AuthPendingIcon,
    NameIcon,
    PhoneIcon,
    EmailIcon,
    UserIcon,
    LogOutIcon,
    ContactsIcon,
    RegisterIcon,
    LogInIcon,
  };
};

export default useIcons;
