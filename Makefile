start:
	deno run --allow-net --allow-read local-main.ts

deploy:
	- git commit -a -m "for deploying"
	git push


