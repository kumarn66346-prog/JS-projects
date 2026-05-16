const body = document.querySelector('body');

body.addEventListener('click',(e)=>{
    const circleelement = document.createElement('div');

    circleelement.classList.add('circle');
    const color =["red", 'blue', 'orange', 'green' , 'pink', 'purple'];

    circleelement.style.backgroundColor = color[Math.floor(Math.random()*6)];

    circleelement.style.top= `${e.clientY-25}px`;
    circleelement.style.left= `${e.clientX-25}px`;

    circleelement.textContent= 'Hii'
    
    body.append(circleelement);
    setTimeout(()=>{
        circleelement.remove();

    },5000)
})