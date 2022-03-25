const Bull = require('bull');

function sendEmail(userName) {
  console.log(`Send email to: ${userName}`)
}

(async () => {
  const myFirstQueue = new Bull('my-first-queue', { redis: { port: 6379, host: '127.0.0.1' } });
  
  console.time('stopwatch');
  await myFirstQueue.add({
    user: {
      name: 'Marcelo'
    }
  }, {
    delay: 5000
  });

  await myFirstQueue.add({
    user: {
      name: 'Leonardo'
    }
  }, {
    delay: 2000
  });

  await myFirstQueue.add({
    user: {
      name: 'Yip'
    }
  }, {
    delay: 3000
  });

  myFirstQueue.process( async (job) => {
    const { user: { name } } = job.data;
    sendEmail(name);
    return Promise.resolve(`${name} - success`)
  });
  
  myFirstQueue.on('completed', (job, result) => {
    console.log(`Job completed with result: ${result}`);
    console.timeLog('stopwatch');
    console.log('---------');
  })
})()