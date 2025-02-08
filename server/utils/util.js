export function getPriority(priority) {
  switch (priority.toLowerCase()) {
    case "coordinator":
      return 5;
    case "assistant coordinator":
      return 4;
    case "lead":
      return 3;
    case "assistant team lead":
      return 2;
    case "member":
      return 1;

    default:
      return 0;
  }
}
