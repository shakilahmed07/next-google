import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Pagination = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="paginationBtn">
            <ChevronLeftIcon className="h-7" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="paginationBtn">
          <ChevronRightIcon className="h-7" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default Pagination;
