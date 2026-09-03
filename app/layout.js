import "./globals.css";

export const metadata = {
  title: "Freelance Projects",
  description: "A simple freelance project dashboard"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
