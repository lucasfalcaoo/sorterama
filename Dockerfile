FROM node:13-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH


COPY . ./
RUN npm install --silent
RUN npm install --global serve
  

EXPOSE 5000

# start app
CMD serve -s build