
# Running Protractor tests using Docker

## Usage



Start `selenium-hub`:
	docker run -d -p 4444:4444 --name hub selenium/hub

Attach browsers nodes:
	docker run -d --name firefox --link hub:hub selenium/node-firefox
	docker run -d --name chrome --link hub:hub selenium/node-chrome

Build and run the protractor container:
	docker build -t plm/protractor .
	docker run --rm -v /test/code/:/code/:ro --link hub:hub plm/protractor

