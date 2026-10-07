"use client";

import { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.get("email"), password: form.get("password") }),
    });
    const data = await res.json();

    if (data.success) {
      setUser(data.user);
      setError("");
    } else {
      setError(data.message);
    }
  }

  if (user) {
    return (
      <main>
        <p style={{ color: "green" }}>
          Hello {user.firstName}, it's a beautiful day in {user.city} today!
        </p>
        <button onClick={() => setUser(null)}>Sign out</button>
      </main>
    );
  }

  return (
    <main>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8 }}>
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Sign in</button>
      </form>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
    </main>
  );
}
