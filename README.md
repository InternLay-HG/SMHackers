# Medical Record System

## Team Name: SMHackers
### Members:
- Harshal Gupta
- Shresth Pratyush
- Manas Mahto
- Kaushik Gupta

## Features
- Patient record management
- Appointment scheduling
- Medical history tracking
- Prescription management
- Lab results integration
- Medical knowledge base and assistance
- Secure messaging between healthcare providers
- Reporting and analytics


##### Patient Record Management
- The system shall allow creation and modification of patient records
- Each patient record shall include demographics, medical history, allergies, and current medications
- The system shall support attaching and viewing medical images (X-rays, MRIs, etc.)
- Users shall be able to search for patient records using various criteria (name, ID, date of birth)

##### Appointment Scheduling
- The system shall allow scheduling, rescheduling, and cancellation of appointments
- The system shall prevent double-booking of healthcare providers
- The system shall send appointment reminders to patients via email or SMS

##### Medical History Tracking
- The system shall maintain a comprehensive medical history for each patient
- Users shall be able to view and update medical histories
- The system shall allow for easy identification of chronic conditions and ongoing treatments

##### Prescription Management
- Physicians shall be able to create and manage prescriptions within the system
- The system shall check for potential drug interactions when new prescriptions are added
- The system shall support e-prescribing to pharmacies

##### Lab Results Integration
- The system shall integrate with laboratory information systems to import test results
- Users shall be able to view and interpret lab results within the patient's record
- The system shall flag abnormal results for physician review

##### Medical Knowledge Base and Assistance
- The system shall provide a searchable database of medical information and treatment guidelines
- The system shall offer decision support tools for diagnosis and treatment planning
- Users shall be able to access relevant medical literature and research within the system

##### Secure Messaging
- Healthcare providers shall be able to securely communicate with each other within the system
- The system shall support attaching patient records or test results to messages
- Users shall receive notifications for new messages or urgent communications

##### Reporting and Analytics
- The system shall generate customizable reports on patient populations, treatments, and outcomes
- Users shall be able to visualize trends and patterns in health data
- The system shall support exporting of anonymized data for research purposes

## Registration & Login
- User will be able to register via their emails or Google account using JWT Authentication and OAuth for google Authentication
- OTP will be sent to email account, Mobile No. for verification

- User will be able to login using their google accounts or emails used at the time of registration using axios query to the database(Mongo DB)
### User Classes and Characteristics (MongoDB Database)
- Physicians: Primary users who input and access patient data
- Nurses: Assist in patient care and record management
- Administrative Staff: Manage appointments and basic patient information
- Patients: Limited access to their own medical records and appointments
- IT Administrators: Manage system configuration and security


## Tech Stack
### Frontend
- React
- Tailwind CSS
- Redux(React Library)
- Axios
- Figma

### Backend
- Node
- MongoDB
- Flask
- Express
- Firebase
- Docker

## Here's the figma design for our website   [Click here](https://www.figma.com/design/tIpj8R0GSiz43zEHWRH17F/Medic?node-id=0-1&t=buuKm4BnJ3w8z1cZ-1 )
(Credits- Manas Mahto)
