import { Sidebar } from "../../components/composite/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F3F4F1] text-zinc-900 font-sans flex overflow-hidden">
      {/* Sidebar handles navigation and branding now */}
      <Sidebar />

      {/* Main Content Wrapper - Padded to give the white card a floating effect */}
      <div className="flex-1 flex flex-col h-screen p-4 pl-8 pt-8">
        {/* The actual workspace with hidden scrollbar classes */}
        <main className="bg-white flex-1 rounded-[2rem] shadow-sm border border-zinc-100 p-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="max-w-6xl mx-auto space-y-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
