import "./css/font-awesome-pro.min.css";
import "./css/flaticon_gerold.css";
import "./css/animate.min.css";
import "./css/odometer-theme-default.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/nice-select2.css";
import "./css/backToTop.css";
import "./css/glightbox.min.css";
import "./globals.css";
import { Suspense } from "react";
import ThmeModeSwither from "@/components/shared/others/ThmeModeSwither";

export const metadata = {
  title: "Digital Marketing Experts ",
  description: "Digital Marketing Experts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark overflow-x-auto">
      <body className={`font-sora dark:bg-dark-color overflow-x-hidden`}>
        <Suspense fallback={<></>}>{children}</Suspense>
        <ThmeModeSwither />
      </body>
    </html>
  );
}
