import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/khet/AppShell";
import { Button, PageHeader, ProgressSteps } from "@/components/khet/ui";
import { useKhet } from "@/lib/khet/store";
import { Check, Share2, Bookmark } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/steps")({
  head: () => ({
    meta: [
      { title: "Next steps — Khet" },
      {
        name: "description",
        content: "Four simple steps you can follow, one at a time, before deciding anything.",
      },
      { property: "og:title", content: "Next steps — Khet" },
      { property: "og:description", content: "Four simple steps you can follow, one at a time." },
    ],
  }),
  component: StepsScreen,
});

function StepsScreen() {
  const { t, saveObservation } = useKhet();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(1);

  const steps = [
    { title: t("step1"), body: t("step1d") },
    { title: t("step2"), body: t("step2d") },
    { title: t("step3"), body: t("step3d") },
    { title: t("step4"), body: t("step4d") },
  ];

  return (
    <AppShell back>
      <ProgressSteps
        current={current}
        total={steps.length}
        label={t("stepOf", { a: current, b: steps.length })}
      />
      <PageHeader title={t("stepsTitle")} />

      <ol className="space-y-3">
        {steps.map((s, i) => {
          const n = i + 1;
          const active = n === current;
          const done = n < current;
          return (
            <li
              key={s.title}
              aria-current={active ? "step" : undefined}
              className={cn(
                "flex gap-4 rounded-xl border p-5 transition-colors",
                active ? "border-primary bg-card" : "border-border bg-surface",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-full font-semibold",
                  done
                    ? "bg-primary text-primary-foreground"
                    : active
                      ? "bg-info-surface text-primary ring-2 ring-primary"
                      : "bg-secondary text-muted-foreground",
                )}
              >
                {done ? <Check className="size-5" /> : n}
              </span>
              <div className="min-w-0">
                <p className={cn("khet-body font-semibold", !active && !done && "text-muted-foreground")}>
                  {s.title}
                </p>
                {(active || done) && (
                  <p className="mt-2 khet-secondary text-muted-foreground">{s.body}</p>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 space-y-3">
        {current < steps.length ? (
          <>
            <Button onClick={() => setCurrent((c) => c + 1)}>{t("next")}</Button>
            <Button variant="secondary" onClick={() => navigate({ to: "/my-crop" })}>
              {t("later")}
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                saveObservation();
                toast.success(t("saved"));
                navigate({ to: "/my-crop" });
              }}
            >
              <Bookmark className="size-5" aria-hidden="true" />
              {t("saveObservation")}
            </Button>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button variant="secondary" size="md" onClick={() => toast.success(t("shared"))}>
                <Share2 className="size-5" aria-hidden="true" />
                {t("share")}
              </Button>
              <Button variant="secondary" size="md" onClick={() => navigate({ to: "/help" })}>
                {t("askHelp")}
              </Button>
            </div>
          </>
        )}
      </div>

      <p className="mt-8 rounded-xl border border-border bg-secondary p-5 khet-secondary text-muted-foreground">
        {t("stepsDisclaimer")}
      </p>
    </AppShell>
  );
}
