export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full flex justify-center items-center p-8">
      <div className="w-full max-w-6xl">{children}</div>
    </div>
  );
}
