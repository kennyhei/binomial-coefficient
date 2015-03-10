/**
 * 
 * Recruitment test: Binomial Coefficient
 *
 * This test is implemented in JavaScript, but if you wish, you can implement the same functionality with another language.
 * If your code requires compiling, please, add compiling instructions in the comments.
 */

/**
 * TASK 1: IMPLEMENT: C - binomial coefficient
 *
 * C(n,k) = n! / [ k! (n - k)! ]
 * Where x! is the factorial of x  
 *
 * Use a recursive solution. If needed, you can implement helper functions.
 */

//    n!
// -----------
// k! (n - k)!

function factorial(value) {

    if (value === 1) {
        return value;
    }

    return value * factorial(value - 1);
}

function C(n,k) {

    // Check special cases
    if (!Number.isInteger(n) || !Number.isInteger(k)) {
        return;
    }

    if (n === k || k === 0) {
        return 1;
    }

    // Calculate remainder
    var remainder = n - k;

    // Calculate factorial of n, k and remainder
    n = factorial(n); 
    k = factorial(k);
    remainder = factorial(remainder);

    // Result
    return n / (k * remainder);
}

/**
 * TASK 2: IMPLEMENT: Tests for function C
 *
 * Write a set of tests, that validate your binomial coefficient function.
 * Write as many test cases as you feel is needed.
 */

(function testBinomialCoefficient() {

    var tests = {
        
        example: function() {
            var pass = typeof C === "function";
            return {
                success: pass,
                message: (!pass) ? 'Expected C to be a function' : ''
            };
        },

        testErroneousZeroValue: function() {

            var pass = true;

            try {
                C(2,0);
            } catch (error) {
                pass = false;
            }

            return {
                success: pass,
                message: (!pass) ? 'Expected C to return 1.' : ''
            };
        },

        testResultEqualsN: function() {

            var n = 5,
                k = 4;

            var pass = C(n,k) === n;

            return {
                success: pass,
                message: (!pass) ? 'Expected C to return n when k equals n - 1.' : ''
            };
        },

        testResultEqualsN2: function() {

            var n = 9,
                k = 1;

            var pass = C(n,k) === n;

            return {
                success: pass,
                message: (!pass) ? 'Expected C to return n when k equals 1.' : ''
            };
        },

        testInvalidStringArguments: function() {

            // Check both parameters
            var pass = C('moi', 5) === undefined && C(5, 'hei') === undefined;

            return {
                success: pass,
                message: (!pass) ? 'Expected C to return undefined when passing string as argument.' : ''
            };
        },

        testInvalidFloatArguments: function() {

            // Check both parameters
            var pass = C(5.2, 2) === undefined && C(3, 2.4) === undefined;

            return {
                success: pass,
                message: (!pass) ? 'Expected C to return undefined when passing float as argument.' : ''
            };
        }

    };

    //  ---- You shouldn't change the code below this line  ----

    for (var test in tests) {
        var result = tests[test].apply(undefined);
        if (result.success) {
            console.log("Passed: " + test);
        } else {
            console.log("Failed: " + test + ", Message: " + result.message);
        }
    }

    //  ---- You shouldn't change the code over this line  ----

})();