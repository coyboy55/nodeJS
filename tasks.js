
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
  process.stdin.on('data', onDataReceived1);
  

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
  function onDataReceived1(text1){
  if(text1.trim(" ") === 'yes'){
  
  

 quit();
}else if(text1.trim(" ") === 'no'){
   quit();
 }
  }

function onDataReceived(text) {
 // const text1=text.splite("");
 // console.log("hello "+text+"!");
 // text.replace(text,text+"\n");
  if (text.trim(" ") === 'quit' || text.trim(" ") === 'exit') {
    console.log('do u want to exit? (yes/no)');
    save();
   onDataReceived1(text.trim(" "));
 
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
    removeI(text.split(" ")[1]);
  }else if(text.trim(" ") === 'edit'){
    console.log("ERROR");
  }else if(text.split(" ")[0] === 'edit'){
   if(text.split(" ").length===2){
    edit(tasks.length-1,text.split(" ")[1])
   }else if(text.split(" ").length===3){
     if(text.split(" ")[1]>tasks.length-1){console.log("out of range");}else
    { edit(text.split(" ")[1],text.split(" ")[2]);}
   }else{
     console.log("error");
   }
  }else if(text.split(" ")[0] === 'check'){
    check(parseInt(text.split(" ")[1]));
  } else if(text.split(" ")[0] === 'uncheck'){
    uncheck(parseInt(text.split(" ")[1]));
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
 remove u canremove any task from the list by remove to remove last item or remove 1 or 2 or 3 to remove from specific index
 */
function help(){
  console.log("command which u can enter:"+"\n"+"hello"+"\n"+"exit OR quit"+"\n"+"help");
}
/**
 * list
 *
 * @returns {void}
 */
 let tasks=[['hello',true],['help',false],['exit OR quit',false],['list',true]];
//  let done=['[',']'];
//  let done1=[];
//  for(let j=0;j<done.length;j++){
//     done1.push(done[j]);
//  }
let done="";
 function list(){
   
  for(let i=0;i<tasks.length;i++){
    if(tasks[i][1]==true){
      done="[✔]";}
      else{done="[ ]"}
    console.log(i+'-'+done+tasks[i][0]);
    
  }
}

/*

 add
 */
 function add(c){
  
  tasks.push(c);
  console.log(c+"was added");
}

/*

 removeI
 */
 function removeI(c,){
   if(c>tasks.length-1){
     console.log("number does not exist");
   }else{
   tasks.splice(c,1);
   }
}

/*

 edit
 */
 function edit(l,c){
  
  tasks[l]=c;
  console.log(l+" was edited");
}

/*

 check
 */
 function check(I){
  tasks[I][1]=true;
  }
/*

 uncheck for
 */
 function uncheck(I){
  tasks[I][1]=false;
  }
  
  function save(){
    var fs = require('fs');
    fs.appendFile('database.json', JSON.stringify(tasks) , function (err) {
      if (err) throw err;
     
    });
  }

  try{
  var fs1 = require('fs');
fs1.readFile('database.json', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(JSON.parse(data));
});
}catch(e){
  console.log(e);
  
}


// The following line starts the application
startApp("fakher abu hamda")
