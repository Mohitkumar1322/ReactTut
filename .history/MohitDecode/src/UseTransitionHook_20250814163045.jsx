function useTransition(callback, deps) {
  const [isPending, startTransition] = useTransition();

   return (
    <div>
      {isPending ? "Loading..." : "Loaded"}
    </div>
   )
}

export default useTransition;
