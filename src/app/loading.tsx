export default function loading() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-row gap-2">
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-700" />
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-700 [animation-delay:-.3s]" />
        <div className="h-4 w-4 animate-bounce rounded-full bg-blue-700 [animation-delay:-.5s]" />
      </div>
    </div>
  );
}
