import toast, { ToastPosition } from "react-hot-toast";

interface UseToastPropTypes {
  position: ToastPosition;
  type: "success" | "error";
  key: "e" | "s";
}

interface NotifyTypes {
  e?: (title: any) => void;
  s?: (title: any) => void;
}
interface NotifyReturnTypes {
  notify: {
    e?: (title: any) => void;
    s?: (title: any) => void;
  };
}

export function useToast(props: UseToastPropTypes[]): NotifyReturnTypes {
  let notify: NotifyTypes = {};
  if (props?.length !== 0) {
    props.forEach(({ position, type, key }) => {
      if (type === "success") {
        notify[key] = (title) => {
          // e.preventDefault();
          toast.success(title || "Successfully done", {
            position,
          });
        };
      } else if (type === "error") {
        notify[key] = (title) => {
          // e.preventDefault();
          toast.error(title || "An error has ocurred", {
            position,
          });
        };
      }
    });
  } else {
    console.log("the props must be an array in useToast");
  }

  return { notify };
}
