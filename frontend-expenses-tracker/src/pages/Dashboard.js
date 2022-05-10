import React, { useEffect } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";
import { ExpensesForm } from "../components/expenses-form/ExpensesForm";
import { CustomTable } from "../components/custom-table/CustomTable";

export const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user?._id) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <MainLayout>
      <div>Dashboard</div>
      <hr />

      <ExpensesForm />
      <CustomTable />
    </MainLayout>
  );
};
