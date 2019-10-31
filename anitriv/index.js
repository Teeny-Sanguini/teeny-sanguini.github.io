window.onload = init;
    function init() {
        var submit = document.getElementById("submit");
        submit.onclick = noscript;
    }
    
    function noscript() {
        var check = []; // answers for each question will go into this array
        var correct = ["Goku", "Shadow Clone Jutsu", "Kappei Yamaguchi", "Shinichi Kudo", "Random"];
        var nocheck = 3; // number of unanswered questions
        var noofcorrect = 0; // amount of correct answers

        var body = document.getElementsByTagName('div');
        var i = 0;
        for (; i < body.length; i++) {
            var q = body[i].getElementsByTagName('input');
            var j = 0;
            for (; j < q.length; j++) {
                // check to see if the question has a checked answer
                
                if (q[j].checked) {
                // if it does, the checked answer is going to be pushed to the check array above
                  
                  nocheck--; // and the no of unanswered question is going to drop by 1
                  check.push(q[j].value);
                }

                else if (nocheck >= 2) {
                  document.getElementById('an').textContent = 'umm, you haven\'t answered ' + nocheck + ' questions yet';
                }

                else if (nocheck == 1) {
                  document.getElementById('an').textContent = 'umm, you haven\'t answered ' + nocheck + ' question yet';
                }

                else if (nocheck == 0) {
                  document.getElementById('an').textContent = '';
                  var i = 0;
                  for (; i < correct.length; i++) {
                      if (check[i] == correct[i]) {
                         noofcorrect++;
                      }
                  }
                  alert('you got ' + noofcorrect + ' right.');
                  break;
                }
            }
            
        }
    } 