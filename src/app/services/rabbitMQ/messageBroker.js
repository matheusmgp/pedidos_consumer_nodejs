  function connect(){
    
    return require('amqplib').connect({
        host: 'localhost',
        port:5672,
        username:'admin',
        password: 101010
    }).then(conn => conn.createChannel());
  }
   
  function createQueue(channel, queue){
    return new Promise((resolve, reject) => {
      try{
        channel.assertQueue(queue, { durable: true });
        resolve(channel);
      }
      catch(err){ reject(err) }
    });
  }

  function createExchange(channel,exchange, type){
   
    return new Promise((resolve, reject) => {
      try{
        channel.assertExchange(exchange, type, {durable: false});
        resolve(channel);
      }
      catch(err){ reject(err) }
    });
  }

  function bindQueue(channel, queue_name, exchange_name,routingKey){
    return new Promise((resolve, reject) => {
      try{
        channel.bindQueue(queue_name,exchange_name,routingKey)
        resolve(channel);
      }
      catch(err){ reject(err) }
    });
    
  }
   
  function sendToQueue(queue,exchange, type,message,routingKey){
  
    connect()      
      .then(channel => createExchange(channel, exchange , type))
      .then(channel => createQueue(channel, queue))
      .then(channel => bindQueue(channel, queue,exchange,routingKey))
      .then(channel => channel.publish(exchange,'', Buffer.from(JSON.stringify(message))))
      .catch(err => console.log(err))
  }

  function publish(exchange,message,routingKey){
    connect()  
    .then(channel => channel.publish(exchange,routingKey, Buffer.from(JSON.stringify(message))))    
  }
   
  function consume(queue, callback){
    connect()
      //.then(channel => createQueue(channel, queue))
      .then(channel => channel.consume(queue, callback, { noAck: true }))
      .catch(err => console.log(err));
  }
   
  module.exports = {
    sendToQueue,
    consume,
    publish,
    connect
  }