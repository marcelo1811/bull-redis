# Bull-redis

Simple project using bull and redis for learning

## What Does the Project do?
This is a simple project that try to simulate scheduled emails using redis queue. In this project we have scheduled 3 emails sent with different delayed times.

When the email is being send it should log the message<br>
```bash
Send email to: <userName>
```
When the email is succesfully sent it should log the message<br>
```bash
Job completed with result: <userName> - success
```

## What do you need?
- node
- docker

## How Do you Install it?

Use the package manager yarn or npm to install foobar.

npm
```bash
npm install
```

yarn

```bash
yarn install
```

## How do you use it?

1. Go to `/docker` folder
2. Execute `docker-compose up -d` to run redis instance
3. Execute `npm start`


## How do you Make Sure it Works?
This is the expected output
```bash
> node index.js

Send email to: Leonardo
Job completed with result: Leonardo - success
stopwatch: 2.044s
---------
Send email to: Yip
Job completed with result: Yip - success
stopwatch: 3.037s
---------
Send email to: Marcelo
Job completed with result: Marcelo - success
stopwatch: 5.021s
---------
```

## License
[MIT](https://choosealicense.com/licenses/mit/)