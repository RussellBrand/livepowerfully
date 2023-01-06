import { serve } from "https://deno.land/std@0.170.0/http/server.ts"
import { join } from "https://deno.land/std@0.170.0/path/mod.ts";
import { serveFile } from "https://deno.land/std@0.170.0/http/file_server.ts"

// Start the server -> routes all requests to the handler below
serve(handleRequest, { port: 8080 })

// Handle all HTTP requests
function handleRequest(request: Request): Promise<Response> {
    
// Get and adjust the requested path name
    let { pathname } = new URL(request.url); // get the path name
    if (pathname === '/') pathname = '/index.html'; // fix root
    
    // make a request full-path
    const fullPath = join(Deno.cwd() + pathname);

    console.log(`Serving ${fullPath}`); // show what was requested

    // find the file -> get the content -> return it in a response
    return serveFile(request, fullPath) //.substring(1));
}
