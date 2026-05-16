const form = document.querySelector('form');

const answer = {
    q1:"Sachin tendulkar",
    q2:"West indies",
    q3:"sachin tendulkar",
    q4:'264',
    q5:"Muttiah murlitharan"
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const data = new FormData(form);
    let finalscore = 0;

    for (let [name,value] of data.entries()){
        if(answer[name]==value)
            finalscore++

    }

    document.getElementById("result").textContent = `your score is ${finalscore} out of 5 `;

    form.reset();
    
})