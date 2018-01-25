// Find missing parenthesis in a given expression –2*(3+5(sasdfasdfasd)

// to return the position where the unmatched are located:
function missingParenth(str){
    let open = [];
    let closed = [];
    for (var i = 0; i < str.length; i++){
        if(str[i]=== "("){
            open.push(i);
        }
        else if (str[i]=== ")"){
            closed.push(i)
        }
    }
    if(open.lenth === closed.length){
        return("statement true");
    }
    else if (open.length > closed.length){
        open.splice(open.length - closed.length);
        return ({"Open parenthesis at the follow positions have no close ": open});
    }
    else {
        closed.splice(closed.length - open.length);
        return({"Closed parenthesis at the follow positions have no close ": closed})
    }
}

missingParenth("–2*(3+5(sasdfasdfasd)");

// just find if they are missing

function missingParens(str){
    let count = 0;
    for (var i = 0; i < str.length; i++){
        if(str[i]==="("){
            count++;
        }
        if(str[i]===")"){
            count--;
        }
    }
    if(count === 0){
        return(true);
    }
    else{
        return (false);
    }
}