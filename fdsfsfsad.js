process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});
/*
 * Complete the function below.
 */
function waitingTime(tickets, p) {
    
    let min = Number.MAX_SAFE_INTEGER;
    let time = 0;
    let indexMin = 0;
    
    while(tickets.length > 0){
        min = Math.min(...tickets);        
        indexMin = tickets.indexOf(min);
        if(p === indexMin){
            time = time + indexMin + 1;
            break;
        }else{
            if(p > indexMin){
                p--;
            }            
        }                      
        tickets = tickets.map(ticket => ticket - min);        
        time += min * tickets.length;
        tickets = tickets.filter(ticket => ticket !== 0);       
    }
    return time;

}
var fs = require('fs');
// var wstream = fs.createWriteStream(process.env.OUTPUT_PATH);
process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var res;

    var _tickets_size = 0;
    _tickets_size = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;
    
    var _tickets = [];
    var _tickets_item;
    for(var _tickets_i = 0; _tickets_i < _tickets_size; _tickets_i++) {
        var _tickets_item = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
        __input_currentline += 1;
        _tickets.push(_tickets_item);
    }
    
    var _p = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;
    
    res = waitingTime(_tickets, _p);
    console.log(res);
    // wstream.write(res+"\n");
    
    // wstream.end();
});
