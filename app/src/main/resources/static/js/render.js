function selectRole(role) {
    setRole(role);
  
    const token = localStorage.getItem('token');
  
    if (role === "ADMIN") {
      if (token) {
        window.location.href = `/adminDashboard/${token}`;
      } else {
        alert("Please login first");
      }
  
    } else if (role === "PATIENT") {
      window.location.href = "/pages/patientDashboard.html";
  
    } else if (role === "DOCTOR") {
      if (token) {
        window.location.href = `/doctorDashboard/${token}`;
      } else {
        alert("Please login first");
      }
  
    } else if (role === "loggedPatient") {
      window.location.href = "/pages/loggedPatientDashboard.html";
    }
  }
  