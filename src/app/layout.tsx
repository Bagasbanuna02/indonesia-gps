import RootStyleRegistry from './emotion';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head />
      <body suppressHydrationWarning={true} style={{backgroundColor: "black"}}>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
