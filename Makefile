# Variables
PROD_PORT = 8888

# install
.PHONY: install
install:
	npm install

# serve development app
.PHONY: serve-dev
serve-dev:
	npm start

# Build
.PHONY: build
build:
	npm run build

# serve production
.PHONY: serve-prod
serve-prod:
	node_modules/serve/bin/serve.js -s build -l $(PROD_PORT)

# Run tests locally
.phony: tests
tests:
	npm test
