const fs = require('fs');
const Date=require('./date');
const path_log = './log/log.txt';
function Log()
{
    /**Log file to */
    /**Args value message to write in file */
    this.log=function(msg)
    {
        try
        {
            let date=new Date();
            var message = `[APP] [${date.getDate()}] ` + msg ; //+ result
            fs.writeFileSync(path_log, message + '\n',{flag:'a'});
        }
        catch(err)
        {
            throw new Error('Log error'+err);
        }
    }
    
}

module.exports=Log;