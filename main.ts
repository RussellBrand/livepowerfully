import { serve } from "https://deno.land/std@0.170.0/http/server.ts"
import { join } from "https://deno.land/std@0.170.0/path/mod.ts";
import { serveFile } from "https://deno.land/std@0.170.0/http/file_server.ts"

console.log("RLB STARTING...")

// const PUBLIC_DIR = Deno.cwd() + "/public/livepowerfully.xyz/"

const PUBLIC_DIR = Deno.cwd() + "/public/"

console.log("PUBLIC_DIR", PUBLIC_DIR)

// Start the server -> routes all requests to the handler below
serve(handleRequest, { port: 8080 })

// Handle all HTTP requests
function handleRequest(request: Request): Promise<Response> {
    
// Get and adjust the requested path name
  let { pathname } = new URL(request.url); // get the path name
  
  
  console.log({pathname});

  if (pathname === '/'){
    console.log("mark")
  }

    if (pathname === '/') pathname = '/index.html'; // fix root
  
  
    // make a request full-path
    const fullPath = join( PUBLIC_DIR + pathname);

    console.log(`RLB --- Serving ${fullPath}`); // show what was requested

    // find the file -> get the content -> return it in a response
    return serveFile(request, fullPath) //.substring(1));
}
