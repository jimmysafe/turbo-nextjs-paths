import { graphql } from "@repo/shared/generated/index";
import { execute } from "@repo/shared/gql-execute";
import { Button } from "@repo/ui/components/ui/button";

const GetNegozi = graphql(`
    query GetNegozi {
      Stores {
        docs {
          name
        }
      }
    }
  `);

export default async function Home() {
  const negozi = await execute(GetNegozi);

  return (
    <div>
      <h1>MAIN APP</h1>
      <Button>Ciao</Button>
      <pre>{ JSON.stringify(negozi, null, 2)}</pre>
    </div>
  );
}
