"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/admin" || window.localStorage.getItem("ae-admin-session") !== "active") {
      router.replace("/login");
    }
  }, [pathname, router]);

  return (
    <div className="admin-layout min-h-screen bg-[#F7EDE2]">
      {children}
    </div>
  );
}
