---
title: Serial communication with Node.js
date: "2021-06-01T00:00:00.000Z"
description: "Serial ports are used to transfer the data through USB/hardware interfaces. With node.js, we can transfer the data using javascript."
---
Serial ports are used to transfer the data through USB/hardware interfaces. Devices such as USB, Arduino board, IoT devices uses serial port to transfer the data. 

![serialport](/serial-port-communication-with-node.png)

### Setup virtual serial port

In this article, virtual serial ports has been used to simulate the hardware device. There are many apps are available and recommended one is [**com0com emulator**](http://com0com.sourceforge.net) (free) and [**Virtual Serial Port Driver**](https://www.eltima.com/products/vspdxp/) (free trial).

We need to pair the virtual serial ports - one to receive the data and another to send the data. When data send to COM1, COM1 forward to COM2 and it send to receiver end. We can use any COM port numbers to pair.

![serialport](/vspd-pro.png)

### Node Serial Communication

First, we have to create a node project and then need to install [serialport](https://serialport.io) package. I recommend this package since its widely used and many options to customise.

```ssh 
npm init
```

```ssh 
npm install serialport
```

package.json looks like this.

```json
{
  "name": "serial-comm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "serialport": "^9.0.2"
  }
}
```

Create `send.js` file and configure the serial port options to send the data to COM1. Data format can be string or buffer.  

```javascript
var SerialPort = require("serialport");
var port = "COM1";
var message = "Hakuna Matata";

var serialPort = new SerialPort(port, {
  baudRate: 9600
});

serialPort.write(message, function(err) {
  if (err) {
    return console.log("Error on write: ", err.message);
  }
  console.log("Message sent successfully");
});
```

Now we need receive the data from COM2. Create `receive.js` file and copy the below code.

```javascript
var SerialPort = require("serialport");
var port = "COM2";

var serialPort = new SerialPort(port, {
  baudRate: 9600
});

serialPort.on("open", function() {
  console.log("-- Connection opened --");
  serialPort.on("data", function(data) {
    console.log("Data received: " + data);
  });
});
```
### Run the program

First, we need to listen the COM port to receive the data. Open new terminal and run below command,

```ssh 
node receive.js
```

Output(Terminal 1)
```ssh 
>> -- Connection opened --
```

Open another terminal and run the below command

```ssh 
node send.js
```

Output(Terminal 2)
```ssh 
>> Message sent successfully
```

Message sent to the COM1 and it forward to COM2. Open the first terminal and we can see the message is received like below,

Output(Terminal 1)
```ssh 
>> -- Connection opened --
>> Data received: Hakuna Matata
```

It works! 😃

If we have real hardware devices, we can use one port to transfer the data instead of using virtual serial ports.

Happy blogging!

