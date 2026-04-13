import { FileText, Scale, ClipboardList } from "lucide-react";

export default function LSPDHomepage() {
  const menus = [
    {
      title: "Penal Code",
      description: "View legal codes and regulations.",
      icon: Scale,
    },
    {
      title: "Arrest Report",
      description: "Create and manage arrest reports.",
      icon: FileText,
    },
    {
      title: "Daily Field Activity Report",
      description: "Record daily field activities.",
      icon: ClipboardList,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="mb-10 flex items-center rounded-2xl border border-white/10 bg-slate-900 px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold">LSPD Homepage</h1>
            <p className="text-sm text-slate-400">Los Santos Police Department Internal Portal</p>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold">Main Menu</h2>
          <p className="mt-2 text-slate-400">Select a module to continue.</p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <button
                key={menu.title}
                className="rounded-2xl border border-white/10 bg-slate-900 p-6 text-left transition hover:border-blue-400/50 hover:bg-slate-800"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-xl font-semibold">{menu.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{menu.description}</p>
              </button>
            );
          })}
        </section>

        <footer className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © Jogjagamers V Roleplay • Created by RaySan
        </footer>
      </div>
    </div>
  );
}
