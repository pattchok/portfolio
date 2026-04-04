export default function Tag({ children }: { children: string }) {
  return (
    <span className="text-xs text-muted border border-border rounded-full px-2.5 py-0.5">
      {children}
    </span>
  );
}
