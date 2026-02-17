// render.js

function selectRole(role) {
  setRole(role);
  const token = localStorage.getItem('token');
  if (role === "ADMIN") {
    if (token) {
      window.location.href = `/adminDashboard/${token}`;
    }
  } else if (role === "PATIENT") {
    window.location.href = "/pages/patientDashboard.html";
  } else if (role === "DOCTOR") {
    if (token) {
      window.location.href = `/doctorDashboard/${token}`;
    } else if (role === "loggedPatient") {
      window.location.href = "loggedPatientDashboard.html";
    }
  }
}


function renderContent() {
  const role = getRole();
  if (!role) {
    window.location.href = "/"; // if no role, send to role selection page
    return;
  }
}
