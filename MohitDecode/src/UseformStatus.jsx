//use form jab hum form bhrte and submit button dbate hain to hume form ki value chahiye hoti hai 
//isliye hum useFormStatus ka istemal karte hain jo form ki value ko track karta hai

import { useFormStatus } from "react-dom";

function MyForm() {
    const { pending, formData } = useFormStatus();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit" disabled={pending}>
                {pending ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
}

export default MyForm;