# User Stories

## Admin User Stories

### Admin Login
**Title:**  
_As an admin, I want to log into the portal using my username and password, so that I can securely manage the platform._

**Acceptance Criteria:**
- Admin can log in using valid credentials
- Error message is shown for invalid credentials
- Successful login redirects to the admin dashboard

**Priority:** High  
**Story Points:** 3  

---

### Admin Logout
**Title:**  
_As an admin, I want to log out of the portal, so that system access is protected._

**Acceptance Criteria:**
- Admin can log out from any page
- Session is terminated after logout
- User is redirected to the login page

**Priority:** Medium  
**Story Points:** 2  

---

### Add Doctor
**Title:**  
_As an admin, I want to add doctors to the portal, so that they can offer consultations to patients._

**Acceptance Criteria:**
- Admin can add doctor details (name, specialization, contact)
- Added doctor appears in the doctor list
- Mandatory fields are validated

**Priority:** High  
**Story Points:** 5  

---

### Delete Doctor
**Title:**  
_As an admin, I want to delete a doctor’s profile, so that inactive or incorrect profiles are removed._

**Acceptance Criteria:**
- Admin can delete a doctor profile
- Confirmation is required before deletion
- Deleted doctor no longer appears in the portal

**Priority:** Medium  
**Story Points:** 3  

---

### Monthly Appointment Report
**Title:**  
_As an admin, I want to run a MySQL stored procedure to view monthly appointment counts, so that I can track platform usage._

**Acceptance Criteria:**
- Stored procedure runs successfully via MySQL CLI
- Output shows appointment count per month
- Data is accurate and consistent

**Priority:** Low  
**Story Points:** 5  

---

## Patient User Stories

### View Doctors Without Login
**Title:**  
_As a patient, I want to view a list of doctors without logging in, so that I can explore options before registering._

**Acceptance Criteria:**
- Doctor list is visible without authentication
- Only basic doctor details are displayed
- Booking is disabled for unauthenticated users

**Priority:** Medium  
**Story Points:** 3  

---

### Patient Signup
**Title:**  
_As a patient, I want to sign up using my email and password, so that I can book appointments._

**Acceptance Criteria:**
- Patient can register with valid email and password
- Duplicate email registrations are prevented
- Successful signup redirects to login or dashboard

**Priority:** High  
**Story Points:** 5  

---

### Patient Login
**Title:**  
_As a patient, I want to log into the portal, so that I can manage my bookings._

**Acceptance Criteria:**
- Patient can log in using valid credentials
- Invalid credentials show an error message
- Successful login redirects to dashboard

**Priority:** High  
**Story Points:** 3  

---

### Patient Logout
**Title:**  
_As a patient, I want to log out of the portal, so that my account remains secure._

**Acceptance Criteria:**
- Patient can log out at any time
- Session is terminated successfully
- Redirects to login page

**Priority:** Medium  
**Story Points:** 2  

---

### Book Appointment
**Title:**  
_As a patient, I want to log in and book a one-hour appointment with a doctor, so that I can consult with them._

**Acceptance Criteria:**
- Patient can select a doctor and available time slot
- Appointment duration is fixed to one hour
- Booking confirmation is displayed

**Priority:** High  
**Story Points:** 8  

---

### View Upcoming Appointments
**Title:**  
_As a patient, I want to view my upcoming appointments, so that I can prepare accordingly._

**Acceptance Criteria:**
- Upcoming appointments are listed on dashboard
- Appointment details include date, time, and doctor name
- Appointments are sorted by nearest date

**Priority:** Medium  
**Story Points:** 3  

---

## Doctor User Stories

### Doctor Login
**Title:**  
_As a doctor, I want to log into the portal, so that I can manage my appointments._

**Acceptance Criteria:**
- Doctor can log in with valid credentials
- Invalid login attempts show error
- Successful login opens doctor dashboard

**Priority:** High  
**Story Points:** 3  

---

### Doctor Logout
**Title:**  
_As a doctor, I want to log out of the portal, so that my data remains protected._

**Acceptance Criteria:**
- Doctor can log out successfully
- Session is terminated
- Redirects to login page

**Priority:** Medium  
**Story Points:** 2  

---

### View Appointment Calendar
**Title:**  
_As a doctor, I want to view my appointment calendar, so that I can stay organized._

**Acceptance Criteria:**
- Calendar shows upcoming appointments
- Appointments display date and time
- Calendar updates dynamically

**Priority:** High  
**Story Points:** 5  

---

### Mark Unavailability
**Title:**  
_As a doctor, I want to mark my unavailability, so that patients see only available slots._

**Acceptance Criteria:**
- Doctor can mark unavailable dates and times
- Unavailable slots cannot be booked
- Availability updates immediately

**Priority:** High  
**Story Points:** 5  

---

### Update Doctor Profile
**Title:**  
_As a doctor, I want to update my profile details, so that patients have up-to-date information._

**Acceptance Criteria:**
- Doctor can update specialization and contact details
- Changes are visible to patients
- Required fields are validated

**Priority:** Medium  
**Story Points:** 3  

---

### View Patient Details
**Title:**  
_As a doctor, I want to view patient details for upcoming appointments, so that I can be prepared._

**Acceptance Criteria:**
- Doctor can view patient details for upcoming appointments
- Only scheduled appointments are shown
- Patient data is secure and read-only

**Priority:** High  
**Story Points:** 5  
