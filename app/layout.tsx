export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang='fr'><body style={{fontFamily:'Inter,system-ui,Arial'}}>{children}</body></html>);
}
