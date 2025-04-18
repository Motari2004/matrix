import ScrollToTop from './components/ScrollToTop';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
