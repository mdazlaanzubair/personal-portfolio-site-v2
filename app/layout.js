import { GlobalContextProvider } from "../context/GlobalContext";
import GlobalContextWrapper from "../context/GlobalContextWrapper";
import "./globals.css";

export const metadata = {
  title: "Muhammad Azlaan Zubair",
  description:
    "Web development portfolio to give a glance about my programming career.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>
          <GlobalContextWrapper>{children}</GlobalContextWrapper>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
