FROM node:18 AS build

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# 80 포트 설정 
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


# 혹시 몰라 남겨 두는 실행 명령어
# docker build -t my-react .
# docker run -p 3000:80 my-react