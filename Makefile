.DEFAULT_GOAL := help
.PHONY: help setup

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

VERSION := $(shell cat ./VERSION)

setup: ## Sets up dependencies
	yarn global add uglify-js 

build: clean build-nerd-wix-spinner ## Creates minified files for distribution

clean: ## Removes all files from the dist folder
	@rm -rf dist/*

build-nerd-wix-spinner:
	uglifyjs src/NerdWixSpinner.js -c -m --comments all -o dist/NerdWixSpinner.js --comments all --source-map
	@echo "\n/* $(VERSION) */" >> dist/NerdWixSpinner.js
