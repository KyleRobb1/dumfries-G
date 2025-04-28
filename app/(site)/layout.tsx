export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Add your navigation component here */}
      <main>{children}</main>
      {/* Add your footer component here */}
    </div>
  );
} 