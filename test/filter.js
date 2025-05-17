Array.prototype.filter2 = function(callback){
    var output = []
    for (var index in this){
        if (this.hasOwnProperty(index)){
           var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }
}

var courses = [{
    name: 'jv',
    coin: 4000
},{
    name: 'php',
    coin: 5
}];

var filterCourses = courses.filter(function(course){
    
    return course.coin > 500;
})

console.log(filterCourses)