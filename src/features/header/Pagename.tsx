"use client";

import { cn } from "@/lib/utils";
import usePageName from "./usePageName";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Pagename = () => {
  const page = usePageName();

  return (
    <div className="flex items-center gap-2 capitalize">
      <Link
        href={`/${page[0]}`}
        className={cn(
          page.length > 1 ? "text-gray-500!" : "text-gray-600",
          "text-sm",
        )}
      >
        {page[0]}
      </Link>
      {page.length > 1 ? (
        <>
          <ChevronRight className="size-3.5 text-gray-600" />
          <h3 className="text-gray-600 text-sm">{page[1]}</h3>
        </>
      ) : null}
    </div>
  );
};

export default Pagename;
