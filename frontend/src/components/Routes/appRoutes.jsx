import { Route, Routes } from "react-router-dom";

import SignUpPage from "../Signup";

import LoginPage from "../Login";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}
