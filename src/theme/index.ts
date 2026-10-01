import type { CSSProperties } from "react";

import { palettes, type ThemeName } from "@/theme/palettes";

export { palettes } from "@/theme/palettes";
export type { ThemeName, ThemePalette } from "@/theme/palettes";

export const activeThemeName: ThemeName = "midnightCobalt";
export const activeTheme = palettes[activeThemeName];

export const activeThemeStyle = {
  "--background": activeTheme.background,
  "--foreground": activeTheme.foreground,
  "--card": activeTheme.card,
  "--card-foreground": activeTheme.cardForeground,
  "--muted": activeTheme.muted,
  "--muted-foreground": activeTheme.mutedForeground,
  "--border": activeTheme.border,
  "--border-strong": activeTheme.borderStrong,
  "--primary": activeTheme.primary,
  "--primary-foreground": activeTheme.primaryForeground,
  "--secondary": activeTheme.secondary,
  "--secondary-foreground": activeTheme.secondaryForeground,
  "--ring": activeTheme.ring,
  "--surface": activeTheme.surface,
  "--surface-foreground": activeTheme.surfaceForeground,
  "--surface-muted": activeTheme.surfaceMuted,
  "--surface-ring": activeTheme.surfaceRing,
  "--overlay": activeTheme.overlay,
  "--shadow": activeTheme.shadow,
  "--diagram-line": activeTheme.diagramLine,
  "--diagram-border": activeTheme.diagramBorder,
} as CSSProperties;
