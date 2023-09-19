// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    const hq = 42;
    const distance = Math.abs(block - hq);
    return distance;
};

function distanceFromHqInFeet(block) {
    distanceFromHqInBlocks(block);
    let feetperblock = 264;
    return distanceFromHqInBlocks(block) * feetperblock;
};
 
function distanceTravelledInFeet(start, destination) {
    const feetperblock = 264;
    const distance = Math.abs(destination - start);
    return distance * feetperblock;
    l};

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let price = 0;
    const setfareprice = 2500;

if (distance <= 400)   {
    price = 0;
    return price;
} 
else if(distance <= 2000) {
    price = (distance - 400) * 2 / 100;
    return price;
} 
else if(distance <= 2500) {
    price = setfareprice/100;
    return 25;
}
 else {
    return "cannot travel that far";
};
}



    