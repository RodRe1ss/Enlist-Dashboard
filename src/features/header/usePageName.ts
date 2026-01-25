"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const usePageName = () => {
  const [pageName, setPageName] = useState<string[] | []>([]);
  const pathname = usePathname();

  useEffect(() => {
    const handlePageName = () => {
      if (pathname === "/") {
        setPageName(["overview"]);
        return;
      }

      setPageName(pathname.split("/").filter((item) => item));
      return;
    };

    handlePageName();
  }, [pathname]);

  return pageName;
};

export default usePageName;
