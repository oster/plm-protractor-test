FROM iojs:2.3

MAINTAINER Gerald Oster <gerald.oster@loria.fr>

RUN npm install -g protractor && webdriver-manager update

RUN mkdir /code

WORKDIR /code

CMD ["protractor", "conf.js"] 