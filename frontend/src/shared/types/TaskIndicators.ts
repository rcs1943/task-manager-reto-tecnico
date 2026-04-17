export type Priority = "high" | "medium" | "low";
export type Status = "pending" | "inProgress" | "completed";

export type Filter = {
  id: number;
  name: Priority | Status | null;
};
