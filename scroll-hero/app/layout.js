import "./globals.css";

export const metadata = {
  title: "Itz Fizz | Scroll-Driven Hero Animation",
  description:
    "A scroll-driven hero section built with Next.js, Tailwind CSS, GSAP and ScrollTrigger.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07080b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
