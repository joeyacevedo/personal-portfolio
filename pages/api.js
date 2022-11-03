// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
  // ...
}

//Potential route to hit for handling form inputs that need to be saved to a database
export function handler(req, res) {
  const email = req.body.email;
  // Then save email to your database, etc...
}
