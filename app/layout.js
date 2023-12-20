import { ThemeProvider } from "./context/ThemeContext";
import ThemeWrapper from "./context/ThemeWrapper";
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
        <ThemeProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
