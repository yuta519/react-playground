import { MouseEvent } from "react";

export default function Paginations({
  pages,
  onChange
}: {
  pages: number[],
  onChange: (event: MouseEvent) => void
}) {
  return (
    <>
      {pages.map((page) => (
        <button key={page} value={page} onClick={onChange}>
         {page}
        </button>
      ))}
    </>
  );
}