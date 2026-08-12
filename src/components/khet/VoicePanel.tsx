import { Mic, Square } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useKhet } from "@/lib/khet/store";
import { Button } from "./ui";
import { cn } from "@/lib/utils";

type Phase = "idle" | "listening" | "processing" | "transcript" | "error";

export function VoicePanel({
  demoTranscript,
  onConfirm,
  confirmLabel,
}: {
  demoTranscript: string;
  onConfirm: (text: string) => void;
  confirmLabel?: string;
}) {
  const { t } = useKhet();
  const [phase, setPhase] = useState<Phase>("idle");
  const [text, setText] = useState("");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const list = timers.current;
    return () => list.forEach(clearTimeout);
  }, []);

  const start = () => {
    setPhase("listening");
    timers.current.push(
      setTimeout(() => setPhase("processing"), 1800),
      setTimeout(() => {
        setText(demoTranscript);
        setPhase("transcript");
      }, 2900),
    );
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div aria-live="polite" className="flex flex-col items-center gap-5 text-center">
        {phase !== "transcript" && (
          <>
            <button
              type="button"
              onClick={phase === "listening" ? () => setPhase("idle") : start}
              disabled={phase === "processing"}
              aria-label={phase === "listening" ? t("voiceListening") : t("voiceTapToSpeak")}
              className={cn(
                "flex size-28 items-center justify-center rounded-full border-2 transition-colors disabled:opacity-60",
                phase === "listening"
                  ? "animate-pulse border-primary bg-primary text-primary-foreground"
                  : "border-primary/30 bg-info-surface text-primary hover:bg-secondary",
              )}
            >
              {phase === "listening" ? (
                <Square className="size-9" aria-hidden="true" />
              ) : (
                <Mic className="size-10" aria-hidden="true" />
              )}
            </button>
            <p className="khet-heading">
              {phase === "idle" && t("voiceTapToSpeak")}
              {phase === "listening" && t("voiceListening")}
              {phase === "processing" && t("voiceProcessing")}
              {phase === "error" && t("voiceError")}
            </p>
          </>
        )}

        {phase === "transcript" && (
          <div className="w-full text-left">
            <label htmlFor="voice-transcript" className="khet-body font-semibold">
              {t("voiceYouSaid")}
            </label>
            <textarea
              id="voice-transcript"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              className="mt-3 w-full rounded-lg border border-input bg-surface p-4 khet-body"
            />
            <p className="mt-2 khet-secondary text-muted-foreground">{t("voiceEditHint")}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => onConfirm(text.trim())} disabled={!text.trim()}>
                {confirmLabel ?? t("voiceCorrect")}
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setText("");
                  setPhase("idle");
                }}
              >
                {t("voiceRetry")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
