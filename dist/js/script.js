const team = document.querySelector(".team");

new Sortable(team, {
    animation: 450
});

// Toggle Switch

let toggleBtn = document.querySelector('#switch');

toggleBtn.addEventListener('change', function() {
    if(this.checked) {
        transition();
        document.documentElement.setAttribute("data-theme", "dark");
    }
    else {
        transition();
        document.documentElement.setAttribute("data-theme", "light");
    }
});

let transition = ()=> {
    document.documentElement.classList.add('transition');
    window.setTimeout(()=> {
        document.documentElement.classList.remove('transition');
    }, 800);
}