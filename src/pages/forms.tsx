import { useState } from "react";

// Less code
// Better validation
// Better Errors (set, clear, display Error)
// Have control over inputs
// Don't deal with events
// Easier Inputs

export default function Forms() {
  return (
    <form>
      <input type="text" placeholder="Username" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="submit" value="Create Account" />
    </form>
  );
}
