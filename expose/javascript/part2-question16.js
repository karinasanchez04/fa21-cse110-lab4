let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(property in statistics){
    let str = `${property}`;
    
    if(str.charAt(0) == 'r' || statistics[property]%2!=0){
        console.log(statistics[property]);
    }  

}