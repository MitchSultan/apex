export function KerbDivider() {
  return (
    <div
      aria-hidden="true"
      className="h-1 w-full bg-[length:18px_100%] bg-repeat-x"
      style={{
        backgroundImage:
          "linear-gradient(135deg, var(--signal) 0 50%, transparent 50% 100%), linear-gradient(225deg, var(--chalk) 0 50%, transparent 50% 100%)",
      }}
    />
  );
}
