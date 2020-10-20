/**
 * Echo a text a number of time
 * @param {what you want to echo} content 
 * @param {number of times} times 
 */
function echo(content, times){
    for(var i = 0 ; i < times ; ++ i) 
        console.log(content);
}


echo("Echo", 10);