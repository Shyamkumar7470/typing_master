
 //  let typing_speed = (actualWords / totalTimeTaken) * 60;


 // step - 1
 const typing_ground = document.querySelector('#textarea');
 const btn = document.querySelector('#btn');
 const score = document.querySelector('#score');
 const show_sentence = document.querySelector('#show-sentence');

  let startTime, endTime , totalTime;

    const sentences = [ 'The quick brown fox jumps over the lazy dog 1',
                            'The quick brown fox jumps over the lazy dog 2 ',
                                'The quick brown fox jumps over the lazy dog 3']
    
     // step - 5

     const calculateTypingSpeed = (time_taken)=> {
        let totalWords = typing_ground.value.trim();
        let acutalWords = totalWords === '' ? 0 : totalWords.split(" ").length;

        if(acutalWords !== 0){
            let typing_speed = (acutalWords / time_taken) * 60;

            typing_speed = Math.round(typing_speed);
            score.innerHTML = `Your Typing Speed is ${typing_speed} words per minute & You wrote ${acutalWords} words & time taken ${time_taken} sec.`;
        }
     }

    // step - 3
   const  startTyping = ()=> {
        let randomNumber = Math.floor(Math.random() * sentences.length);
      //   console.log(randomNumber);
        show_sentence.innerHTML =sentences[randomNumber];

        let date = new Date();
        startTime = date.getTime();
         
        btn.textContent = "Done"
    }
 
    // step - 4
  const endTypingTest = ()=>{
          btn.textContent = "Start";

          let date = new Date();
          endTime = date.getTime();
           
          totalTime = (endTime - startTime) / 1000;
        
        //  console.log(totalTime);
        calculateTypingSpeed(totalTime);

        show_sentence.innerHTML = "";

        typing_ground.value = "";

    }
   
    // ste -2
  btn.addEventListener('click' , ()=>{
     switch (btn.innerHTML.toLowerCase()) {
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;

            case "done":
                typing_ground.setAttribute('disabled' , 'true');
                endTypingTest();
                break;
     }
  })