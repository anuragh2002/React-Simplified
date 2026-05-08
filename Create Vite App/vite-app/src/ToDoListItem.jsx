export function ToDoListItem({ children, isComplete }) {
  return (
    <div>
      <input type="checkbox" checked={isComplete} />
      <label htmlFor="name">{children}</label>
    </div>
  );
}
