import { vars } from "nativewind";

export const theme = {
  light: vars({
    "--background": "0, 0%, 100%",
    "--foreground": "0, 7%, 11%",
    "--card": "0, 0%, 100%",
    "--card-foreground": "224, 71.4%, 4.1%",
    "--popover": "0, 0%, 100%",
    "--popover-foreground": "224, 71.4%, 4.1%",
    "--primary": "204, 70%, 53%",
    "--primary-foreground": "210, 20%, 98%",
    "--secondary": "220, 14.3%, 95.9%",
    "--secondary-foreground": "220.9, 39.3%, 11%",
    "--muted": "220, 14.3%, 95.9%",
    "--muted-foreground": "220, 8.9%, 46.1%",
    "--accent": "220, 14.3%, 95.9%",
    "--accent-foreground": "220.9, 39.3%, 11%",
    "--destructive": "0, 84.2%, 60.2%",
    "--destructive-foreground": "210, 20%, 98%",
    "--border": "220, 13%, 91%",
    "--input": "220, 13%, 91%",
    "--ring": "224, 71.4%, 4.1%",
    "--radius": "0.5rem",
    "--chart-1": "12, 76%, 61%",
    "--chart-2": "173, 58%, 39%",
    "--chart-3": "197, 37%, 24%",
    "--chart-4": "43, 74%, 66%",
    "--chart-5": "27, 87%, 67%",
  }),

  dark: vars({
    "--background": "224, 71.4%, 4.1%",
    "--foreground": "210, 20%, 98%",
    "--card": "224, 71.4%, 4.1%",
    "--card-foreground": "210, 20%, 98%",
    "--popover": "240, 9%, 13%",
    "--popover-foreground": "210, 20%, 98%",
    "--primary": "204, 70%, 53%",
    "--primary-foreground": "220.9, 39.3%, 11%",
    "--secondary": "215, 27.9%, 16.9%",
    "--secondary-foreground": "210, 20%, 98%",
    "--muted": "215, 27.9%, 16.9%",
    "--muted-foreground": "217.9, 10.6%, 64.9%",
    "--accent": "215, 27.9%, 16.9%",
    "--accent-foreground": "210, 20%, 98%",
    "--destructive": "0, 62.8%, 30.6%",
    "--destructive-foreground": "210, 20%, 98%",
    "--border": "215, 27.9%, 16.9%",
    "--input": "215, 27.9%, 16.9%",
    "--ring": "216, 12.2%, 83.9%",
    "--chart-1": "220, 70%, 50%",
    "--chart-2": "160, 60%, 45%",
    "--chart-3": "30, 80%, 55%",
    "--chart-4": "280, 65%, 60%",
    "--chart-5": "340, 75%, 55%",
  }),
};

export const colors = (theme: "light" | "dark" | undefined) => {
  const _colors = {
    light: {
      background: "hsl(0, 0%, 100%)",
      foreground: "hsl(0, 7%, 11%)",
      card: "hsl(0, 0%, 100%)",
      cardForeground: "hsl(0, 7%, 11%)",
      popover: "hsl(0, 0%, 100%)",
      popoverForeground: "hsl(0, 7%, 11%)",
      primary: "hsl(204, 70%, 53%)",
      primaryForeground: "hsl(210, 20%, 98%)",
      secondary: "hsl(220, 14.3%, 95.9%)",
      secondaryForeground: "hsl(220.9, 39.3%, 11%)",
      muted: "hsl(220, 14.3%, 95.9%)",
      mutedForeground: "hsl(220, 8.9%, 46.1%)",
      accent: "hsl(220, 14.3%, 95.9%)",
      accentForeground: "hsl(220.9, 39.3%, 11%)",
      destructive: "hsl(0, 84.2%, 60.2%)",
      destructiveForeground: "hsl(210, 20%, 98%)",
      border: "hsl(220, 13%, 91%)",
      input: "hsl(220, 13%, 91%)",
      ring: "hsl(0, 7%, 11%)",
      radius: "0.5rem",
      chart1: "hsl(12, 76%, 61%)",
      chart2: "hsl(173, 58%, 39%)",
      chart3: "hsl(197, 37%, 24%)",
      chart4: "hsl(43, 74%, 66%)",
      chart5: "hsl(27, 87%, 67%)",
    },

    dark: {
      background: "hsl(224, 71.4%, 4.1%)",
      foreground: "hsl(210, 20%, 98%)",
      card: "hsl(224, 71.4%, 4.1%)",
      cardForeground: "hsl(210, 20%, 98%)",
      popover: "hsl(240, 9%, 13%)",
      popoverForeground: "hsl(210, 20%, 98%)",
      primary: "hsl(204, 70%, 53%)",
      primaryForeground: "hsl(220.9, 39.3%, 11%)",
      secondary: "hsl(215, 27.9%, 16.9%)",
      secondaryForeground: "hsl(210, 20%, 98%)",
      muted: "hsl(215, 27.9%, 16.9%)",
      mutedForeground: "hsl(217.9, 10.6%, 64.9%)",
      accent: "hsl(215, 27.9%, 16.9%)",
      accentForeground: "hsl(210, 20%, 98%)",
      destructive: "hsl(0, 62.8%, 30.6%)",
      destructiveForeground: "hsl(210, 20%, 98%)",
      border: "hsl(215, 27.9%, 16.9%)",
      input: "hsl(215, 27.9%, 16.9%)",
      ring: "hsl(216, 12.2%, 83.9%)",
      chart1: "hsl(220, 70%, 50%)",
      chart2: "hsl(160, 60%, 45%)",
      chart3: "hsl(30, 80%, 55%)",
      chart4: "hsl(280, 65%, 60%)",
      chart5: "hsl(340, 75%, 55%)",
    },
  };

  return _colors[theme ?? "light"];
};
