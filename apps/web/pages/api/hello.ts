// import type { IncomingMessage, ServerResponse } from "http";

// export default async (req: IncomingMessage, res: ServerResponse) => {
//   res.statusCode = 200;
//   const result = {
//     data: "Hello world!",
//   };
//   res.end(JSON.stringify(result));
// };

import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function (req: VercelRequest, res: VercelResponse) {
  res.send("Hello!");
}
