import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { DefaultLayout } from "@/components/ui/layout";

function Root() {
  return (
    <>
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
      <Toaster />
    </>
  );
}

export default Root;
