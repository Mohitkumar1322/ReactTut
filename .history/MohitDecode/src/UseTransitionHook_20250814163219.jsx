function useTransition() {
 

   return (
    <div>
      {isPending ? "Loading..." : "Loaded"}
    </div>
   )
}

export default useTransition;
