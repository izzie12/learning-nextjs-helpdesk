import Navbar from "./components/Navbar";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "next helpdesk",
  description: "Learning Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar/>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
