import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/khet/AppShell";
import { Badge, Button, Card, EmptyState, PageHeader, SectionHeading } from "@/components/khet/ui";
import { cropName, problemName } from "@/lib/khet/i18n";
import { useKhet } from "@/lib/khet/store";
import { WifiOff } from "lucide-react";

export const Route = createFileRoute("/my-crop")({
  head: () => ({
    meta: [
      { title: "My crop — Khet" },
      {
        name: "description",
        content: "A calm overview of your crop: last check, saved observations and pending actions.",
      },
      { property: "og:title", content: "My crop — Khet" },
      {
        property: "og:description",
        content: "A calm overview of your crop: last check, saved observations and pending actions.",
      },
    ],
  }),
  component: MyCrop,
});

function MyCrop() {
  const { t, lang, myCrop, observations, offline, resetDraft, set } = useKhet();
  const navigate = useNavigate();

  const startFlow = () => {
    resetDraft();
    navigate({ to: "/choose-crop" });
  };

  if (!myCrop) {
    return (
      <AppShell>
        <PageHeader title={t("myCropTitle")} />
        <EmptyState
          title={t("emptyCrop")}
          action={
            <Button size="md" onClick={startFlow}>
              {t("addCrop")}
            </Button>
          }
        />
      </AppShell>
    );
  }

  const stats = [
    { label: t("lastCheck"), value: t("today") },
    { label: t("savedObs"), value: String(observations.length) },
    { label: t("pendingActions"), value: "1" },
  ];

  return (
    <AppShell>
      <PageHeader title={t("myCropTitle")} eyebrow={t("thisWeek")} />

      <Card className="flex items-center gap-4">
        <span className="text-4xl" aria-hidden="true">
          🌾
        </span>
        <div>
          <p className="khet-heading">{cropName(myCrop, lang)}</p>
          <p className="mt-1 khet-secondary text-muted-foreground">{t("thisWeek")}</p>
        </div>
      </Card>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.label} className="p-4">
            <p className="khet-secondary text-muted-foreground">{s.label}</p>
            <p className="mt-1 khet-heading">{s.value}</p>
          </Card>
        ))}
      </div>

      {offline && (
        <div className="mt-4">
          <Badge tone="warning" icon={<WifiOff className="size-4" />}>
            {t("savedOffline")}
          </Badge>
        </div>
      )}

      <section className="mt-10">
        <SectionHeading>{t("savedObs")}</SectionHeading>
        {observations.length === 0 ? (
          <EmptyState title={t("emptyObs")} />
        ) : (
          <ul className="space-y-3">
            {observations.map((o) => (
              <Card as="li" key={o.id}>
                <p className="khet-body font-semibold">{problemName(o.problem, lang)}</p>
                {o.note && (
                  <p className="mt-1 khet-secondary text-muted-foreground">{o.note}</p>
                )}
                <p className="mt-3 khet-secondary text-muted-foreground">
                  {cropName(o.crop, lang)} · {o.date}
                  {o.photo ? " · 📷" : ""}
                </p>
              </Card>
            ))}
          </ul>
        )}
      </section>

      <div className="mt-8 space-y-3">
        <Button onClick={startFlow}>{t("addNewInfo")}</Button>
        <Button variant="quiet" onClick={() => set("myCrop", null)}>
          {t("removeCrop")}
        </Button>
      </div>
    </AppShell>
  );
}
