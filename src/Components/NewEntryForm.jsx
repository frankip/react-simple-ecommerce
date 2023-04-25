import { useState } from "react";

function NewEntryForm() {

    // Define state variables for each input value
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");

    // Define a function to handle form submission
    function handleSubmit(event) {
        event.preventDefault();
        // Here you could send the form data to a server, update a database, etc.
        console.log({ date, description, category, amount });
    }

    // Define an array of category options
    const categoryOptions = ["Food", "Transportation", "Entertainment", "Housing", "Utilities"];

    return (
        <form onSubmit={handleSubmit}>
            <label>Date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <br />

            <label>Description:</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <br />

            <label>Category:</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select a category</option>
                {categoryOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <br />

            <label>Amount:</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <br />

            <button type="submit">Submit</button>
        </form>
    );
}

export default NewEntryForm;
