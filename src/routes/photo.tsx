import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/khet/AppShell";
import { Button, PageHeader, ProgressSteps } from "@/components/khet/ui";
import { useKhet } from "@/lib/khet/store";
import { Camera, ImageIcon } from "lucide-react";
import { useState } from "react";
import demoPhoto from "@/assets/wheat-leaf-demo.jpg";

export const Route = createFileRoute("/photo")({
  head: () => ({
    meta: [
      { title: "Add a photo — Khet" },
      { name: "description", content: "Add a clear photo of the leaf or plant, or skip this step." },
      { property: "og:title", content: "Add a photo — Khet" },
      {
        property: "og:description",
        content: "Add a clear photo of the leaf or plant, or skip this step.",
      },
    ],
  }),
  component: PhotoScreen,
});

function PhotoScreen() {
  const { t, draft, setDraft } = useKhet();
  const navigate = useNavigate();
  const [taken, setTaken] = useState(draft.photo);

  const capture = () => {
    setTaken(true);
    setDraft({ photo: true });
  };

  return (
    <AppShell back>
      <ProgressSteps current={3} total={4} label={t("stepOf", { a: 3, b: 4 })} />
      <PageHeader title={t("photoTitle")} description={t("photoHelp")} />

      <div className="overflow-hidden rounded-xl border border-border bg-secondary">
        {taken ? (
          <img
            src={demoPhoto}
            alt={t("photoHelp")}
            width={768}
            height={1024}
            className="aspect-[4/3] w-full object-cover"
          />
        ) : (
          <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 text-muted-foreground">
            <Camera className="size-10" aria-hidden="true" />
            <p className="khet-secondary px-6 text-center">{t("photoDemoNote")}</p>
          </div>
        )}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Button onClick={capture}>
          <Camera className="size-5" aria-hidden="true" />
          {t("photoTake")}
        </Button>
        <Button variant="secondary" onClick={capture}>
          <ImageIcon className="size-5" aria-hidden="true" />
          {t("photoChoose")}
        </Button>
      </div>

      <div className="mt-8 space-y-3">
        <Button disabled={!taken} onClick={() => navigate({ to: "/result" })}>
          {t("continue")}
        </Button>
        <Button variant="quiet" onClick={() => navigate({ to: "/result" })}>
          {t("skip")}
        </Button>
      </div>
    </AppShell>
  );
}
