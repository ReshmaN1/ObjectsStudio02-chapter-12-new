// Code your orbitCircumference function here:
function orbitCircumference(radius){
  return Math.round( 2*Math.PI*radius);
}

// Code your missionDuration function here:
function missionDuration(orbitsCompleted,  orbitradius=2000, orbitspeed=28000){
  //time = distance /speed
  //2 decimal places
  let distace = orbitCircumference(orbitradius) * orbitsCompleted;
 let  time = distace / orbitspeed;
 return Math.round(time*100)/100;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr){
let index = Math.floor(Math.random()*arr.length);
return arr [index];
}

function selectedloWest02CrewMember(arr){
  let testNumber = 1;
  let lowest02Consumption = undefined;
  let winningCrewMember = undefined;
  for(let i=0;i<arr.length;i++){
  let calculated02Consumption = arr[i].o2Used(testNumber);
  if (lowest02Consumption === undefined || calculated02Consumption<lowest02Consumption){
  lowest02Consumption  = calculated02Consumption;
  winningCrewMember = arr[i];
    }
  }
  return winningCrewMember;
}

// Code your oxygenExpended function here:
function oxygenExpended(animal,orbitsCompleted,orbitRadius,orbitspeed){
  let duration = missionDuration(orbitsCompleted,orbitRadius,orbitspeed);
  //console.log('duration:'+duration);
  //console.log(animal.o2Used(duration)*1000/1000);
  let oxused = Math.round(animal.o2Used(duration)*(1000))/1000;
  return `${animal.name} will perform the spacewalk, which will last ${duration} hours and require ${oxused} kg of oxygen`;
}
//oxygenExpended(candidateA, 5,3000,30000);

// Candidate data & crew array.
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateA,candidateC,candidateE];
let randoCrewMember = selectRandomEntry (crew);
let message = oxygenExpended(candidateA, 5,3000,30000);
console.log(message);
 //console.log (candidateA);

 let 
      loWest02CrewMember=selectedloWest02CrewMember    (crew);
 console.log(loWest02CrewMember);