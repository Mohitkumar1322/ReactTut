function useTransition() {
  const [isPending, startTransition] = useTransition();

   return (
    <div>
      {isPending ? "Loading..." : "Loaded"}
    </div>
   )
}

export default useTransition;
