FROM node:lts-gallium
ENV NODE_ENV=development
#stage 1
FROM node:16-alpine as builder
ARG DOMAIN

ENV REACT_APP_BACKEND_URL=${DOMAIN}

WORKDIR /app
COPY . /app
RUN apt update && apt install nano -y

# install app dependencies 
# copies package.json and package-lock.json to Docker Environments
COPY frontend/package*.json ./

#install all node packages
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]

# copies everything over to Docker Environment
COPY frontend/ .

RUN npm run build

#stage2

#pull the official nginx:stable base image
FROM nginx:stable

WORKDIR /usr/share/nginx/html
# remove default nginx static resources
# RUN rm -rf ./*
# copies static resources from builder stage  

COPY --from=builder /app/build .
# containers run nginx with global directives and daemon off 

ENTRYPOINT ["nginx", "-g", "daemon off;"]