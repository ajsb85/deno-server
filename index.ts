import { serve } from "https://deno.land/std@0.91.0/http/server.ts";
import { serveFile } from 'https://deno.land/std@0.91.0/http/file_server.ts';

const server = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req of server) {
  console.log(req.url);
  if(req.url === '/') {
    const response = await serveFile(req, 'jlcpcb.csv');
    req.respond(response)
  }
}
