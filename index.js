import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //
/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
function first(item){
   item.forEach(items =>{
       if(items.Year === '2014' && items.Stage === 'Final')
            console.log(element['Home Team Name']);
        }) 
}
first(fifaData)
(b) Away Team name for 2014 world cup final
function seconf(e){
    e.forEach(items =>){
      if(items.Year === '2014' && items.stage === "Final"){
        console.log(e['Away Team Name'])
      }  
    }
}
(c) Home Team goals for 2014 world cup final
function third(j){
    j.forEach(j =>){
        if(j.Year === '2014' && j.Stage === "Final"){
            console.log(j["Home Team Goals"])
        }
    }

}
(d) Away Team goals for 2014 world cup final
function third(k){
    k.forEach(k =>){
        if(k.Year === '2014' && k.Stage === "Final"){
            console.log(k["Away Team Goals"])
        }
    }

}
(e) Winner of 2014 world cup final 
function fourth(l){
    l.forEach(l =>{
        if(l.Year === '2014' && l.Stage === "Final"){
            console.log(l["Win Conditions"])
        }
    })

}

*/



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(items){
    const theFinalList = items => items.Stage === "Final";
    const finalist = items.filter(theFinalList);
    return (finalist);
  }
  console.log(getFinals(fifaData))



/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
function getYears(func) {
const Years= []
func.forEach(item => {
Years.push(item.Year)
});
return Years

};

console.log(getYears(getFinals(fifaData)))

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(func) {
    const winners = func.map(e =>{
        if(e ['Home Team Goals'] > e['Away Team Goals']){
         return e ['Home Team Name']
        }else {
        return e ['Away Team Name']
     }

    })
    return winners

};

console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(func1,func2) {
    let newArray= []
    for(let i=0;i<func1.length;i++){
        newArray.push(('in ' + func2[i] + ',' + func1[i] + ' won the world cup '))
    }
    return newArray;
};

console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let array1 = []
    let array2 = []
data.forEach(elem =>{
   array1.push(elem ['Home Team Goals']) 
   array2.push(elem ['Away Team Goals'])
})
const avgGoalsHome = array1.reduce(function(a,b) {
    return a + b;
})
const avgGoalsAway = array2.reduce(function(a,b){
    return a + b;
})
console.log(avgGoalsHome/ array1.length);
console.log(avgGoalsAway / array2.length);

}


(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
