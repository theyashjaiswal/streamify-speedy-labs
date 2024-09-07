/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { Input } from "./components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { Card } from "./components/ui/card";

const data: Stream[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "honeysingh@artist.com",
    songName: "Millionaire",
    artist: "Yo Yo Honey Singh",
    dateStreamed: "07-09-2024",
    streamCount: 550000,
    albumCover:
      "https://images.genius.com/5ec85acd8642096857b86ed76f43fb82.1000x1000x1.png",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "postmalone@artist.com",
    songName: "I Had Some Help",
    artist: "Post Malone",
    dateStreamed: "07-09-2024",
    streamCount: 450000,
    albumCover:
      "https://images.genius.com/47f7c3382c5b12a2874cdaa591ba1316.1000x1000x1.png",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "sabrinacarpenter@artist.com",
    songName: "Espresso",
    artist: "Sabrina Carpenter",
    dateStreamed: "07-09-2024",
    streamCount: 440000,
    albumCover:
      "https://images.genius.com/61dab7bb1303ea2419aa2584308f134a.300x300x1.png",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "kendricklamar@artist.com",
    songName: "Not Like Us",
    artist: "Kendrick Lamar",
    dateStreamed: "07-09-2024",
    streamCount: 340000,
    albumCover:
      "https://images.genius.com/95cfea0187b37c7731e11d54b07d2415.1000x1000x1.png",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "charlieputh@artist.com",
    songName: "We don't talk anymore",
    artist: "Charlie Puth",
    dateStreamed: "07-09-2024",
    streamCount: 220000,
    albumCover:
      "https://images.genius.com/78c11a302d3f4f082c2bbd407cd714f9.873x873x1.png",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "drake@artist.com",
    songName: "Started from the bottom - E.",
    artist: "Drake",
    dateStreamed: "07-09-2024",
    streamCount: 210000,
    albumCover:
      "https://images.genius.com/4d2f4a3e57d8c8016f8e655a718e3b59.1000x1000x1.png",
  },
];

export type Stream = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  songName: string;
  artist?: string;
  dateStreamed?: string;
  streamCount: number;
  albumCover?: string;
};

export const columns: ColumnDef<Stream>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "songName",
    header: "Song",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("songName")}</div>
    ),
  },
  {
    accessorKey: "albumCover",
    header: "Album cover",
    cell: (info) => (
      <img src={info.getValue() as any} alt="product" width="50" height="50" />
    ),
  },
  {
    accessorKey: "artist",
    header: "Artist",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("artist")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User ID
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "dateStreamed",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date Streamed
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {row.getValue("dateStreamed")}
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "streamCount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Stream Count
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {row.getValue("streamCount")}
      </div>
    ),
    enableSorting: true,
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy stream ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View stream details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function RecentStreams() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [searchTerm, setSearchTerm] = React.useState("");

  // Filtered data based on search term
  const filteredData = React.useMemo(() => {
    return data.filter((row) => {
      const songName = row.songName?.toLowerCase() || "";
      const artist = row.artist?.toLowerCase() || "";
      return (
        songName.includes(searchTerm.toLowerCase()) ||
        artist.includes(searchTerm.toLowerCase())
      );
    });
  }, [searchTerm]);

  const table = useReactTable({
    data: filteredData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Card className="flex flex-col flex-wrap gap-2 justify-center p-6 m-6 overflow-scroll">
      <h3 className="font-semibold text-gray-900 dark:text-gray-50">
        Recent Streams
      </h3>
      <div className="flex items-center py-4">
        {/* Combined filter input */}
        <Input
          placeholder="Filter by artist or song name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="max-w-sm"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination controls */}
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="text-sm text-muted-foreground">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Page size options */}
      <div className="flex justify-end space-x-2 py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Rows per page: {table.getState().pagination.pageSize}
              <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {[5, 10, 20, 50].map((pageSize) => (
              <DropdownMenuItem
                key={pageSize}
                onSelect={() => table.setPageSize(pageSize)} // Handle page size change
                className={`capitalize ${
                  table.getState().pagination.pageSize === pageSize
                    ? "font-bold"
                    : ""
                }`}
              >
                {pageSize}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  );
}
