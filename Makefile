.PHONY: docker-run zip

docker-run:
	docker-compose up

zip:
	zip products-api.zip lib/* app.js package.json package-lock.json
