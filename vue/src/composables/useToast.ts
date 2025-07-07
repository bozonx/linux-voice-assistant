import miniToastr from "mini-toastr";

export default function useToast() {
  const toast = (
    message: string,
    type: "success" | "error" | "warn" | "info"
  ) => {
    miniToastr[type](message, "AI Assistant");
  };

  return { toast };
}
