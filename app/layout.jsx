import "./globals.css";

export const metadata = {
  title: "Hacker Stack — AI Lead & Funnel Ops Console",
  description:
    "AI-native console that diagnoses lead chaos, repairs funnels, and orchestrates your revenue agents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-grid text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
