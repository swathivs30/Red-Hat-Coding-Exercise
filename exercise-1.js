/* Problem with the given code: The addition of the two variables
 "one" and "two" was being done before the two functions
 "callOneService" and "callOneService" were returned due to
 varied setTimeouts.

 Solution 1: Chain the invoking of "callTwoService"
 with the promise returned by "callOneService" and
 THEN return the sum of the two variables.*/

/****** Solution 1 ******/
function remoteMathService(cb) {
    var one = 0, two = 0;

    callOneService(function(err, num) {
        one = num;
    })
    .then(callTwoService(function(err, num) {
        two = num;
        return cb(undefined, one + two);
    }));
}

function callOneService(cb) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            return cb(undefined, 1);
        }, 1000);
  });
}

function callTwoService(cb) {
    setTimeout(function() {
        return cb(undefined, 2);
    }, 1500);
}

remoteMathService(function(err, answer) {
    if (err) console.log("error ", err);
    if (answer !== 3) {
        console.log("wrong answer", answer);
    } else {
        console.log("correct");
    }
});

/* Solution 2: Eliminate multiple callbacks,
making use of promises for individual functions
and return the sum of "one" and "two" using promise.all.*/

/****** Solution 2 ******/
function remoteMathService (cb) {
    var one = 0, two = 0;

    Promise.all([callOneService(), callTwoService()])
    .then(values => {
        one = values[0];
        two = values[1];
        return cb(undefined, one + two);
    })
    .catch(error => {
      console.log("error...", error);
    });
}

function callOneService() {
    var promise = new Promise(function(resolve, reject) {
     window.setTimeout(function() {
       resolve(1);
     }, 1000);
   });
   return promise;
}

function callTwoService() {
    var promise = new Promise(function(resolve, reject) {
     window.setTimeout(function() {
       resolve(2);
     }, 1500);
   });
   return promise;
}

remoteMathService(function(err, answer) {
    if (err) console.log("error ", err);
    if (answer !== 3) {
        console.log("wrong answer", answer);
    } else {
        console.log("correct");
    }
});
