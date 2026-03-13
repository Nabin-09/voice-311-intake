## 311 Voice Intake Webhook

This project is a backend service designed to automate city service ticket creation through a Voice AI platform. It receives structured conversational data via webhooks, processes the intake, and stores ticket records in a MongoDB database. It is architected for high-performance query analysis and scalability testing.

### System Architecture

The service operates as a middleware between a Voice AI orchestrator (such as Vapi or Twilio) and a database layer. It utilizes a modular controller-service pattern to ensure separation of concerns and maintainability.

* **Voice AI Platform:** Handles speech-to-text and intent extraction.
* **Backend:** Node.js Express server running in ES Module format.
* **Database:** MongoDB 8.0.13 for persistence.
* **Tunneling:** Ngrok for exposing local development endpoints to the public internet.

### Project Structure

```text
311-voice-intake/
├── src/
│   ├── config/
│   │   └── db.js         # Database connection configuration
│   ├── controllers/
│   │   └── ticket.controller.js  # Request and response orchestration
│   ├── middleware/
│   │   ├── auth.middleware.js    # API key verification
│   │   └── validate.middleware.js # Schema validation logic
│   ├── models/
│   │   └── Ticket.js      # Mongoose schema definitions
│   ├── routes/
│   │   └── ticket.routes.js # API endpoint definitions
│   ├── services/
│   │   └── ticket.service.js # Business logic and ID generation
│   └── app.js            # Express application configuration
├── .env                  # Environment variables
├── server.js             # Entry point
└── package.json          # Dependencies and scripts

```

### Technical Stack

* **Runtime:** Node.js v18+
* **Framework:** Express.js
* **Database:** MongoDB 8.0.13
* **Communication:** REST API (JSON)
* **Authentication:** Header-based API Key validation

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 311-voice-intake

```


2. Install dependencies:
```bash
npm install

```


3. Configure environment variables:
Create a `.env` file in the root directory with the following variables:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/voice_311
WEBHOOK_SECRET=your_secure_api_key

```



### Running the Application

1. Start the server:
```bash
npm start

```


2. Expose the local server for webhook access (requires ngrok):
```bash
ngrok http 3000

```



### API Endpoints

#### POST /api/create-ticket

Processes voice intake data and creates a new ticket.

**Required Headers:**

* `x-api-key`: Must match the `WEBHOOK_SECRET` in the environment configuration.

**Request Body Schema:**

```json
{
  "issueType": "string",
  "location": "string",
  "callerName": "string",
  "description": "string (optional)"
}

```

**Successful Response (201 Created):**

```json
{
  "results": [
    {
      "toolCallId": "string",
      "result": "Success message with Ticket ID"
    }
  ],
  "ticketId": "TKT-XXXX"
}

```

