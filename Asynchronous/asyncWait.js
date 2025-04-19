function boilWater(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>resolve("Water Boiled"), 1000);
    });
}

function addTeaLeaves(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>resolve("Added Tea Leaves"), 2000);
    });
}

function pourIntocup(){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve("Tea is Ready"), 5000);
    });
}

async function maketea() {
    const water = await boilWater();
    console.log(water);
    
    const tea = await addTeaLeaves();
    console.log(tea);

    const cup = await pourIntocup();
    console.log(cup);
}

maketea();



