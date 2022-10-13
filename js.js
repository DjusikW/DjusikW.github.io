var sendbutton = document.getElementById('button');
sendbutton.addEventListener('click', birth);

function birth() {
    var picture = document.getElementById("main-button");
    picture.innerHTML = '<img id="meaw" src="https://3dnews.ru/assets/external/illustrations/2021/03/10/1034545/sm.Gothic_Retrospective_1.800.jpeg">';
    window.setTimeout(Text, 2000)
    function Text() {
        var name = prompt('What say?');
        if (name == 'test1') {
            alert('try me')
            tru();
        } else {
            alert('Null');
            Text();
        }
    }
}
function tru() {
    var one = prompt('So');
    if (one == 'test2') {
        alert('try');
        tru2();
        
    } else {
        alert('null2');
        tru();
    }
 }
function tru2() {
    var two = prompt('maybe')
    if (two == 'test3') {
        alert('true2')

    } else {
        alert('none');
        tru2();
    }
}

var test = document.getElementById('testimg')
test.addEventListener('mousemove', fun)

function fun() {
    test.innerHTML = '<img>';
}

//var Cat = document.getElementById("testCat");
           // Cat.innerHTML = "<img id=testCats src=''>";