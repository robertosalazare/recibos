import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Layout } from "./components/Layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          footer: "hidden",
          header: "hidden",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning={true}>
        <body>
          <Layout>{children}</Layout>
        </body>
      </html>
    </ClerkProvider>
  );
}
