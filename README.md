# Fronye

## MongoDB Backend

This project now includes a Node/Express backend with MongoDB storage for bookings and contact messages.

### Setup

1. Copy `.env.example` to `.env`.
2. Update `MONGODB_URI` with your MongoDB connection string.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open `http://localhost:3000` to view the site and use the booking/contact forms.

### API Endpoints

- `POST /api/bookings` — save a booking record
- `GET /api/bookings` — fetch all bookings
- `POST /api/contacts` — save a contact message
- `GET /api/contacts` — fetch all contact messages
