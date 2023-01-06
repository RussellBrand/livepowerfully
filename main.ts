import { Application } from 'https://deno.land/x/abc@v1.0.0-rc10/mod.ts'

const app = new Application()

// app.static('/', 'public').start({ port: 3002 })


app.static('/', 'public')
  .file('/', 'public/livepowerfully.xyz/index.html')
  .file('/livepowerfully.xyz', 'public/livepowerfully.xyz/index.html')
  .start({ port: 8080 })



