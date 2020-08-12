        // Variables Holding Counter.
        var Msec = 0;
        var sec = 0;
        var min = 0;
        var hrs = 0;
        
        // Variables Holding Text
        var mainText = document.querySelector('#main');
        var textInput = document.querySelector('textarea');
        var border = document.querySelector('#border');

        var interval = null;
        var textarea = "Typing";
        // Random Text 

        function rand () {
            var arr = [
                "Study The following sentence from lion hunting. Hw walked Quickly along the jungle track and felt very happy till he meete the lion, The lion could not stop because it was running too fast.",
                "When a few letter represent a group of word, we say that the words are abbreviated. The firs letter of each words and a full stop often take the place of the word. B.C (Before Christ), U.S.A (United States of America).",
                "The Work i would like to do when i leave school. When i leave school, i would like to becime a famer. A farmer is very important in every society because he produce the food people eat in other to leave.",
                "This is the text to test for. And Your time start counting immediately you start typing (T.S.A) Typing Speed and Accuracy."
            ]
            var randomText = arr[(Math.floor(Math.random() * arr.length))];
            mainText.innerHTML = randomText;
        }
        onload = rand ()
        // Spell Check Function

        function spellCheck () {
            var userInput = textInput.value;
            var textMatch = mainText.innerHTML.substring(0, userInput.length);
            
            if (userInput === mainText.innerHTML){
                clearInterval(interval)
                border.style.borderColor = "green";
            }
            else {
                if (userInput == textMatch){
                    border.style.borderColor = "Blue";
                }else{
                    border.style.borderColor = "orangeRed";
                }
            }  
        }
        
        //Stop Watch Functio
        function text () {
            Msec++;
            
            if(Msec == 59){
                Msec = 0;
                sec++;
                
                if (sec == 59){
                    sec = 0;
                    min++;

                    if  (min == 59){
                        n = 0;
                        hrs++;
                    }
                }
            }
            document.getElementById('time').innerHTML = hrs + ':' + min + ':' + sec + ':' + Msec;
        }
        // Start Button Function
        function start () {
            if (textarea === "Typing"){
                interval = setInterval(text, 15);
                textarea = "Empty";
            }
        }
       

        function startover () {
            Msec = 0;
            sec = 0;
            min = 0;
            hrs = 0;
            document.getElementById('textarea').value = "";
            document.getElementById('time').innerHTML = "0:0:0:0";

            if (textarea === "Empty"){
                clearInterval(interval);
                textarea = "Typing"
                border.style.borderColor = "rgb(46, 46, 46)";
            }
            rand();
        }
        function Done () {

            if (textInput.value == mainText.innerHTML){
                clearInterval(interval);
            }
            
        }