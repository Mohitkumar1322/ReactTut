function useTransition(callback, deps) {
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      callback();
    });
  }, deps);

  return isPending;
}