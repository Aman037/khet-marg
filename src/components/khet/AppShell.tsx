import { Link, useRouter } from "@tanstack/react-router";
import { Home, Sprout, LifeBuoy, Settings, WifiOff, Wifi, ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useKhet } from "@/lib/khet/store";
import { Badge } from "./ui";

const nav = [
  { to: "/home", key: "navHome", Icon: Home },
  { to: "/my-crop", key: "navCrop", Icon: Sprout },
  { to: "/help", key: "navHelp", Icon: LifeBuoy },
  { to: "/settings", key: "navSettings", Icon: Settings },
] as const;

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, set, t } = useKhet();
  return (
    <div
      className={cn("inline-flex items-center rounded-full border border-border-strong bg-surface p-1", className)}
      role="group"
      aria-label={t("langSwitch")}
    >
      {(["hi", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          aria-pressed={lang === l}
          onClick={() => set("lang", l)}
          className={cn(
            "min-h-9 rounded-full px-3 text-[0.9375rem] font-semibold transition-colors",
            lang === l
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {l === "hi" ? "हिंदी" : "English"}
        </button>
      ))}
    </div>
  );
}

export function OfflineBanner() {
  const { offline, t } = useKhet();
  return (
    <div aria-live="polite">
      {offline && (
        <div className="border-b border-warning/30 bg-warning-surface">
          <div className="mx-auto flex max-w-[1100px] items-center gap-3 px-5 py-3">
            <WifiOff className="size-5 shrink-0 text-warning-foreground" aria-hidden="true" />
            <p className="khet-secondary text-warning-foreground">
              <span className="font-semibold">{t("offlineTitle")}</span> — {t("offlineBody")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export function OfflineToggle() {
  const { offline, set, t } = useKhet();
  return (
    <button
      type="button"
      onClick={() => set("offline", !offline)}
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border-strong bg-surface px-4 text-[0.9375rem] font-medium text-muted-foreground transition-colors hover:bg-secondary"
      aria-pressed={offline}
    >
      {offline ? (
        <WifiOff className="size-4" aria-hidden="true" />
      ) : (
        <Wifi className="size-4" aria-hidden="true" />
      )}
      {offline ? t("onlineChip") : t("demoOfflineToggle")}
    </button>
  );
}

export function TopBar({ back }: { back?: boolean }) {
  const { t } = useKhet();
  const router = useRouter();
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1100px] items-center gap-4 px-5 py-3">
        {back ? (
          <button
            type="button"
            onClick={() => router.history.back()}
            className="-ml-2 inline-flex min-h-11 min-w-11 items-center gap-1 rounded-lg px-2 font-semibold text-foreground hover:bg-secondary"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
            {t("back")}
          </button>
        ) : (
          <Link to="/home" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">{t("brand")}</span>
            <span className="hidden khet-secondary text-muted-foreground sm:inline">
              {t("conceptLabel")}
            </span>
          </Link>
        )}
        <nav aria-label="Main" className="ml-auto hidden items-center gap-1 md:flex">
          {nav.map(({ to, key, Icon }) => (
            <Link
              key={to}
              to={to}
              activeProps={{ "data-active": "true" }}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 font-medium text-muted-foreground hover:bg-secondary data-[active=true]:bg-secondary data-[active=true]:text-foreground"
            >
              <Icon className="size-4" aria-hidden="true" />
              {t(key)}
            </Link>
          ))}
        </nav>
        <div className="ml-auto md:ml-0">
          <LanguageSwitcher />
        </div>
      </div>
      <OfflineBanner />
    </header>
  );
}

export function BottomNav() {
  const { t } = useKhet();
  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface md:hidden"
    >
      <ul className="mx-auto flex max-w-[520px]">
        {nav.map(({ to, key, Icon }) => (
          <li key={to} className="flex-1">
            <Link
              to={to}
              activeProps={{ "data-active": "true" }}
              className="flex min-h-16 flex-col items-center justify-center gap-1 px-1 text-[0.8125rem] font-medium text-muted-foreground data-[active=true]:text-primary"
            >
              <Icon className="size-6" aria-hidden="true" />
              {t(key)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function AppShell({
  children,
  back,
  aside,
}: {
  children: ReactNode;
  back?: boolean;
  aside?: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-background pb-24 md:pb-12">
      <TopBar back={back ?? false} />
      <main className="mx-auto w-full max-w-[1100px] px-5 py-8">
        {aside ? (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="min-w-0">{children}</div>
            <aside className="min-w-0 space-y-4">{aside}</aside>
          </div>
        ) : (
          <div className="mx-auto w-full max-w-[600px]">{children}</div>
        )}
      </main>
      <BottomNav />
    </div>
  );
}

export function ConceptNote({ children }: { children: ReactNode }) {
  return (
    <p className="khet-secondary text-muted-foreground">
      <Badge tone="neutral">{children}</Badge>
    </p>
  );
}
