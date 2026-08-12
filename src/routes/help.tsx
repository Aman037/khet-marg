import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/khet/AppShell";
import { Button, Card, OptionCard, PageHeader, SectionHeading } from "@/components/khet/ui";
import { VoicePanel } from "@/components/khet/VoicePanel";
import { useKhet } from "@/lib/khet/store";
import { useState } from "react";
import { Mic, Camera, BookOpen, UserRound } from "lucide-react";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help — Khet" },
      {
        name: "description",
        content: "Ask by speaking, show a photo, see how to do something, or reach a local expert.",
      },
      { property: "og:title", content: "Help — Khet" },
      {
        property: "og:description",
        content: "Ask by speaking, show a photo, see how to do something, or reach a local expert.",
      },
    ],
  }),
  component: HelpScreen,
});

function HelpScreen() {
  const { t, lang } = useKhet();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"menu" | "voice" | "expert" | "answer">("menu");

  if (mode === "voice" || mode === "answer") {
    return (
      <AppShell back>
        <PageHeader title={t("helpVoice")} description={t("helpVoiceSub")} />
        {mode === "voice" ? (
          <VoicePanel
            demoTranscript={
              lang === "hi"
                ? "गेहूँ के पत्ते पीले हो रहे हैं, क्या करूँ?"
                : "The wheat leaves are turning yellow, what should I do?"
            }
            onConfirm={() => setMode("answer")}
          />
        ) : (
          <Card>
            <p className="khet-body">{t("helpAnswer")}</p>
            <div className="mt-6 space-y-3">
              <Button onClick={() => navigate({ to: "/steps" })}>{t("seeSteps")}</Button>
              <Button variant="secondary" onClick={() => setMode("menu")}>
                {t("back")}
              </Button>
            </div>
            <p className="mt-6 khet-secondary text-muted-foreground">{t("stepsDisclaimer")}</p>
          </Card>
        )}
      </AppShell>
    );
  }

  return (
    <AppShell>
      <PageHeader title={t("helpTitle")} />
      <SectionHeading>{t("helpQuestion")}</SectionHeading>

      <div className="space-y-3">
        <OptionCard
          icon={<Mic className="size-6 text-primary" />}
          title={t("helpVoice")}
          subtitle={t("helpVoiceSub")}
          onClick={() => setMode("voice")}
        />
        <OptionCard
          icon={<Camera className="size-6 text-primary" />}
          title={t("helpPhoto")}
          subtitle={t("helpPhotoSub")}
          onClick={() => navigate({ to: "/photo" })}
        />
        <OptionCard
          icon={<BookOpen className="size-6 text-primary" />}
          title={t("helpHow")}
          subtitle={t("helpHowSub")}
          onClick={() => navigate({ to: "/steps" })}
        />
        <OptionCard
          icon={<UserRound className="size-6 text-primary" />}
          title={t("helpExpert")}
          subtitle={t("helpExpertSub")}
          onClick={() => setMode("expert")}
        />
      </div>

      {mode === "expert" && (
        <div className="mt-6 rounded-xl border border-warning/40 bg-warning-surface p-5" role="status">
          <p className="khet-body text-warning-foreground">{t("helpExpertNote")}</p>
        </div>
      )}
    </AppShell>
  );
}
