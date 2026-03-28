const  express=require ('express');
const app=express();

const Log=require('logger');
const logger = new Log();

/*Example of using logger library*/
app.get('/',(request,response)=>{
	response.send('<h1>You visited basic website </h1>');
	logger.log('Client  visited our site');
	console.log('Written to log file');
});


const PORT = 8080;
app.listen(PORT,()=>{
	console.log(`Server is listening ON ${PORT}`);

});