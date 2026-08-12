import { createFileRoute, Link } from "@tanstack/react-router";
import { useKhet } from "@/lib/khet/store";
import { Badge, Button, SegmentedControl } from "@/components/khet/ui";
import { LanguageSwitcher } from "@/components/khet/AppShell";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khet — Useful farming information, made simple" },
      {
        name: "description",
        content:
          "Khet is a concept prototype of a Hindi-friendly, accessible mobile companion that helps farmers understand crop problems and decide the next step.",
      },
      { property: "og:title", content: "Khet — Useful farming information, made simple" },
      {
        property: "og:description",
        content:
          "A calm, accessible, Hindi-first mobile prototype for understanding crop problems step by step.",
      },
    ],
  }),
  component: Welcome,
});

function Welcome() {
  const { t, textSize, set } = useKhet();
  const [showSize, setShowSize] = useState(false);

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <div className="mx-auto flex w-full max-w-[600px] flex-1 flex-col px-6 py-8">
        <div className="flex items-center justify-between gap-4">
          <span className="text-2xl font-bold tracking-tight">{t("brand")}</span>
          <LanguageSwitcher />
        </div>

        <div className="mt-16 flex-1">
          <Badge tone="calm">{t("conceptLabel")}</Badge>
          <h1 className="mt-6 khet-display">{t("welcomeHeadline")}</h1>
          <p className="mt-5 khet-body text-muted-foreground">{t("welcomeSupport")}</p>
        </div>

        <div className="mt-12 space-y-4">
          {showSize && (
            <div className="rounded-xl border border-border bg-card p-5">
              <SegmentedControl
                legend={t("textSize")}
                value={textSize}
                onChange={(v) => set("textSize", v)}
                options={[
                  { value: "default", label: t("sizeDefault") },
                  { value: "large", label: t("sizeLarge") },
                  { value: "xl", label: t("sizeXL") },
                ]}
              />
            </div>
          )}
          <button
            type="button"
            onClick={() => setShowSize((s) => !s)}
            aria-expanded={showSize}
            className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-border-strong bg-surface px-4 font-semibold"
          >
            {t("textSizeShortcut")}
          </button>

          <Link to="/home" className="block">
            <Button className="w-full">{t("welcomeStart")}</Button>
          </Link>
          <p className="text-center khet-secondary text-muted-foreground">{t("noLogin")}</p>
        </div>
      </div>
    </div>
  );
}
