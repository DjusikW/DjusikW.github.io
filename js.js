var sendbutton = document.getElementById('button');
sendbutton.addEventListener('click', birth);

function birth() {
    alert('С Днем народження Киця! :D');
    choose();
    function choose() {
        var name = prompt('Для Киці є декілька подарунків, обери один з них :) (обирай цифрами 1-2-3)');
        if (name == '1') {
            alert('Ти обрала перший), зараз котик його принесе.');
            alert('А поки ты чекаеш, можеш прочитати віршик :D');
            var virch = document.getElementById('main-button')
            virch.innerHTML = '<img style="gift" style="opacity: 0.8;" src="Picture/virch.png">';
            setTimeout(next1, 70000);
        } else if (name == '2') {
            alert('Ти обрала другий), зараз котик його принесе.');
            alert('А поки ты чекаеш, можеш прочитати віршик :D');
            var virch = document.getElementById('main-button')
            virch.innerHTML = '<img style="gift" style="opacity: 0.8;" src="Picture/virch.png">';
            setTimeout(next2, 70000);
        } else if (name == '3') {
            alert('Ти обрала третій), зараз він з`явиться на єкрані :D');
            var samokat = document.getElementById('main-button');
            samokat.innerHTML = '<img style="sam" style="opacity: 1;" src="Picture/sam.png">';
            setTimeout(next3, 60000);
        }
    }
    function next1() {
        var name = prompt('Один подарунок вже отримано, залишилися ще два (2-3)');
        if (name == '2') {
            alert('Ти обрала другий), зараз котик його принесе.');
            setTimeout(last2, 30000);

        } else if (name == '3') {
            alert('Ти обрала третій), зараз він з`явиться на єкрані :D');
            var samokat = document.getElementById('main-button');
            samokat.innerHTML = '<img style="sam" style="opacity: 1;" src="Picture/sam.png">';
            setTimeout(last3, 60000);

        }
    }
    function next2() {
        var name = prompt('Один подарунок вже отримано, залишилися ще два (1-3)');
        if (name == '1') {
            alert('Ти обрала перший), зараз котик його принесе.');
            setTimeout(last2, 30000);

        } else if (name == '3') {
            alert('Ти обрала третій), зараз він з`явиться на єкрані :D');
            var samokat = document.getElementById('main-button');
            samokat.innerHTML = '<img style="gift" style="opacity: 1;" src="Picture/sam.png">';
            setTimeout(last3, 6000);

        }
    }
    function next3() {
        var name = prompt('Один подарунок вже отримано, залишилися ще два (1-2)');
        if (name == '1') {
            alert('Ти обрала перший), зараз котик його принесе.');
            alert('А поки ты чекаеш, можеш прочитати віршик :D');
            var virch = document.getElementById('main-button')
            virch.innerHTML = '<img style="gift" style="opacity: 0.8;" src="Picture/virch.png">';
            setTimeout(last3, 70000);

        } else if (name == '2') {
            alert('Ти обрала другий), зараз котик його принесе.');
            alert('А поки ты чекаеш, можеш прочитати віршик :D');
            var virch = document.getElementById('main-button')
            virch.innerHTML = '<img style="gift" style="opacity: 0.8;" src="Picture/virch.png">';
            setTimeout(last3, 70000);

        }
    }
    function last2() {
        alert('Залишився останній подарунок)');
        var samokat = document.getElementById('main-button');
            samokat.innerHTML = '<img style="sam" style="opacity: 1;" src="Picture/sam.png">';
    }
    function last3() {
        alert('Залишився останній подарунок)');
        alert('зараз котик його принесе');
    }
}



//function tru2() {
   // var two = prompt('maybe')
  //  if (two == 'test3') {
       // alert('true2')

   // } else {
     //   alert('none');
      //  tru2();
  //  }
//}



//var Cat = document.getElementById("testCat");
// Cat.innerHTML = "<img style="gift" id=testCats src=''>";
//function Text() {
    //var name = prompt('What say?');
    //if (name == 'test1') {
      //  alert('try me')
        //tru();
    //} else {
       // alert('Null');
     //   Text();
    //}
//