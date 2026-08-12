import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

/* ---------------- Button ---------------- */

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-[background-color,color,box-shadow,transform] duration-150 select-none disabled:pointer-events-none disabled:opacity-50 active:scale-[0.985]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/92 shadow-[0_1px_0_0_color-mix(in_oklab,var(--foreground)_12%,transparent)]",
        secondary:
          "bg-surface text-foreground border border-border-strong hover:bg-secondary",
        quiet: "text-primary hover:bg-secondary underline-offset-4 hover:underline",
        warning: "bg-warning-surface text-warning-foreground border border-warning/40",
      },
      size: {
        lg: "min-h-14 px-6 text-[1.0625rem] w-full",
        md: "min-h-12 px-5 text-[1rem]",
        sm: "min-h-11 px-4 text-[0.9375rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "lg" },
  },
);

export function Button({
  className,
  variant,
  size,
  loading,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { loading?: boolean }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && <Loader2 className="size-5 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
}

/* ---------------- Cards ---------------- */

export function Card({
  className,
  children,
  as: As = "div",
}: {
  className?: string;
  children: ReactNode;
  as?: "div" | "section" | "li";
}) {
  return (
    <As className={cn("rounded-xl border border-border bg-card p-5", className)}>
      {children}
    </As>
  );
}

export function OptionCard({
  icon,
  title,
  subtitle,
  onClick,
  selected,
  className,
}: {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  onClick?: () => void;
  selected?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "group flex w-full items-center gap-4 rounded-xl border bg-card p-5 text-left transition-colors duration-150 active:scale-[0.99]",
        selected
          ? "border-primary bg-info-surface ring-2 ring-primary"
          : "border-border hover:border-border-strong hover:bg-secondary",
        className,
      )}
    >
      {icon && (
        <span
          aria-hidden="true"
          className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-2xl"
        >
          {icon}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block khet-heading">{title}</span>
        {subtitle && (
          <span className="mt-1 block khet-secondary text-muted-foreground">{subtitle}</span>
        )}
      </span>
      {selected && (
        <span className="khet-label shrink-0 text-primary" aria-hidden="true">
          ✓
        </span>
      )}
    </button>
  );
}

export function CropCard({
  emoji,
  name,
  secondary,
  selected,
  onClick,
}: {
  emoji: string;
  name: string;
  secondary: string;
  selected?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "flex min-h-32 flex-col items-start justify-between rounded-xl border bg-card p-4 text-left transition-colors duration-150 active:scale-[0.99]",
        selected
          ? "border-primary bg-info-surface ring-2 ring-primary"
          : "border-border hover:border-border-strong hover:bg-secondary",
      )}
    >
      <span className="text-3xl" aria-hidden="true">
        {emoji}
      </span>
      <span>
        <span className="block text-[1.125rem] font-semibold">{name}</span>
        <span className="block khet-secondary text-muted-foreground">{secondary}</span>
      </span>
    </button>
  );
}

/* ---------------- Badge / chips ---------------- */

export function Badge({
  children,
  tone = "neutral",
  icon,
}: {
  children: ReactNode;
  tone?: "neutral" | "calm" | "warning";
  icon?: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.875rem] font-medium",
        tone === "neutral" && "border-border bg-secondary text-muted-foreground",
        tone === "calm" && "border-primary/25 bg-info-surface text-primary",
        tone === "warning" && "border-warning/40 bg-warning-surface text-warning-foreground",
      )}
    >
      {icon && <span aria-hidden="true" className="flex items-center">{icon}</span>}
      {children}
    </span>
  );
}

/* ---------------- Page layout helpers ---------------- */

export function PageHeader({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description?: string;
  eyebrow?: string;
}) {
  return (
    <header className="mb-6">
      {eyebrow && <p className="khet-label mb-2 text-muted-foreground">{eyebrow}</p>}
      <h1 className="khet-title">{title}</h1>
      {description && (
        <p className="mt-3 khet-body text-muted-foreground">{description}</p>
      )}
    </header>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="khet-heading mb-4">{children}</h2>;
}

/* ---------------- Progress ---------------- */

export function ProgressSteps({
  current,
  total,
  label,
}: {
  current: number;
  total: number;
  label: string;
}) {
  return (
    <div className="mb-6">
      <p className="khet-secondary mb-2 font-semibold text-muted-foreground">{label}</p>
      <div className="flex gap-1.5" role="presentation">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors",
              i < current ? "bg-primary" : "bg-border",
            )}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------- States ---------------- */

export function EmptyState({
  title,
  action,
}: {
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-dashed border-border-strong bg-surface p-8 text-center">
      <p className="khet-body text-muted-foreground">{title}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

export function LoadingState({ label }: { label: string }) {
  return (
    <div
      className="flex items-center gap-3 rounded-xl border border-border bg-surface p-5"
      role="status"
      aria-live="polite"
    >
      <Loader2 className="size-5 shrink-0 animate-spin text-primary" aria-hidden="true" />
      <p className="khet-body">{label}</p>
    </div>
  );
}

export function ErrorState({
  title,
  body,
  actionLabel,
  onRetry,
}: {
  title: string;
  body: string;
  actionLabel: string;
  onRetry: () => void;
}) {
  return (
    <div className="rounded-xl border border-warning/40 bg-warning-surface p-5" role="alert">
      <p className="khet-heading text-warning-foreground">{title}</p>
      <p className="mt-2 khet-body text-warning-foreground">{body}</p>
      <div className="mt-5">
        <Button variant="secondary" size="md" onClick={onRetry}>
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}

/* ---------------- Toggle row ---------------- */

export function ToggleRow({
  label,
  description,
  checked,
  onChange,
  onLabel,
  offLabel,
}: {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  onLabel: string;
  offLabel: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border py-4 last:border-b-0">
      <span className="min-w-0">
        <span className="block khet-body font-semibold">{label}</span>
        {description && (
          <span className="mt-1 block khet-secondary text-muted-foreground">{description}</span>
        )}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={cn(
          "inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-[0.9375rem] font-semibold transition-colors",
          checked
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border-strong bg-surface text-muted-foreground",
        )}
      >
        {checked ? onLabel : offLabel}
      </button>
    </div>
  );
}

export function SegmentedControl<T extends string>({
  legend,
  value,
  options,
  onChange,
}: {
  legend: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="khet-body mb-3 font-semibold">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = o.value === value;
          return (
            <button
              key={o.value}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(o.value)}
              className={cn(
                "min-h-12 rounded-lg border px-5 text-[1rem] font-semibold transition-colors",
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border-strong bg-surface text-foreground hover:bg-secondary",
              )}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
