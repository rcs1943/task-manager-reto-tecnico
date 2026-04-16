export interface Task {
  id: number;
  title: string;
  description: string;
  paragraph: string;
  priority: "high" | "medium" | "low";
  status: "pending" | "completed";
}
