import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { DefaultLayout } from "@/components/ui/layout";
import { Loading } from "@/components/ui/loading";
import { useEffect, useState } from "react";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки ресурсов
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
      <Toaster />
    </>
  );
};

export default Root;
