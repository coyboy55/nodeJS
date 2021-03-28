
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
 // const text1=text.splite("");
 // console.log("hello "+text+"!");
 // text.replace(text,text+"\n");
  if (text.trim(" ") === 'quit' || text.trim(" ") === 'exit') {
    quit();
  }
  else if(text.split(" ")[0] === 'hello'){
    hello(text.split(" ")[1]);
  }else if (text.trim(" ") === 'help'){
    help();
  }else if(text.trim(" ") === 'list'){
    list();
  }else if(text.split(" ")[0] === 'add'){
    add(text.split(" ")[1]);
  }else if(text.trim(" ") === 'remove'){
    tasks.pop();
  }else if(text.split(" ")[0] === 'remove'){
    tasks.splice(text.split(" ")[1],1);
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *when ur command have one word 'hello' u will get 'hello!' between if ur command have 2 word lik 'hello fakher' u will get 'hello faher!'
 * @returns {void}
 */
function hello(t=""){
  console.log('hello!')
  console.log(`hello ${t}!`);
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/*
 show user list of command "command which u can use"
 help
 */
function help(){
  console.log("command which u can enter:"+"\n"+"hello"+"\n"+"exit OR quit"+"\n"+"help");
}
/**
 * list
 *
 * @returns {void}
 */
 let tasks=['hello','help','exit OR quit','list'];
 function list(){

  for(let i=0;i<tasks.length;i++){
    console.log(i+'-'+tasks[i]);
    
  }
}

/*

 add
 */
 function add(c){
  
  tasks.push(c);
}

// The following line starts the application
startApp("fakher abu hamda")
