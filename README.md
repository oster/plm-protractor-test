
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


## How to run protractor in interactive mode

Start a standalone chrome driver instance:

	docker run -d --rm -p 4444:4444 --name standalone-chrome selenium/standalone-chrome:2.46.0	

Start an interactive protractor container:

	docker run -it --rm -v /home/oster/plm-protractor-test/code/:/code/ --link standalone-chrome:standalone-chrome plm/protractor protractor --seleniumAddress http://standalone-chrome:4444/wd/hub --elementExplorer
    
Now, you can get to browse a web page, for instance:
	
	browser.get('http://plm.telecomnancy.univ-lorraine.fr')

	

