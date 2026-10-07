import users from "@/data/users.json";

// NOTE: Intentionally simplified for demonstration purposes.
// Plaintext passwords and JSON-based user storage are NOT appropriate for
// production authentication. A real application should use secure password
// storage (e.g. salted hashing) and proper authentication/session management.
export async function POST(request) {
  const { email, password } = await request.json();

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return Response.json(
      { success: false, message: "Email or password is incorrect." },
      { status: 401 }
    );
  }

  // Strip the password before sending the profile to the browser.
  const { password: _, ...profile } = user;
  return Response.json({ success: true, user: profile });
}
