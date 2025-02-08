import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { AlertCircle, AlertTriangle, CheckCircle2 } from "lucide-react";

const icons = {
  warning: <AlertTriangle className="w-6 h-6" />,
  error: <AlertCircle className="w-6 h-6" />,
  success: <CheckCircle2 className="w-6 h-6" />,
};

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, variant = "default", ...props }) {
        return (
          <Toast key={id} variant={variant} {...props}>
            {variant !== "default" && icons[variant as keyof typeof icons]}
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
