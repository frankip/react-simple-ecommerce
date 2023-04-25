import { useState } from "react";
import { v4 as uuid } from "uuid";

function NewEntryForm({ handleUpdateItemList }) {

    // Define state variables for each input value
    const [formData, setFormData] = useState({

        date: '',
        description: '',
        category: '',
        amount: ''
    });
    const [formError, setFormError ] = useState(null)

    // Define a function to handle form submission
    function handleSubmit(event) {
        event.preventDefault();

        const error = validateInputs(formData);

        if (error) {
          setFormError(error);
          return;
        }

        // Create a new item object with the form data and a unique id generated using the `uuid` library
        const newItem = {
            id: uuid().slice(0, 3), // the `uuid` library can be used to generate a unique id
            date: formData.date,
            category: formData.category,
            description: formData.description,
            amount: formData.amount,
        };

        // Here you could send the form data to a server, update a database, etc.

        // Call the `handleUpdateItemList` function passed down from the parent component, passing in the new item object
        if(!formError){
            handleUpdateItemList(newItem)

        }
    }

    // Define an array of category options
    const categoryOptions = ["Food", "Transportation", "Entertainment", "Housing", "Utilities"];


    function handleOnChange(event) {
        // Extract the name and value of the changed input
        const name = event.target.name
        const value = event.target.value

        // Update the form data state with the new input value
        setFormData({
            ...formData, [name]: value
        });
    }

    function validateInputs(formData) {
        const { date, description, category, amount } = formData;
      
        if (!date || !description || !category || !amount) {
          return "All fields are required";
        }
      
        if (isNaN(amount) || amount <= 0) {
          return "Amount must be a positive number";
        }
      
        return null;
      }
      

    return (
        <form onSubmit={handleSubmit}>
             {formError && <p className="header">{formError}</p>}
            <label>Date:</label>
            <input type="date" name="date" value={formData.date} onChange={handleOnChange} />
            <br />

            <label>Description:</label>
            <input type="text" name="description" value={formData.description} onChange={handleOnChange} />
            <br />

            <label>Category:</label>
            <select value={formData.category} name="category" onChange={handleOnChange} >
                <option value="">Select a category</option>
                {categoryOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <br />

            <label>Amount:</label>
            <input type="number" name="amount" value={formData.amount} onChange={handleOnChange} />
            <br />

            <button type="submit">Submit</button>
        </form>
    );
}

export default NewEntryForm;
