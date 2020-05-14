FROM nginx:stable

COPY /src/dist/ /dist/

RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 3000