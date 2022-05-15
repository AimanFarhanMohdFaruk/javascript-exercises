const repeatString = function(str,num) {
    let multiStr = ""

    if(num >= 0){
        for (let i = 0; i < num; i++){
            multiStr += str
        }
        return multiStr
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
