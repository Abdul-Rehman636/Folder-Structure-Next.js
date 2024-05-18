import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import styles from "../styles/AdminLayout.module.css";

const AdminLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <AdminSidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default AdminLayout;
