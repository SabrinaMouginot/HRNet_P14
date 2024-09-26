import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeesSlice";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { toggleModal } from '../redux/modalSlice';

// Schéma de validation personnalisé (sans Zod)
const validateZipCode = (value) => value.length === 5 || "Zip Code must be 5 digits";
const validateRequired = (value) => value.trim() !== "" || "This field is required";

function MyForm() {
    const dispatch = useDispatch();

    // Liste des départements
    const departments = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"];

    // Liste des états avec noms et abréviations
    const states = [
        { "name": "Alabama", "abbreviation": "AL" },
        { "name": "Alaska", "abbreviation": "AK" },
        { "name": "American Samoa", "abbreviation": "AS" },
        { "name": "Arizona", "abbreviation": "AZ" },
        { "name": "Arkansas", "abbreviation": "AR" },
        { "name": "California", "abbreviation": "CA" },
        { "name": "Colorado", "abbreviation": "CO" },
        { "name": "Connecticut", "abbreviation": "CT" },
        { "name": "Delaware", "abbreviation": "DE" },
        { "name": "District Of Columbia", "abbreviation": "DC" },
        { "name": "Federated States Of Micronesia", "abbreviation": "FM" },
        { "name": "Florida", "abbreviation": "FL" },
        { "name": "Georgia", "abbreviation": "GA" },
        { "name": "Guam", "abbreviation": "GU" },
        { "name": "Hawaii", "abbreviation": "HI" },
        { "name": "Idaho", "abbreviation": "ID" },
        { "name": "Illinois", "abbreviation": "IL" },
        { "name": "Indiana", "abbreviation": "IN" },
        { "name": "Iowa", "abbreviation": "IA" },
        { "name": "Kansas", "abbreviation": "KS" },
        { "name": "Kentucky", "abbreviation": "KY" },
        { "name": "Louisiana", "abbreviation": "LA" },
        { "name": "Maine", "abbreviation": "ME" },
        { "name": "Marshall Islands", "abbreviation": "MH" },
        { "name": "Maryland", "abbreviation": "MD" },
        { "name": "Massachusetts", "abbreviation": "MA" },
        { "name": "Michigan", "abbreviation": "MI" },
        { "name": "Minnesota", "abbreviation": "MN" },
        { "name": "Mississippi", "abbreviation": "MS" },
        { "name": "Missouri", "abbreviation": "MO" },
        { "name": "Montana", "abbreviation": "MT" },
        { "name": "Nebraska", "abbreviation": "NE" },
        { "name": "Nevada", "abbreviation": "NV" },
        { "name": "New Hampshire", "abbreviation": "NH" },
        { "name": "New Jersey", "abbreviation": "NJ" },
        { "name": "New Mexico", "abbreviation": "NM" },
        { "name": "New York", "abbreviation": "NY" },
        { "name": "North Carolina", "abbreviation": "NC" },
        { "name": "North Dakota", "abbreviation": "ND" },
        { "name": "Northern Mariana Islands", "abbreviation": "MP" },
        { "name": "Ohio", "abbreviation": "OH" },
        { "name": "Oklahoma", "abbreviation": "OK" },
        { "name": "Oregon", "abbreviation": "OR" },
        { "name": "Palau", "abbreviation": "PW" },
        { "name": "Pennsylvania", "abbreviation": "PA" },
        { "name": "Puerto Rico", "abbreviation": "PR" },
        { "name": "Rhode Island", "abbreviation": "RI" },
        { "name": "South Carolina", "abbreviation": "SC" },
        { "name": "South Dakota", "abbreviation": "SD" },
        { "name": "Tennessee", "abbreviation": "TN" },
        { "name": "Texas", "abbreviation": "TX" },
        { "name": "Utah", "abbreviation": "UT" },
        { "name": "Vermont", "abbreviation": "VT" },
        { "name": "Virgin Islands", "abbreviation": "VI" },
        { "name": "Virginia", "abbreviation": "VA" },
        { "name": "Washington", "abbreviation": "WA" },
        { "name": "West Virginia", "abbreviation": "WV" },
        { "name": "Wisconsin", "abbreviation": "WI" },
        { "name": "Wyoming", "abbreviation": "WY" }
    ];

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(addEmployee(data));
        dispatch(toggleModal());
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Prénom */}
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                {...register("firstName", { validate: validateRequired })}
            />
            {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}

            {/* Nom de famille */}
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                {...register("lastName", { validate: validateRequired })}
            />
            {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}

            {/* Date de naissance */}
            <InputLabel id="dateOfBirthLabel">Date of Birth</InputLabel>
            <DatePicker
                labelId="dateOfBirthLabel"
                id="dateOfBirth"
                renderInput={(params) => <input {...params} {...register("dateOfBirth", { validate: validateRequired })} />}
            />
            {errors.dateOfBirth && <p className="error-message">{errors.dateOfBirth.message}</p>}

            {/* Date de début */}
            <InputLabel id="startDateLabel">Start Date</InputLabel>
            <DatePicker
                labelId="startDateLabel"
                id="startDate"
                renderInput={(params) => <input {...params} {...register("startDate", { validate: validateRequired })} />}
            />
            {errors.startDate && <p className="error-message">{errors.startDate.message}</p>}

            {/* Adresse */}
            <label htmlFor="street">Street</label>
            <input
                id="street"
                {...register("street", { validate: validateRequired })}
            />
            {errors.street && <p className="error-message">{errors.street.message}</p>}

            {/* Ville */}
            <label htmlFor="city">City</label>
            <input
                id="city"
                {...register("city", { validate: validateRequired })}
            />
            {errors.city && <p className="error-message">{errors.city.message}</p>}

            {/* État */}
            <InputLabel id="state-select">State</InputLabel>
            <Select
                labelId="state-select"
                id="state"
                {...register("state", { validate: validateRequired })}
            >
                {states.map((state) => (
                    <MenuItem key={state.abbreviation} value={state.abbreviation}>
                        {state.name}
                    </MenuItem>
                ))}
            </Select>
            {errors.state && <p className="error-message">{errors.state.message}</p>}

            {/* Code postal */}
            <label htmlFor="zipCode">Zip Code</label>
            <input
                id="zipCode"
                {...register("zipCode", { validate: validateZipCode })}
            />
            {errors.zipCode && <p className="error-message">{errors.zipCode.message}</p>}

            {/* Département */}
            <InputLabel id="department-select">Department</InputLabel>
            <Select
                labelId="department-select"
                id="department"
                {...register("department", { validate: validateRequired })}
            >
                {departments.map((department) => (
                    <MenuItem key={department} value={department}>
                        {department}
                    </MenuItem>
                ))}
            </Select>
            {errors.department && <p className="error-message">{errors.department.message}</p>}

            {/* Soumission du formulaire */}
            <div className="button">
                <button type="submit">Create Employee</button>
            </div>
        </form>
    );
}

export default MyForm;
