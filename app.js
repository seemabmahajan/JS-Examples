const rect = {
    perimeter: (x,y) => 2*(x+y),
    area: (x,y) => x*y
}

function solveRect(l,w){
    console.log( `Solving for rectangles with dimensions : ${l}, ${w}`);
    if(l <=0 || w <=0){
        console.log(`error`)
    } else {
        console.log(` Area of this rectangle is : ${rect.area(l,w)}`)
    }
}

solveRect(12,12);
solveRect(2,-1)
solveRect(-3,2)
solveRect(4,7)