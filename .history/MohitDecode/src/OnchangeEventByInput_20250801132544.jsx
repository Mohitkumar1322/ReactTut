function OnchangeEventByInput() {
    return(
        <div>
            <h2>OnChange Event by Input </h2>
            <input type="text" onChange={(e) => console.log(e.target.value)} />
        </div>
    )
}


export default OnchangeEventByInput;