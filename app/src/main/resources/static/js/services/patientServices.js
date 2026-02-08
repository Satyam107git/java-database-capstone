/* patientServices.js
   Service layer for all Patient-related API calls
*/

import { API_BASE_URL } from "../config/config.js";

/* ---------- Base Patient API Endpoint ---------- */
const PATIENT_API = API_BASE_URL + "/patient";

 
export async function patientSignup(data) {
  try {
    const response = await fetch(PATIENT_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return {
      success: true,
      message: result.message,
    };
  } catch (error) {
    console.error("Error :: patientSignup ::", error);
    return {
      success: false,
      message: error.message || "Patient signup failed",
    };
  }
}

/* ---------- Patient Login ---------- */
/*
   Authenticates patient
   Returns full fetch response so caller can extract token/status
*/
export async function patientLogin(data) {
  console.log("patientLogin ::", data); // remove in production

  return fetch(`${PATIENT_API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

/* ---------- Get Logged-in Patient Data ---------- */
/*
   Fetches patient details using token
   Used during appointment booking
*/
export async function getPatientData(token) {
  try {
    const response = await fetch(`${PATIENT_API}/${token}`);
    const data = await response.json();

    if (response.ok) {
      return data.patient;
    }

    return null;
  } catch (error) {
    console.error("Error fetching patient details:", error);
    return null;
  }
}

/* ---------- Get Patient Appointments ---------- */
/*
   Shared API for Doctor & Patient dashboards
   user = "patient" or "doctor"
*/
export async function getPatientAppointments(id, token, user) {
  try {
    const response = await fetch(`${PATIENT_API}/${id}/${user}/${token}`);
    const data = await response.json();

    if (response.ok) {
      return data.appointments;
    }

    return null;
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return null;
  }
}

/* ---------- Filter Appointments ---------- */
/*
   Filters appointments by condition and patient name
*/
export async function filterAppointments(condition, name, token) {
  try {
    const response = await fetch(
      `${PATIENT_API}/filter/${condition}/${name}/${token}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    console.error("Failed to filter appointments:", response.statusText);
    return { appointments: [] };
  } catch (error) {
    console.error("Error filtering appointments:", error);
    alert("Something went wrong!");
    return { appointments: [] };
  }
}



// // patientServices
// import { API_BASE_URL } from "../config/config.js";
// const PATIENT_API = API_BASE_URL + '/patient'


// //For creating a patient in db
// export async function patientSignup(data) {
//   try {
//     const response = await fetch(`${PATIENT_API}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json"
//         },
//         body: JSON.stringify(data)
//       }
//     );
//     const result = await response.json();
//     if (!response.ok) {
//       throw new Error(result.message);
//     }
//     return { success: response.ok, message: result.message }
//   }
//   catch (error) {
//     console.error("Error :: patientSignup :: ", error)
//     return { success: false, message: error.message }
//   }
// }

// //For logging in patient
// export async function patientLogin(data) {
//   console.log("patientLogin :: ", data)
//   return await fetch(`${PATIENT_API}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   });


// }

// // For getting patient data (name ,id , etc ). Used in booking appointments
// export async function getPatientData(token) {
//   try {
//     const response = await fetch(`${PATIENT_API}/${token}`);
//     const data = await response.json();
//     if (response.ok) return data.patient;
//     return null;
//   } catch (error) {
//     console.error("Error fetching patient details:", error);
//     return null;
//   }
// }

// // the Backend API for fetching the patient record(visible in Doctor Dashboard) and Appointments (visible in Patient Dashboard) are same based on user(patient/doctor).
// export async function getPatientAppointments(id, token, user) {
//   try {
//     const response = await fetch(`${PATIENT_API}/${id}/${user}/${token}`);
//     const data = await response.json();
//     console.log(data.appointments)
//     if (response.ok) {
//       return data.appointments;
//     }
//     return null;
//   }
//   catch (error) {
//     console.error("Error fetching patient details:", error);
//     return null;
//   }
// }

// export async function filterAppointments(condition, name, token) {
//   try {
//     const response = await fetch(`${PATIENT_API}/filter/${condition}/${name}/${token}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       const data = await response.json();
//       return data;

//     } else {
//       console.error("Failed to fetch doctors:", response.statusText);
//       return { appointments: [] };

//     }
//   } catch (error) {
//     console.error("Error:", error);
//     alert("Something went wrong!");
//     return { appointments: [] };
//   }
// }
