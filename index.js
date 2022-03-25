const Bull = require('bull');

function sendEmail(userName) {
  console.log(`Sending email to ${userName}`)
}

(async () => {
  const emailQueue = new Bull('email-queue', { redis: { port: 6379, host: '127.0.0.1' } });
  
  console.log('starting stopwatch...')
  console.time('stopwatch');
  console.timeLog('stopwatch');

  await emailQueue.add({
    user: {
      name: 'Marcelo'
    }
  }, {
    delay: 5000
  });

  await emailQueue.add({
    user: {
      name: 'Leonardo'
    }
  }, {
    delay: 2000
  });

  await emailQueue.add({
    user: {
      name: 'Yip'
    }
  }, {
    delay: 3000
  });

  emailQueue.process( async (job) => {
    const { user: { name } } = job.data;

    console.log('\n---------\n');
    sendEmail(name);
    return Promise.resolve(name)
  });
  
  emailQueue.on('completed', (job, result) => {
    console.log(`Email sent to ${result} with success!`);
    console.timeLog('stopwatch');
  })
})()