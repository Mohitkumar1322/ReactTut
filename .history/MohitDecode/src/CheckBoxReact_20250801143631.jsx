import , { useState } from 'react';

function CheckBoxReact() {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            <label>{checked ? 'Checked' : 'Unchecked'}</label>
        </div>
    );
}


export default CheckBoxReact;