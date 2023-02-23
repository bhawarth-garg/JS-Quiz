const correct_ans= ["A","B","A","B"];

const form= document.querySelector(".quiz-form");

form.addEventListener('submit', e =>{

    e.preventDefault();

    let score=0, c=0;
    const user_ans= [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    user_ans.forEach((ans, ind)=>{

        if(ans===correct_ans[ind])
        {
            score+=1;
        }
        c++;
    });
    console.log(score);

    //After hitting submit button take us to top of  home page.
    scrollTo(0,0);

    const res= document.querySelector(".result");

    res.classList.remove('d-none');
    const ans= (score/c)*100;
    // res.querySelector('span').textContent= `${ans}%`;

    //to increase of value of correctness from 0 tio ans;(animation to score)
    let output=0;
    let timer= setInterval(()=>{
        res.querySelector('span').textContent= `${output}%`;
        if(output==ans)
        {
            //stop set Timer,
            clearInterval(timer);
        }
        else{
            output++;
        }
        // 20 is time in ms in which the value is going to change.
    }, 20);

});