import {Suspense} from "react";
import { Metadata } from "next";
import Loading from "@/components/Loading";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
}
export default function Rootlayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <DashboardSidebar>{children}</DashboardSidebar>
    </Suspense>
  );
}