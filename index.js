
	let firstNameEl = document.getElementById('first-name');
	console.log(firstNameEl.className);

    let secondNameEl = document.getElementById('second-name');
    console.log(secondNameEl.value);

    let lastNameEl = document.getElementById('last-name');
    console.log(lastNameEl.value);

    let firstCityEl = document.getElementById('first-city');
    console.log(firstCityEl.innerHTML);

    let secondCityEl = document.getElementById('second-city');
    console.log(secondCityEl.innerHTML);

    let hobbyEl = document.getElementById('hobby');
    console.log(hobbyEl.innerHTML);
    
    let avatarWrapperEl = document.getElementById('avatar-wrapper');
    
    avatarWrapperEl.innerHTML = "<ul id='list'><li>1</li></ul>";

    let avatarEl = document.getElementById('avatarId');
    avatarEl.src = "";
    avatarEl.alt ="i am avatar"; 

    let listId='list';
    let numberList = document.getElementById('list');
    window.alert(numberList.innerHTML);
    

    firstNameEl.value = 'Ronald Mac';
    firstNameEl.value = 'Victor';
    ///lastNameEl.setAttribute('value','kamasutra');
    lastNameEl.className ='error-input last-name-input ';

    

