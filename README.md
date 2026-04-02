# Logger library
Simple and fast logging library for backend project

# Quick start 
```js
const Log=require('logger');
const logger = new Log();

logger.log("Message to log");
```

# Features
* Writing out to file
* Date and time are added

# Installation
Copy library file file into project's directory ```lib/``` and write

```bash
npm install --save lib/logger
``` 
Or just copy ``` "logger": "file:lib/logger"``` and ``` "date": "file:lib/date"``` into ```package.json``` file of project and type 
```bash 
	npm install
```

# Examples
You can see examples in app.js file