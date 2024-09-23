import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeesSlice';

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
    const dispatch = useDispatch(); // Pour dispatcher une action Redux

    const {
        register, // Pour lier les champs du formulaire à la React Hook Form
        handleSubmit, // Pour déclencher la validation et l'envoi du formulaire
        formState: { errors }, // Objet qui contient toutes les erreurs de validation, renvoyées par le schéma Zod si les champs ne respectent pas les contraintes
    } = useForm({  // pour gérer les formulaires
        resolver: zodResolver(schema), // Pour valider automatiquement les données soumises dans le formulaire
    });

    const departments = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"];
    const states = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida", "Georgia"
    ];

    // const states = [
    //     {
    //         "name": "Alabama",
    //         "abbreviation": "AL"
    //     },
    //     {
    //         "name": "Alaska",
    //         "abbreviation": "AK"
    //     },
    //     {
    //         "name": "American Samoa",
    //         "abbreviation": "AS"
    //     },
    //     {
    //         "name": "Arizona",
    //         "abbreviation": "AZ"
    //     },
    //     {
    //         "name": "Arkansas",
    //         "abbreviation": "AR"
    //     },
    //     {
    //         "name": "California",
    //         "abbreviation": "CA"
    //     },
    //     {
    //         "name": "Colorado",
    //         "abbreviation": "CO"
    //     },
    //     {
    //         "name": "Connecticut",
    //         "abbreviation": "CT"
    //     },
    //     {
    //         "name": "Delaware",
    //         "abbreviation": "DE"
    //     },
    //     {
    //         "name": "District Of Columbia",
    //         "abbreviation": "DC"
    //     },
    //     {
    //         "name": "Federated States Of Micronesia",
    //         "abbreviation": "FM"
    //     },
    //     {
    //         "name": "Florida",
    //         "abbreviation": "FL"
    //     },
    //     {
    //         "name": "Georgia",
    //         "abbreviation": "GA"
    //     },
    //     {
    //         "name": "Guam",
    //         "abbreviation": "GU"
    //     },
    //     {
    //         "name": "Hawaii",
    //         "abbreviation": "HI"
    //     },
    //     {
    //         "name": "Idaho",
    //         "abbreviation": "ID"
    //     },
    //     {
    //         "name": "Illinois",
    //         "abbreviation": "IL"
    //     },
    //     {
    //         "name": "Indiana",
    //         "abbreviation": "IN"
    //     },
    //     {
    //         "name": "Iowa",
    //         "abbreviation": "IA"
    //     },
    //     {
    //         "name": "Kansas",
    //         "abbreviation": "KS"
    //     },
    //     {
    //         "name": "Kentucky",
    //         "abbreviation": "KY"
    //     },
    //     {
    //         "name": "Louisiana",
    //         "abbreviation": "LA"
    //     },
    //     {
    //         "name": "Maine",
    //         "abbreviation": "ME"
    //     },
    //     {
    //         "name": "Marshall Islands",
    //         "abbreviation": "MH"
    //     },
    //     {
    //         "name": "Maryland",
    //         "abbreviation": "MD"
    //     },
    //     {
    //         "name": "Massachusetts",
    //         "abbreviation": "MA"
    //     },
    //     {
    //         "name": "Michigan",
    //         "abbreviation": "MI"
    //     },
    //     {
    //         "name": "Minnesota",
    //         "abbreviation": "MN"
    //     },
    //     {
    //         "name": "Mississippi",
    //         "abbreviation": "MS"
    //     },
    //     {
    //         "name": "Missouri",
    //         "abbreviation": "MO"
    //     },
    //     {
    //         "name": "Montana",
    //         "abbreviation": "MT"
    //     },
    //     {
    //         "name": "Nebraska",
    //         "abbreviation": "NE"
    //     },
    //     {
    //         "name": "Nevada",
    //         "abbreviation": "NV"
    //     },
    //     {
    //         "name": "New Hampshire",
    //         "abbreviation": "NH"
    //     },
    //     {
    //         "name": "New Jersey",
    //         "abbreviation": "NJ"
    //     },
    //     {
    //         "name": "New Mexico",
    //         "abbreviation": "NM"
    //     },
    //     {
    //         "name": "New York",
    //         "abbreviation": "NY"
    //     },
    //     {
    //         "name": "North Carolina",
    //         "abbreviation": "NC"
    //     },
    //     {
    //         "name": "North Dakota",
    //         "abbreviation": "ND"
    //     },
    //     {
    //         "name": "Northern Mariana Islands",
    //         "abbreviation": "MP"
    //     },
    //     {
    //         "name": "Ohio",
    //         "abbreviation": "OH"
    //     },
    //     {
    //         "name": "Oklahoma",
    //         "abbreviation": "OK"
    //     },
    //     {
    //         "name": "Oregon",
    //         "abbreviation": "OR"
    //     },
    //     {
    //         "name": "Palau",
    //         "abbreviation": "PW"
    //     },
    //     {
    //         "name": "Pennsylvania",
    //         "abbreviation": "PA"
    //     },
    //     {
    //         "name": "Puerto Rico",
    //         "abbreviation": "PR"
    //     },
    //     {
    //         "name": "Rhode Island",
    //         "abbreviation": "RI"
    //     },
    //     {
    //         "name": "South Carolina",
    //         "abbreviation": "SC"
    //     },
    //     {
    //         "name": "South Dakota",
    //         "abbreviation": "SD"
    //     },
    //     {
    //         "name": "Tennessee",
    //         "abbreviation": "TN"
    //     },
    //     {
    //         "name": "Texas",
    //         "abbreviation": "TX"
    //     },
    //     {
    //         "name": "Utah",
    //         "abbreviation": "UT"
    //     },
    //     {
    //         "name": "Vermont",
    //         "abbreviation": "VT"
    //     },
    //     {
    //         "name": "Virgin Islands",
    //         "abbreviation": "VI"
    //     },
    //     {
    //         "name": "Virginia",
    //         "abbreviation": "VA"
    //     },
    //     {
    //         "name": "Washington",
    //         "abbreviation": "WA"
    //     },
    //     {
    //         "name": "West Virginia",
    //         "abbreviation": "WV"
    //     },
    //     {
    //         "name": "Wisconsin",
    //         "abbreviation": "WI"
    //     },
    //     {
    //         "name": "Wyoming",
    //         "abbreviation": "WY"
    //     }
    // ];

    const onSubmit = (data) => {
        dispatch(addEmployee(data)); // Envoie des données dans Redux
        window.location.href = "/users"; // Redirection vers la liste d'employés
    };

    return (
        <div className='container'>
            <a href="/users">View Current Employees</a>
            <h2>Create Employee</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input {...register("firstName")} />
                {errors.firstName && <span>{errors.firstName.message}</span>}

                <label>Last Name</label>
                <input {...register("lastName")} />
                {errors.lastName && <span>{errors.lastName.message}</span>}

                <label>Date of Birth</label>
                <input type="date" {...register("dateOfBirth")} />
                {errors.dateOfBirth && <span>{errors.dateOfBirth.message}</span>}

                <label>Start Date</label>
                <input type="date" {...register("startDate")} />
                {errors.startDate && <span>{errors.startDate.message}</span>}

                <fieldset className="address">
                    <legend>Address</legend>

                    <label>Street</label>
                    <input {...register("street")} />
                    {errors.street && <span>{errors.street.message}</span>}

                    <label>City</label>
                    <input {...register("city")} />
                    {errors.city && <span>{errors.city.message}</span>}

                    <label>State</label>
                    <select {...register("state")} id="state">
                        {states.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                    {errors.state && <span>{errors.state.message}</span>}

                    <label>Zip Code</label>
                    <input type="number" {...register("zipCode")} />
                    {errors.zipCode && <span>{errors.zipCode.message}</span>}
                </fieldset>

                <label>Department</label>
                <select {...register("department")} id="department">
                    {departments.map((department, index) => (
                        <option key={index} value={department}>{department}</option>
                    ))}
                </select>
                {errors.department && <span>{errors.department.message}</span>}

                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default MyForm;
