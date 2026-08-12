import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/khet/AppShell";
import {
  Badge,
  Button,
  Card,
  ErrorState,
  LoadingState,
  PageHeader,
  ProgressSteps,
  SectionHeading,
} from "@/components/khet/ui";
import { cropName, problemName } from "@/lib/khet/i18n";
import { useKhet } from "@/lib/khet/store";
import { useEffect, useState } from "react";
import demoPhoto from "@/assets/wheat-leaf-demo.jpg";

export const Route = createFileRoute("/result")({
  head: () => ({
    meta: [
      { title: "AI-assisted information — Khet" },
      {
        name: "description",
        content:
          "An AI-assisted explanation of what you described, with simple checks you can do yourself.",
      },
      { property: "og:title", content: "AI-assisted information — Khet" },
      {
        property: "og:description",
        content: "An AI-assisted explanation with simple checks you can do yourself.",
      },
    ],
  }),
  component: ResultScreen,
});

function ResultScreen() {
  const { t, lang, draft, offline } = useKhet();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (offline) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const id = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(id);
  }, [offline]);

  const summary = (
    <Card>
      <dl className="space-y-4">
        <div>
          <dt className="khet-label text-muted-foreground">{t("yourCrop")}</dt>
          <dd className="mt-1 khet-body font-semibold">
            {cropName(draft.crop ?? "wheat", lang)}
          </dd>
        </div>
        <div>
          <dt className="khet-label text-muted-foreground">{t("yourObservation")}</dt>
          <dd className="mt-1 khet-body font-semibold">
            {draft.note || problemName(draft.problem ?? "yellow", lang)}
          </dd>
        </div>
        {draft.photo && (
          <div>
            <dt className="khet-label text-muted-foreground">{t("takePhoto")}</dt>
            <dd className="mt-2">
              <img
                src={demoPhoto}
                alt={t("photoHelp")}
                width={768}
                height={1024}
                loading="lazy"
                className="size-24 rounded-lg object-cover"
              />
            </dd>
          </div>
        )}
      </dl>
    </Card>
  );

  return (
    <AppShell back aside={<div className="hidden lg:block">{summary}</div>}>
      <ProgressSteps current={4} total={4} label={t("stepOf", { a: 4, b: 4 })} />
      <PageHeader title={t("resultTitle")} />

      <div className="lg:hidden">{summary}</div>

      <div className="mt-6 space-y-6">
        {offline ? (
          <ErrorState
            title={t("errorTitle")}
            body={t("errorBody")}
            actionLabel={t("retry")}
            onRetry={() => setLoading(false)}
          />
        ) : loading ? (
          <LoadingState label={t("preparing")} />
        ) : (
          <>
            <section className="rounded-xl border border-border bg-info-surface p-5">
              <Badge tone="calm">{t("aiLabel")}</Badge>
              <p className="mt-4 khet-body">{t("aiExplain")}</p>
              <p className="mt-3 khet-secondary text-muted-foreground">{t("aiNote")}</p>
            </section>

            <section>
              <SectionHeading>{t("checksTitle")}</SectionHeading>
              <ol className="space-y-3">
                {[t("check1"), t("check2"), t("check3")].map((c, i) => (
                  <li
                    key={c}
                    className="flex gap-4 rounded-xl border border-border bg-card p-5"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary font-semibold"
                    >
                      {i + 1}
                    </span>
                    <span className="khet-body">{c}</span>
                  </li>
                ))}
              </ol>
            </section>

            <p className="rounded-xl border border-warning/40 bg-warning-surface p-5 khet-body text-warning-foreground">
              {t("expertNote")}
            </p>
          </>
        )}

        <div className="space-y-3">
          <Button onClick={() => navigate({ to: "/steps" })}>{t("seeSteps")}</Button>
          <Button variant="secondary" onClick={() => navigate({ to: "/describe" })}>
            {t("changeInfo")}
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
