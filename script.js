const container = document.querySelector(".container");
const start_page = document.querySelector(".start-page");
const movies_container = document.querySelector(".movies-container");
const text = document.querySelector('.text');
const movieList = document.querySelectorAll(".movie");
movielist = Array.from(movieList);
let excuse = document.querySelector(".excuse");

const start = () =>{
	container.style.display = 'block';
	start_page.style.display = "none";
}


//Make filter function returns list of all items that been searched for;
const filterfun = () =>{
	let filtered = movielist.filter(item =>{
		return item.innerText.toLowerCase().includes(text.value.toLowerCase());
	})
	return filtered;}



//hide the items that not found in the search; 

const hide = ()=>{
	if (text.value !== '') {
		movielist.map(item =>{
   			 if(!(filterfun().includes(item))){
       		 item.style.display = 'none';
   		 } else{
   		 	item.style.display = 'block'
   		 }
   		 return item;
   		})
	}
	else{
		movielist.map(item =>{
			item.style.display = 'block';
		})
	}
}

const empty = () =>{
	if (movies_container.offsetHeight < 560) {
		excuse.style.display = 'block';
	}
	else{
		excuse.style.display = 'none';
	}
}

//search for the items by running filter and hide the remain items;
const search = ()=>{
	filterfun();
	hide();
	empty();
	
}



