import { Route, Routes } from "react-router-dom";
import Auth from "../common/Auth";
import MainLayout from "../common/MainLayout";
import ProfileOut from "../common/ProfileOut";
import SignUpPage from "../Signup";
import Homepage from "../common/Homepage";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Homepage />
            </MainLayout>
          }
        />
        <Route path="/login" element={<Auth />} />
        <Route
          path="/about"
          element={<MainLayout>{/* <About /> */}</MainLayout>}
        />
        <Route path="/signup" element={<SignUpPage />} />

        <Route
          path="/profile"
          element={
            <MainLayout>
              <div className="">
                <ProfileOut />
              </div>
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}
