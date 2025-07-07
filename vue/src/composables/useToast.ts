// @ts-ignore
import miniToastr from "mini-toastr";

export default function useToast() {
  const toast = (
    message: string,
    type: "success" | "error" | "warn" | "info",
    timeout = 10000
  ) => {
    miniToastr[type](message, "AI Assistant", timeout);
  };

  return { toast };
}
