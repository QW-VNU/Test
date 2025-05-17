Array.prototype.some2 = function(callback){
    var output = false;
    for (var index in this){
        if (this.hasOwnProperty(index)){
            if (callback(this[index], index, this)){
                output = true;
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

var result = courses.some2(function(course, index, arr){
return course.isFinish;
})

console.log(result)