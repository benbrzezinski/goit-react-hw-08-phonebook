import { useEffect, Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectContactsError } from "../../redux/contacts/selectors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";
import NavigationBar from "../NavigationBar/NavigationBar";
import Loader from "../Loader/Loader";
import scss from "./SharedLayout.module.scss";

const SharedLayout = () => {
  const contactsError = useSelector(selectContactsError);

  useEffect(() => {
    if (contactsError) toast.error(contactsError);
  }, [contactsError]);

  return (
    <>
      <header className={scss.header}>
        <NavigationBar />
      </header>
      <main>
        <div className={scss.container}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <ToastContainer position="top-left" autoClose={3000} theme="colored" />
    </>
  );
};

export default SharedLayout;
