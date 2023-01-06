// import { Application } from 'https://deno.land/x/abc@v1.0.0-rc10/mod.ts'

import { Application } from 'https://deno.land/x/abc/mod.ts'

const app = new Application()




app.static('/', 'public')
  .file('/', 'public/livepowerfully.xyz/index.html')
  .file('/livepowerfully.xyz', 'public/livepowerfully.xyz/index.html')
  .start({ port: 8080 })
  // .start()



