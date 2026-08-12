import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell, OfflineToggle } from "@/components/khet/AppShell";
import { Badge, Card, OptionCard, SectionHeading } from "@/components/khet/ui";
import { useKhet } from "@/lib/khet/store";
import { cropName } from "@/lib/khet/i18n";
import { useState } from "react";
import { WifiOff, Sprout, CloudSun, Droplets, CalendarCheck, Wheat } from "lucide-react";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Home — Khet" },
      {
        name: "description",
        content: "Choose what you need today: crop problems, weather, irrigation or today's tasks.",
      },
      { property: "og:title", content: "Home — Khet" },
      {
        property: "og:description",
        content: "Choose what you need today: crop problems, weather, irrigation or today's tasks.",
      },
    ],
  }),
  component: HomeScreen,
});

function HomeScreen() {
  const { t, lang, myCrop, offline, resetDraft } = useKhet();
  const navigate = useNavigate();
  const [notice, setNotice] = useState<string | null>(null);

  const needsInternet = () => setNotice(t("needsInternet"));

  return (
    <AppShell>
      <header className="mb-8">
        <p className="khet-title">{t("greeting")}</p>
        <h1 className="mt-2 khet-heading text-muted-foreground">{t("homeQuestion")}</h1>
      </header>

      <div className="space-y-3">
        <OptionCard
          icon={<Sprout className="size-6 text-primary" />}
          title={t("actProblem")}
          subtitle={t("actProblemSub")}
          onClick={() => {
            resetDraft();
            navigate({ to: "/choose-crop" });
          }}
        />
        <OptionCard
          icon={<CloudSun className="size-6 text-primary" />}
          title={t("actWeather")}
          subtitle={t("actWeatherSub")}
          onClick={() => (offline ? needsInternet() : navigate({ to: "/help" }))}
        />
        <OptionCard
          icon={<Droplets className="size-6 text-primary" />}
          title={t("actWater")}
          subtitle={t("actWaterSub")}
          onClick={() => (offline ? needsInternet() : navigate({ to: "/help" }))}
        />
        <OptionCard
          icon={<CalendarCheck className="size-6 text-primary" />}
          title={t("actTasks")}
          subtitle={t("actTasksSub")}
          onClick={() => navigate({ to: "/my-crop" })}
        />
      </div>

      {notice && (
        <div className="mt-6 rounded-xl border border-warning/40 bg-warning-surface p-5" role="status">
          <p className="khet-body text-warning-foreground">{notice}</p>
          <button
            type="button"
            onClick={() => setNotice(null)}
            className="mt-4 min-h-11 rounded-lg border border-warning/40 px-4 font-semibold text-warning-foreground"
          >
            {t("tryLater")}
          </button>
        </div>
      )}

      <section className="mt-10">
        <SectionHeading>{t("myCropShort")}</SectionHeading>
        <Card>
          <div className="flex items-center gap-4">
            <Wheat className="size-8 shrink-0 text-primary" aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <p className="khet-heading">{myCrop ? cropName(myCrop, lang) : t("emptyCrop")}</p>
              <p className="mt-1 khet-secondary text-muted-foreground">
                {t("lastChecked")}: {t("today")}
              </p>
            </div>
          </div>
        </Card>
      </section>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {offline && (
          <Badge tone="warning" icon={<WifiOff className="size-4" />}>
            {t("offlineChip")}
          </Badge>
        )}
        <OfflineToggle />
      </div>
    </AppShell>
  );
}
