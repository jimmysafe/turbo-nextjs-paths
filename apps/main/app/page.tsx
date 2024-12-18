import { execute } from "@repo/gql/execute/server";
import { graphql } from "@repo/gql/generated/index";
import { StoreSheet } from "./_components/store-sheet";

const GetNegozi = graphql(`
    query GetNegozi {
      Stores {
        docs {
          id
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
      <div className="space-y-4 max-w-3xl mx-auto">
        {negozi.Stores?.docs?.map(store => (
          <div key={store?.id} className="p-6 rounded shadow">
            <h2>{store?.name}</h2>
            <StoreSheet id={store?.id} />
          </div>
        ))}
      </div>

    </div>
  );
}
