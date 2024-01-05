import { GlobalContextProvider } from "../context/GlobalContext";
import GlobalContextWrapper from "../context/GlobalContextWrapper";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Muhammad Azlaan Zubair",
  description:
    "Web development portfolio to give a glance about my programming career.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <GlobalContextProvider>
          <GlobalContextWrapper>{children}</GlobalContextWrapper>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
