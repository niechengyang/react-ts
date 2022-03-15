import React from "react";
import { UserLayout } from "../../layouts/userLayout";
import { RegisterPageForm } from "./RegisterPageForm";
export const RegisterPage: React.FC = () => {
  return (
    <UserLayout>
      <RegisterPageForm />
    </UserLayout>
  );
};
