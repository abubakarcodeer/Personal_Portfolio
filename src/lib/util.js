import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Swal from "sweetalert2";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const Dialog = ({icon,title,text,confirmButtonText="OK"}) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    confirmButtonText: confirmButtonText,
  });
};

