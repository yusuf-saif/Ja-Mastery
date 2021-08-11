//GET ELEMENT BY ID
//console.log(document.getElementById0('header-title'));
var headerTitle = document.getElementById('header-title')
var header = document.getElementById('main-header')
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye';
headerTitle.innerHTML = '<h2> WELCOME</h2>';
header.style.borderBottom = '3px solid #00000';

//GET ELMENTS BY CLASS NAME:
// var items = document.getElementsByClassName('list-group-item');
// console.log(items[1]);
// console.log(items[0],[2]);
// items[1].style.color = 'blue';
// items[2].style.color = '#6F9F75';
// items[0].style.fontWeight = 'bold';
// items[3].style.border = '3px solid #000000';


// for (var i =0; i < items.length; i++){
//       items[i].style.backgroundColor = '#867eb5';
// }

// //GET ELMENT BY TAGNAME
// var li =document.getElementsByTagName('li');
// console.log(li);
// console.log(li[0],[3]);

// for (var i = 5 ; i < li.length; i++){
//       items[i].style.backgroundColor = '#867eb5';
// }


//QUERRY SELECTOR:

// var header = document.querySelector('#main-header');
// header.style.borderBottom = '5px solid #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = '#4CD7D0';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = '#b44b57';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = '#7836cf';


//QUERY SELECtOR ALL;
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var add = document.querySelectorAll('li:nth-child(add)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(i = 0; i < add.length; i++){
//       add[i].style.backgroundColor = '#82c936'; 
//       even[i].style.backgroundColor = '#82c946';                                                     
// }




      //TRANSVERSING THE DOM//
      var itemList = document.querySelector('#items');
      //PARENT NODE PROPERZTIES
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#c4ebff'; 
//console.log(itemList.parentNode.parentNode);
//console.log(itemList.parentNode.parentNode.parentNode);

      //PARENT ELEMENT
     // console.log(itemList.parentElement);
     // itemList.parentElement.style.backgroundColor = '#2ed1b3'; 
     // console.log(itemList.parentElement.parentNode);
     // console.log(itemList.parentNode.parentNode.parentElement);

     //CHILD ELEMENT
     console.log(itemList.childNodes);
     console.log(itemList.children);
     console.log(itemList.children[1],[0]);
     /* var it = itemList.children[0][2];
      it.style.backgroundColor = '#64c33c';*/

      itemList.children[0].style.color = '#64c33c';

      //FIRSTCHILD;
      console.log(itemList.firstChild);
      //FIRSTELEMENTCHILD;
      console.log(itemList.firstElementChild);
      itemList.firstElementChild.textContent = 'Say Hello';
      itemList.lastElementChild.textContent = 'Say Welcome';

      //NEXTSIBLINGS:
      console.log(itemList.nextSibling);
      console.log(itemList.nextElementSibling);

      //PREVIOUS SIBLINGS
      console.log(itemList.previousSibling);
      //PREVIOUS ELEMENT SIBLING 
      console.log(itemList.previousElementSibling);
      itemList.previousElementSibling.style.color = '#402712';

      //CREATING ELEMNTS
      // CREATE A DIV
       let newDiv = document.createElement('div');
       //creating a class for the div
            newDiv.className = 'Hello';
      //creating a ID 
            newDiv.id = 'hi';
      //adding attribute
            newDiv.setAttribute = ('title', 'helloyou');
      //ADDING CONTENT
           // newDiv.textContent = 'Hello';

           //create TextNode
           let newDivText = document.createTextNode('Hello World');
           //Append TO Div
           newDiv.appendChild(newDivText);

           //putting it in the DOM
           let container = document.querySelector('header .container');
           var h1 = document.querySelector('header  h1');

            newDiv.style.fontSize = '40px';
            newDiv.style.color = '#746798';
       console.log(newDiv);

       container.insertBefore(newDiv, h1);
