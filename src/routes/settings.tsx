import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/khet/AppShell";
import { Card, PageHeader, SectionHeading, SegmentedControl, ToggleRow } from "@/components/khet/ui";
import { useKhet } from "@/lib/khet/store";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Khet" },
      {
        name: "description",
        content: "Change language, text size, voice assistance, contrast, motion and offline behaviour.",
      },
      { property: "og:title", content: "Settings — Khet" },
      {
        property: "og:description",
        content: "Change language, text size, voice assistance, contrast, motion and offline behaviour.",
      },
    ],
  }),
  component: SettingsScreen,
});

function SettingsScreen() {
  const {
    t,
    lang,
    textSize,
    voiceAssist,
    contrast,
    reduceMotion,
    offline,
    set,
  } = useKhet();

  return (
    <AppShell>
      <PageHeader title={t("settingsTitle")} />

      <section className="space-y-6">
        <Card>
          <SegmentedControl
            legend={t("language")}
            value={lang}
            onChange={(v) => set("lang", v)}
            options={[
              { value: "hi", label: "हिंदी" },
              { value: "en", label: "English" },
            ]}
          />
        </Card>

        <Card>
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
          <div className="mt-5 rounded-lg border border-border bg-secondary p-4">
            <p className="khet-label text-muted-foreground">{t("preview")}</p>
            <p className="mt-2 khet-body">{t("previewText")}</p>
          </div>
        </Card>

        <Card>
          <ToggleRow
            label={t("voiceAssist")}
            checked={voiceAssist}
            onChange={(v) => set("voiceAssist", v)}
            onLabel={t("on")}
            offLabel={t("off")}
          />
          <ToggleRow
            label={t("highContrast")}
            checked={contrast}
            onChange={(v) => set("contrast", v)}
            onLabel={t("on")}
            offLabel={t("off")}
          />
          <ToggleRow
            label={t("reduceMotion")}
            checked={reduceMotion}
            onChange={(v) => set("reduceMotion", v)}
            onLabel={t("on")}
            offLabel={t("off")}
          />
        </Card>

        <section>
          <SectionHeading>{t("offlineInfo")}</SectionHeading>
          <Card>
            <p className="khet-body text-muted-foreground">{t("offlineInfoText")}</p>
            <div className="mt-4">
              <ToggleRow
                label={t("demoOfflineToggle")}
                checked={offline}
                onChange={(v) => set("offline", v)}
                onLabel={t("on")}
                offLabel={t("off")}
              />
            </div>
          </Card>
        </section>
      </section>
    </AppShell>
  );
}
