import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeesSlice";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { toggleModal } from '../redux/modalSlice';


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
        register, // Fonction pour enregistrer les champs du formulaire et les lier à la gestion des valeurs et de la validation
        handleSubmit, // Fonction pour gérer la soumission du formulaire et la validation. Appelle une fonction en cas de succès ou d'échec.
        formState: { errors }, // Objet contenant l'état actuel du formulaire, on extrait 'errors' qui contient les erreurs de validation.
    } = useForm({
        resolver: zodResolver(schema), // Utilise zodResolver pour lier le schéma Zod au formulaire. Le schéma définit les règles de validation pour chaque champ.
    });

    const onSubmit = (data) => {
        dispatch(addEmployee(data)); // Envoie les données du formulaire à l'action 'addEmployee' via Redux pour ajouter un nouvel employé
        dispatch(toggleModal());
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Prénom */}
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" {...register("firstName")} />
            {errors.firstName && <p>{errors.firstName.message}</p>}

            {/* Nom de famille */}
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" {...register("lastName")} />
            {errors.lastName && <p>{errors.lastName.message}</p>}

            {/* Date de naissance */}
            <InputLabel id="dateOfBirthLabel">Date of Birth</InputLabel>
            <DatePicker labelId="dateOfBirthLabel" id="dateOfBirth" {...register("dateOfBirth")} />
            {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}

            {/* Date de début */}
            <InputLabel id="startDateLabel">Start Date</InputLabel>
            <DatePicker labelId="startDateLabel" id="startDate" {...register("startDate")} />
            {errors.startDate && <p>{errors.startDate.message}</p>}

            {/* Adresse */}
            <label htmlFor="street">Street</label>
            <input id="street" {...register("street")} />
            {errors.street && <p>{errors.street.message}</p>}

            {/* Ville */}
            <label htmlFor="city">City</label>
            <input id="city" {...register("city")} />
            {errors.city && <p>{errors.city.message}</p>}

            {/* État */}
            <InputLabel id="state-select">State</InputLabel>
            <Select
                labelId="state-select"
                id="state" {...register("state")}
            >
                {states.map((state) => (
                    <MenuItem key={state.abbreviation} value={state.abbreviation}>
                        {state.name}
                    </MenuItem>
                ))}
            </Select>

            {errors.state && <p>{errors.state.message}</p>}

            {/* Code postal */}
            <label htmlFor="zipCode">Zip Code</label>
            <input id="zipCode" {...register("zipCode")} />
            {errors.zipCode && <p>{errors.zipCode.message}</p>}

            {/* Département */}
            <InputLabel id="department-select">Department</InputLabel>
            <Select
                labelId="department-select"
                id="department" {...register("department")}
            >
                {departments.map((department) => (
                    <MenuItem key={department} value={department}>
                        {department}
                    </MenuItem>
                ))}
            </Select>

            {errors.department && <p>{errors.department.message}</p>}

            {/* Soumission du formulaire */}
            <button type="submit">Créer Employé</button>
        </form>
    );
}

export default MyForm;
