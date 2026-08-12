import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/khet/AppShell";
import { Button, OptionCard, PageHeader, ProgressSteps, SectionHeading } from "@/components/khet/ui";
import { cropName, problems } from "@/lib/khet/i18n";
import { useKhet } from "@/lib/khet/store";
import { Camera, Mic } from "lucide-react";

export const Route = createFileRoute("/describe")({
  head: () => ({
    meta: [
      { title: "Describe the problem — Khet" },
      {
        name: "description",
        content: "Select what you see in your crop, or describe it with a photo or your voice.",
      },
      { property: "og:title", content: "Describe the problem — Khet" },
      {
        property: "og:description",
        content: "Select what you see in your crop, or describe it with a photo or your voice.",
      },
    ],
  }),
  component: Describe,
});

function Describe() {
  const { t, lang, draft, setDraft } = useKhet();
  const navigate = useNavigate();
  const crop = cropName(draft.crop ?? "wheat", lang);

  return (
    <AppShell back>
      <ProgressSteps current={2} total={4} label={t("stepOf", { a: 2, b: 4 })} />
      <PageHeader
        title={lang === "hi" ? `${crop} ${t("problemTitleWheat")}` : `${crop}${t("problemTitleWheat")}`}
        description={t("problemHelp")}
      />

      <div className="space-y-3">
        {problems.map((p) => (
          <OptionCard
            key={p.id}
            title={p[lang]}
            selected={draft.problem === p.id}
            onClick={() => setDraft({ problem: p.id })}
          />
        ))}
      </div>

      <section className="mt-10">
        <SectionHeading>{t("orAdd")}</SectionHeading>
        <div className="grid gap-3 sm:grid-cols-2">
          <Button variant="secondary" onClick={() => navigate({ to: "/photo" })}>
            <Camera className="size-5" aria-hidden="true" />
            {t("takePhoto")}
          </Button>
          <Button variant="secondary" onClick={() => navigate({ to: "/voice" })}>
            <Mic className="size-5" aria-hidden="true" />
            {t("speak")}
          </Button>
        </div>
      </section>

      <div className="mt-8">
        <Button disabled={!draft.problem} onClick={() => navigate({ to: "/photo" })}>
          {t("continue")}
        </Button>
      </div>
    </AppShell>
  );
}
