"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const AdminViewContext = createContext<{ adminView: boolean } | null>(null);

const AdminViewProvider = ({ children }: { children: ReactNode }) => {
  const [adminView, setAdminView] = useState(false);

  useEffect(() => {
    const isKeyAvailable = localStorage.getItem("adminView");
    if (!isKeyAvailable) {
      setAdminView(false);
      return;
    }
    const parsedKey: boolean = JSON.parse(isKeyAvailable);
    setAdminView(parsedKey);
  }, []);

  return (
    <AdminViewContext.Provider value={{ adminView }}>
      {children}
    </AdminViewContext.Provider>
  );
};

const useAdminView = () => {
  const ctx = useContext(AdminViewContext);
  if (!ctx) throw new Error("useAdminView must be inside AdminViewProvider");
  return ctx;
};

export { AdminViewProvider, useAdminView };
