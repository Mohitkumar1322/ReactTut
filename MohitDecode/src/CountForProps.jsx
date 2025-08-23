function CountForProps({ count, data }) {
    return (
        <div>
            <h2>Count from Parent: {count}</h2>
            <h2>Data from Parent: {data}</h2>
        </div>
    );
}

export default CountForProps;
