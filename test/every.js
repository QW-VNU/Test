Array.prototype.every2 = function(cb){
    var output = true;
    for (var index in this){
        if (this.hasOwnProperty(index)){
            var result = cb(this[index], index, this);
            if (!result){
                output = false;
                break;
            }
        }
    
    }
    return output;
}


var courses =[{
    name: 'jv',
    coin: 200,
    isFinish: true
},{
    name: 'php',
    coin: 400,
    isFinish: false
}]

var result = courses.every2(function(course, index, arr){
    return course.isFinish;
})

console.log(result)