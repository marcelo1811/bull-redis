# Bull-redis

Simple project using bull and redis for learning

## What Does the Project do?
This is a simple project that try to simulate scheduled emails using redis queue. In this project we have scheduled 3 emails sent with different delayed times. **(It is preferable to use [cron](https://crontab.guru/#40_23_*_*_*) to schedule it, but I used ***time delay*** for experimental proposes)**

When the email is being sent it should log the message<br>
```bash
Send email to: <userName>
```
When the email is succesfully sent it should log the message<br>
```bash
Email sent to <userName> with success!
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

starting stopwatch...
stopwatch: 0.046ms

---------

Sending email to Leonardo
Email sent to Leonardo with success!
stopwatch: 2.043s

---------

Sending email to Yip
Email sent to Yip with success!
stopwatch: 3.036s

---------

Sending email to Marcelo
Email sent to Marcelo with success!
stopwatch: 5.021s
```

## License
[MIT](https://choosealicense.com/licenses/mit/)