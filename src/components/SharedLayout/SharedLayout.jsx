import { useEffect, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";
import useAuth from "../../utils/hooks/useAuth";
import useContacts from "../../utils/hooks/useContacts";
import NavigationBar from "../NavigationBar/NavigationBar";
import Loader from "../Loader/Loader";
import scss from "./SharedLayout.module.scss";

const SharedLayout = () => {
  const { authError } = useAuth();
  const { contactsError, isLoading } = useContacts();

  useEffect(() => {
    if (authError) toast.error(authError);
    if (contactsError) toast.error(contactsError);
  }, [authError, contactsError]);

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
      <Loader isLoading={isLoading} />
      <ToastContainer position="top-left" autoClose={3000} theme="colored" />
    </>
  );
};

export default SharedLayout;
