// app/page.js
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route"; // Adjust based on your file structure

export default async function Home() {
  const session = await getServerSession(authOptions); // Make sure this is correct

  console.log("Session data on the server:", session); // Check what this outputs

  return (
    <div>
      <h1>Hello</h1>
      {session ? (
        <div>
          <p>Welcome, {session.user.name}</p>
        </div>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}
