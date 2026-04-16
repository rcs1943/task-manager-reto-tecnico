import { Priority, Status } from "@/shared/types/TaskIndicators";

type IndicatorConfig = { color: string; label: string };

export const priorityColors: Record<Priority, IndicatorConfig> = {
  high: { color: "#ef4444", label: "ALTA" },
  medium: { color: "#f59e0b", label: "MEDIA" },
  low: { color: "#22c55e", label: "BAJA" },
};

export const statusColors: Record<Status, IndicatorConfig> = {
  pending: { color: "#7F8290", label: "PENDIENTE" },
  completed: { color: "#22c55e", label: "COMPLETADO" },
};
