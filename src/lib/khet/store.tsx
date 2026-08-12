import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translate, type Lang, type StringKey } from "./i18n";

export type TextSize = "default" | "large" | "xl";

export type Observation = {
  id: string;
  crop: string;
  problem: string;
  note: string;
  photo: boolean;
  date: string;
};

type Draft = {
  crop: string | null;
  problem: string | null;
  note: string;
  photo: boolean;
};

type State = {
  lang: Lang;
  textSize: TextSize;
  voiceAssist: boolean;
  contrast: boolean;
  reduceMotion: boolean;
  offline: boolean;
  myCrop: string | null;
  observations: Observation[];
  draft: Draft;
};

const DEFAULTS: State = {
  lang: "hi",
  textSize: "default",
  voiceAssist: true,
  contrast: false,
  reduceMotion: false,
  offline: false,
  myCrop: "wheat",
  observations: [
    {
      id: "seed-1",
      crop: "wheat",
      problem: "yellow",
      note: "नीचे के कुछ पत्ते पीले दिखे",
      photo: true,
      date: "2 days ago",
    },
    {
      id: "seed-2",
      crop: "wheat",
      problem: "growth",
      note: "खेत के कोने में पौधे छोटे हैं",
      photo: false,
      date: "5 days ago",
    },
  ],
  draft: { crop: null, problem: null, note: "", photo: false },
};

type Ctx = State & {
  set: <K extends keyof State>(key: K, value: State[K]) => void;
  setDraft: (patch: Partial<Draft>) => void;
  resetDraft: () => void;
  saveObservation: () => void;
  t: (key: StringKey, vars?: Record<string, string | number>) => string;
};

const KhetContext = createContext<Ctx | null>(null);
const KEY = "khet-state-v1";

const SIZE_PX: Record<TextSize, string> = {
  default: "16px",
  large: "18.5px",
  xl: "21px",
};

export function KhetProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(DEFAULTS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setState((s) => ({ ...s, ...JSON.parse(raw), draft: s.draft }));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      const { draft: _draft, ...rest } = state;
      localStorage.setItem(KEY, JSON.stringify(rest));
    } catch {
      /* ignore */
    }
    const root = document.documentElement;
    root.style.fontSize = SIZE_PX[state.textSize];
    root.lang = state.lang;
    root.classList.toggle("khet-contrast", state.contrast);
    root.classList.toggle("khet-reduce-motion", state.reduceMotion);
  }, [state]);

  const set = useCallback(<K extends keyof State>(key: K, value: State[K]) => {
    setState((s) => ({ ...s, [key]: value }));
  }, []);

  const setDraft = useCallback((patch: Partial<Draft>) => {
    setState((s) => ({ ...s, draft: { ...s.draft, ...patch } }));
  }, []);

  const resetDraft = useCallback(() => {
    setState((s) => ({ ...s, draft: DEFAULTS.draft }));
  }, []);

  const saveObservation = useCallback(() => {
    setState((s) => {
      if (!s.draft.crop || !s.draft.problem) return s;
      const obs: Observation = {
        id: `obs-${Date.now()}`,
        crop: s.draft.crop,
        problem: s.draft.problem,
        note: s.draft.note,
        photo: s.draft.photo,
        date: "Today",
      };
      return { ...s, myCrop: s.myCrop ?? s.draft.crop, observations: [obs, ...s.observations] };
    });
  }, []);

  const t = useCallback(
    (key: StringKey, vars?: Record<string, string | number>) =>
      translate(key, state.lang, vars),
    [state.lang],
  );

  const value = useMemo<Ctx>(
    () => ({ ...state, set, setDraft, resetDraft, saveObservation, t }),
    [state, set, setDraft, resetDraft, saveObservation, t],
  );

  return <KhetContext.Provider value={value}>{children}</KhetContext.Provider>;
}

export function useKhet() {
  const ctx = useContext(KhetContext);
  if (!ctx) throw new Error("useKhet must be used inside KhetProvider");
  return ctx;
}
