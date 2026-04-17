import { Filter } from "@/shared/types/TaskIndicators";

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: Filter;
  status: Filter;
}
