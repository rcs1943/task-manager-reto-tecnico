import { Priority, Status } from "@/shared/types/TaskIndicators";

export type LabelConfig = {
  label: string;
  bg: string;
  text: string;
};

export const priorityConfig: Record<Priority, LabelConfig> = {
  high: {
    label: "Prioridad alta",
    bg: "#fee2e2",
    text: "#991b1b",
  },
  medium: {
    label: "Prioridad media",
    bg: "#FFAA0520",
    text: "#FFAA05",
  },
  low: {
    label: "Prioridad baja",
    bg: "#22C55E20",
    text: "#22C55E",
  },
};

export const statusConfig: Record<Status, LabelConfig> = {
  pending: {
    label: "Pendiente",
    bg: "#E6E1EF",
    text: "#4A4554",
  },
  inProgress: {
    label: "En curso",
    bg: "#FFAA05",
    text: "#FFFFFF",
  },
  completed: {
    label: "Completado",
    bg: "#E0E8FF",
    text: "#013D9A",
  },
};
