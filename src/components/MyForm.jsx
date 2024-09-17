function MyForm() {

    return (
        <div >
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
