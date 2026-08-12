import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/khet/AppShell";
import { Button, CropCard, PageHeader, ProgressSteps } from "@/components/khet/ui";
import { crops } from "@/lib/khet/i18n";
import { Wheat, Sprout, Leaf, Carrot, Bean, Plus } from "lucide-react";
import type { ReactNode } from "react";

const cropIcons: Record<string, ReactNode> = {
  wheat: <Wheat className="size-6" />,
  rice: <Sprout className="size-6" />,
  maize: <Leaf className="size-6" />,
  potato: <Carrot className="size-6" />,
  pulses: <Bean className="size-6" />,
  other: <Plus className="size-6" />,
};
import { useKhet } from "@/lib/khet/store";

export const Route = createFileRoute("/choose-crop")({
  head: () => ({
    meta: [
      { title: "Choose your crop — Khet" },
      { name: "description", content: "Pick the crop you are looking at to continue." },
      { property: "og:title", content: "Choose your crop — Khet" },
      { property: "og:description", content: "Pick the crop you are looking at to continue." },
    ],
  }),
  component: ChooseCrop,
});

function ChooseCrop() {
  const { t, lang, draft, setDraft } = useKhet();
  const navigate = useNavigate();

  return (
    <AppShell back>
      <ProgressSteps current={1} total={4} label={t("stepOf", { a: 1, b: 4 })} />
      <PageHeader title={t("chooseCropTitle")} description={t("chooseCropHelp")} />

      <div className="grid grid-cols-2 gap-3">
        {crops.map((c) => (
          <CropCard
            key={c.id}
            icon={cropIcons[c.id]}
            name={c[lang]}
            secondary={lang === "hi" ? c.en : c.hi}
            selected={draft.crop === c.id}
            onClick={() => setDraft({ crop: c.id })}
          />
        ))}
      </div>

      <div className="sticky bottom-20 mt-8 md:bottom-0 md:static">
        <Button disabled={!draft.crop} onClick={() => navigate({ to: "/describe" })}>
          {t("continue")}
        </Button>
      </div>
    </AppShell>
  );
}
