import { Header } from "./header";
import { create } from "zustand";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Nav } from "./nav";

export interface LayoutStoreProps {
  bgImage?: ReactNode;
  bgColor?: string;
  isHeaderDisabled?: boolean;
}

export interface LayoutStoreActions {
  changeLayout: (state: LayoutStoreProps) => void;
}

export const useLayoutStore = create<LayoutStoreProps & LayoutStoreActions>(
  (set) => ({
    bgColor: undefined,
    bgImage: undefined,
    isHeaderDisabled: false,

    changeLayout: (state) => {
      set(() => state);
    },
  })
);

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const { bgColor, bgImage, isHeaderDisabled } = useLayoutStore();
  const isHeightTale = useMediaQuery("(min-height: 680px)");

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="min-h-dvh w-full flex justify-center bg-background"
    >
      <div className="w-full max-w-md flex flex-col relative pt-[var(--tg-viewport-safe-area-inset-top)]">
        {!isHeaderDisabled && <Header />}
        
        <main className="flex-1 overflow-auto overflow-x-hidden relative z-10 pb-20">
          {bgImage && (
            <div
              className={cn(
                "absolute opacity-50 -left-1 -right-1 -top-[var(--tg-viewport-content-safe-area-inset-top)]",
                !isHeightTale && "-top-16"
              )}
            >
              {bgImage}
            </div>
          )}
          {children}
        </main>

        <Nav />
      </div>
    </div>
  );
};
