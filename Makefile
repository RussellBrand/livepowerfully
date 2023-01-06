start:
	deno run --allow-net --allow-read local-main.ts

deploy:
	- git commit -a -m "for deploying"
	git push


check:
	deno lint main.ts
	deno check main.ts
