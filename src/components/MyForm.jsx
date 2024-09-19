import { z } from "zod";

// Schéma de validation avec Zod
const schema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  dateOfBirth: z.string().min(1, { message: "Date of Birth is required" }),
  startDate: z.string().min(1, { message: "Start Date is required" }),
  street: z.string().min(1, { message: "Street is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  zipCode: z.string().min(5, { message: "Zip Code must be at least 5 digits" }),
  department: z.string().min(1, { message: "Department is required" }),
});

function MyForm() {

    return (
        <div className='container'>
            <a href="/users">View Current Employees</a>
            <h2>Create Employee</h2>
            <form>
                <label>First Name</label>
                <input />

                <label>Last Name</label>
                <input />

                <label>Date of Birth</label>
                <input />

                <label>Start Date</label>
                <input />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label>Street</label>
                    <input />

                    <label>City</label>
                    <input />

                    <label>State</label>
                    <select name="state" id="state"></select>

                    <label>Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>

                <label>Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </form>
            <button >Save</button>
        </div >
    );
}

export default MyForm;
