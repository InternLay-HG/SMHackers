# Medical Record System

## Features
- Patient record management
- Appointment scheduling
- Medical history tracking
- Prescription management
- Lab results integration
- Medical knowledge base and assistance
- Secure messaging between healthcare providers
- Reporting and analytics

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
### -Frontend
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