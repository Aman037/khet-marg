import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AppShell } from "@/components/khet/AppShell";
import { PageHeader, ProgressSteps } from "@/components/khet/ui";
import { VoicePanel } from "@/components/khet/VoicePanel";
import { useKhet } from "@/lib/khet/store";

export const Route = createFileRoute("/voice")({
  head: () => ({
    meta: [
      { title: "Speak instead — Khet" },
      {
        name: "description",
        content: "Describe the crop problem by speaking. Review and edit the transcript before continuing.",
      },
      { property: "og:title", content: "Speak instead — Khet" },
      {
        property: "og:description",
        content: "Describe the crop problem by speaking, then review and edit the transcript.",
      },
    ],
  }),
  component: VoiceScreen,
});

function VoiceScreen() {
  const { t, lang, setDraft } = useKhet();
  const navigate = useNavigate();

  return (
    <AppShell back>
      <ProgressSteps current={2} total={4} label={t("stepOf", { a: 2, b: 4 })} />
      <PageHeader title={t("voiceIdle")} description={t("problemHelp")} />
      <VoicePanel
        demoTranscript={
          lang === "hi"
            ? "गेहूँ के पत्ते पीले हो रहे हैं"
            : "The wheat leaves are turning yellow"
        }
        onConfirm={(text) => {
          setDraft({ problem: "yellow", note: text });
          navigate({ to: "/photo" });
        }}
      />
    </AppShell>
  );
}
