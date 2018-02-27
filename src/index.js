module.exports = function solveEquation(equation) {

            equation = equation.split(' ').join('').replace('*x^2',' ').replace('*x',' ').split(' ');
            const a = equation[0];
            const b = equation[1];
            const c = equation[2];
            const d = Math.pow(b, 2) - (4 * a * c);
            const x1 = Math.round((-b - Math.sqrt(d)) / (2 * a) );
            const x2 = Math.round((-b + Math.sqrt(d)) / (2 * a) );
            delete equation[2];
            if (x1 > x2) {
              equation[0]= x2;
              equation[1]= x1;
            }

            else {
              equation[1]=x2;
              equation[0]=x1;
            }
            return(equation);

    }
