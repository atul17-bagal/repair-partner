import "./globals.css";

export const metadata = {
  title: "Repair Partner",
  description: "Repair Partner - Coming Soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}