import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@repo/ui/components/ui/button";

export default async function Home() {
  const user = await currentUser();
  console.log(user?.privateMetadata.payloadKey);
  const response = await fetch("http://localhost:4000/api/users", {
    headers: {
      Authorization: `users API-Key ${user?.privateMetadata.payloadKey}`,
    },
  });
  const result = await response.json();
  console.log(result);

  return (
    <div>
      <h1>MAIN APP</h1>
      <Button>Ciao</Button>
    </div>
  );
}
