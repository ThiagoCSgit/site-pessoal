import { SVGProps } from "react";

export default function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="32"
        d="M80 160h352M80 256h352M80 352h352"
      ></path>
    </svg>
  );
}
