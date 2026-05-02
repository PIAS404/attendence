import "../styles/globals.css";

export const metadata = {
  title: "Revision System",
  description: "Revision tracking app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
