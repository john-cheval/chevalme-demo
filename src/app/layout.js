/** @format */
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta property="og:title" content="Cheval" />
        <meta property="og:description" content="Description" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/taimoorshahzada/Project-Page-Website-using-HTML-CSS-only/main/img1.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="here is the image" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chevalme" />
        <meta name="twitter:title" content="Cheval" />
        <meta name="twitter:description" content="Description" />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/taimoorshahzada/Project-Page-Website-using-HTML-CSS-only/main/img1.jpg"
        />
        <meta name="twitter:image:alt" content="here is the image"></meta>
      </head>
      <body className={sora.variable}>
        <div>
          {children}
          {/* <CustomCursor /> */}
        </div>
      </body>
    </html>
  );
}
