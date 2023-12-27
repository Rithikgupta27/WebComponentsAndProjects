exports.addition=(x,y)=>{
    return x+y;
}

exports.substraction=(x,y)=>{
    return x-y;
}

exports.factorial=(n)=>{
    var fact=1;
    for(var i = 1;i<=n;i++){
        fact=fact*i;
    }
return fact;
}

exports.multiplication=(x,y)=>{
    return x*y;
};
