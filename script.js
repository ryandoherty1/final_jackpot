el.src.match("images/lemon_slot.PNG")
el.src = "images/orange_slot.PNG";
el.src = "images/cherry_slot.PNG";
document.getElementById('you-win').play();
el.src.match("images/cherry_slot.PNG")
el.src = "images/lemon_slot.PNG";
el.src.match("images/orange_slot.PNG")


function cherry(el){
	a = document.getElementById("slot1");
	b = document.getElementById("slot2");
	c = document.getElementById("slot3");
	a.classList.remove("opaque");
	b.classList.remove("opaque");
	c.classList.remove("opaque");
	if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
	} else if (el.src.match("images/lemon_slot.PNG")){
		el.src = "images/orange_slot.PNG";
	} else if (el.src.match("images/orange_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
	} else {
	}
}

function lemon(el){
	a = document.getElementById("slot1");
	b = document.getElementById("slot2");
	c = document.getElementById("slot3");
	a.classList.remove("opaque");
	b.classList.remove("opaque");
	c.classList.remove("opaque");
	if (el.src.match("images/lemon_slot.PNG")){
		el.src = "images/bar_slot.PNG";
	} else if (el.src.match("images/bar_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
	} else if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
	} else {
	}
}

function orange(el){
	a = document.getElementById("slot1");
	b = document.getElementById("slot2");
	c = document.getElementById("slot3");
	a.classList.remove("opaque");
	b.classList.remove("opaque");
	c.classList.remove("opaque");
	if (el.src.match("images/orange_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
	} else if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/seven_slot.PNG";
	} else if (el.src.match("images/seven_slot.PNG")){
		el.src = "images/slot_machine_icons.jpg";
	} else if (el.src.match("images/slot_machine_icons.jpg")){
		el.src = "images/orange_slot.PNG";
	} else {
	}
}

function fuct() {
	a = document.getElementById("slot1");
	b = document.getElementById("slot2");
	c = document.getElementById("slot3");
	if(a.src.match("images/cherry_slot.PNG") && b.src.match("images/cherry_slot.PNG") && c.src.match("images/cherry_slot.PNG")){
	document.getElementById('you-win').play();
	a.classList.add("opaque");
	b.classList.add("opaque");
	c.classList.add("opaque");
	} else {
	}
}