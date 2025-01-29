import { invoice, openInvoice } from "@telegram-apps/sdk-react";

export type InvoiceStatus = "paid" | "failed" | "pending" | "cancelled";

function open(url: string) {
  if (invoice.open.isAvailable()) {
    return openInvoice(url, "url") as Promise<InvoiceStatus>;
  }
}

export function useInvoice() {
  return { openInvoice: open };
}
