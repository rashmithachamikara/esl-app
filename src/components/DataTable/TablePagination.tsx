import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

interface TableInstance {
  getState: () => {
    pagination: {
      pageIndex: number;
    };
  };
  getPageCount: () => number;
  previousPage: () => void;
  nextPage: () => void;
  setPageIndex: (index: number) => void;
  getCanPreviousPage: () => boolean;
  getCanNextPage: () => boolean;
}

// Function to generate exactly 8 pagination entries
const getPageNumbers = (current: number, total: number) => {
  if (total <= 9) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "...")[] = [];

  if (current <= 4) {
    pages.push(1, 2, 3, 4, 5, 6, "...", total - 1, total);
  } else if (current >= total - 3) {
    pages.push(
      1,
      2,
      "...",
      total - 5,
      total - 4,
      total - 3,
      total - 2,
      total - 1,
      total
    );
  } else {
    pages.push(
      1,
      "...",
      current - 2,
      current - 1,
      current,
      current + 1,
      current + 2,
      "...",
      total
    );
  }

  return pages;
};

//Pass table as a prop to prepare pagionation for the given table
export function TablePagination({ table }: { table: TableInstance }) {
  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();
  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <div className="flex justify-end mt-4">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button
              variant="outline"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="cursor-pointer select-none"
            >
              Previous
            </Button>
          </PaginationItem>

          {pages.map((page, index) =>
            page === "..." ? (
              <PaginationItem
                key={`ellipsis-${index}`}
                className="pointer-events-none"
              >
                <PaginationLink className="w-10 h-10 flex items-center justify-center opacity-50 cursor-default">
                  ...
                </PaginationLink>
              </PaginationItem>
            ) : (
              <PaginationItem key={page}>
                <PaginationLink
                  isActive={currentPage === page}
                  onClick={() => table.setPageIndex(page - 1)}
                  className="cursor-pointer select-none"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <Button
              variant="outline"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="cursor-pointer select-none"
            >
              Next
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
