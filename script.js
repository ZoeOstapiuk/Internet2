window.onload = setUpEvents;

function setUpEvents() {
    if (document.getElementById('get')) document.getElementById('get').onclick = changeToGet;
    var formChooseMethod = document.getElementById('form-choose-method');
    if (formChooseMethod) { 
        formChooseMethod.onsubmit = onSubmitMethod;
        formChooseMethod.onmouseover = arrowToWait;
        formChooseMethod.onmouseleave = waitToArrow;
    }
    if (document.getElementById('post')) document.getElementById('post').onclick = changeToPost;
    if (document.getElementById('program1')) document.getElementById('program1').onclick = updateProgram;
    if (document.getElementById('program2')) document.getElementById('program2').onclick = updateProgram;
    if (document.getElementById('program3')) document.getElementById('program3').onclick = updateProgram;
    if (document.getElementById('input-photo')) document.getElementById('input-photo').onchange = updatePhoto;
    if (document.getElementById('animation-holder')) document.getElementById('animation-holder').onclick = animate;
    if (document.getElementById('personal-info-form')) document.getElementById('personal-info-form').onsubmit = check;
    if (document.getElementById('canvas')) alert('Welcom to home page!');
}

function changeToGet() {
    document.getElementById('form-choose-method').method = 'get';
}

function changeToPost() {
    document.getElementById('form-choose-method').method = 'post';
}

function updateProgram() {
    var name = this.value;
    document.getElementById('form-server-program').action = name;
    document.getElementById('program-name').innerHTML = name;
}

function updatePhoto() {
    var src = window.URL.createObjectURL(this.files[0]);
    document.getElementById('image-holder').src = src
    var win = window.open("", "Title", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=500, height=500, top="+(screen.height/2-250)+", left="+(screen.width/2-250));
    win.document.body.innerHTML = `<img width=500 height=500 src=${src} />`;
}

var timerId = 0;
var imageIndex = 0;
function animate() {
    var images = ['Images/1.jpeg', 'Images/2.jpeg', 'Images/3.jpeg'];
    var img = document.getElementById('animation-holder');
    if (img.title == "Holding...") {
        img.title = "Animating!";
        timerId = setInterval(function() {
            if (imageIndex >= images.length) {
                imageIndex = 0;
            }
            img.src = images[imageIndex];
            imageIndex++;
        }, 500);
    } else {
        img.title = "Holding...";
        clearTimeout(timerId);
    }
}

function onSubmitMethod() {
    alert(`You have chosen ${this.method.value}!`);
}

function arrowToWait() {
    this.style.cursor = 'wait';
}

function waitToArrow() {
    this.style.cursor = 'default';
} 

function check(event) {
    if (document.getElementById("email").checkValidity() == false) {
        event.preventDefault();
    } 
}