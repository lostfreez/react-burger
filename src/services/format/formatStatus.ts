export function formatStatus(status: string): string {
  switch (status) {
    case "done":
      return "Выполнен";
    case "created":
      return "Создан";
    case "pending":
      return "Готовится";
    default:
      return status;
  }
}
