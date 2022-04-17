const array =[ "Guadalupe","Ollie","Aki"]


function writeCards(names, occasion){
    
    let messageNames=[];
    for ( let i = 0; i < names.length; i++){
        let names = array[i];
        let message = `Thank You, ${names}, for the wonderful ${occasion} gift!`
                    messageNames.push(message);
        
    }
    return message;
}

const countDown = 11;
while (countDown > 10){
    console.log(countDown--)
}




