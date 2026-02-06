# Schema Design – Smart Clinic Management System

This document describes the database schema design for the Smart Clinic Management System using:
- **MySQL** for structured, relational data
- **MongoDB** for flexible, document-based data

The design focuses on real-world clinic operations such as patient registration, appointment scheduling, and prescription management.

---

## MySQL Database Design

MySQL is used for **core operational data** that requires strong consistency, relationships, and constraints.

---

### Table: admin
Stores administrator credentials for managing the platform.

- id: INT, Primary Key, Auto Increment
- username: VARCHAR(50), Not Null, Unique
- password: VARCHAR(255), Not Null
- email: VARCHAR(100), Unique
- created_at: TIMESTAMP, Default CURRENT_TIMESTAMP

---

### Table: patients
Stores registered patient information.

- id: INT, Primary Key, Auto Increment
- name: VARCHAR(100), Not Null
- email: VARCHAR(100), Unique, Not Null
- phone: VARCHAR(15), Unique
- date_of_birth: DATE
- created_at: TIMESTAMP, Default CURRENT_TIMESTAMP

**Notes:**
- Email uniqueness prevents duplicate registrations
- Validation of email/phone format handled at application level

---

### Table: doctors
Stores doctor profile and specialization details.

- id: INT, Primary Key, Auto Increment
- name: VARCHAR(100), Not Null
- specialization: VARCHAR(100), Not Null
- email: VARCHAR(100), Unique, Not Null
- phone: VARCHAR(15)
- is_active: BOOLEAN, Default TRUE

---

### Table: appointments
Tracks all patient-doctor appointments.

- id: INT, Primary Key, Auto Increment
- doctor_id: INT, Foreign Key → doctors(id)
- patient_id: INT, Foreign Key → patients(id)
- appointment_time: DATETIME, Not Null
- status: INT, Not Null  
  - 0 = Scheduled  
  - 1 = Completed  
  - 2 = Cancelled
- created_at: TIMESTAMP, Default CURRENT_TIMESTAMP

**Constraints & Design Decisions:**
- A doctor should not have overlapping appointments (validated in service layer)
- Appointment history is retained even if a patient is deleted (soft delete preferred)

---

### Table: doctor_availability
Defines available time slots for doctors.

- id: INT, Primary Key, Auto Increment
- doctor_id: INT, Foreign Key → doctors(id)
- available_date: DATE, Not Null
- start_time: TIME, Not Null
- end_time: TIME, Not Null

**Notes:**
- Prevents appointment booking outside working hours
- Supports partial-day availability

---

### Table: payments (Optional Extension)
Tracks payment history for appointments.

- id: INT, Primary Key, Auto Increment
- appointment_id: INT, Foreign Key → appointments(id)
- amount: DECIMAL(10,2), Not Null
- payment_status: VARCHAR(20)
- payment_date: TIMESTAMP

---

## MongoDB Collection Design

MongoDB is used for **flexible, evolving, or unstructured data** such as prescriptions, notes, logs, or chat messages.

---

### Collection: prescriptions

Prescriptions are linked to appointments but stored in MongoDB to allow flexible fields, metadata, and future extensions.

```json
{
  "_id": "ObjectId('64abc123456')",
  "appointmentId": 51,
  "patientId": 12,
  "doctorId": 7,
  "medications": [
    {
      "name": "Paracetamol",
      "dosage": "500mg",
      "frequency": "Twice a day",
      "duration": "5 days"
    },
    {
      "name": "Cough Syrup",
      "dosage": "10ml",
      "frequency": "Once at night",
      "duration": "7 days"
    }
  ],
  "doctorNotes": "Drink plenty of fluids and take rest.",
  "tags": ["fever", "cold"],
  "createdAt": "2026-02-06T10:30:00Z"
}
