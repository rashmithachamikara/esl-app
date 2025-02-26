export default function TableDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-16" style={{ maxWidth: "1000px" }}>
      {children}
    </div>
  );
}
