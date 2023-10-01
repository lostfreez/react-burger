export function formatStatus(status: string): string {
    switch (status) {
      case "done":
        return "Выполнен";
      default:
        return status;
    }
  }
  