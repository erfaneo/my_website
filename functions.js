//ATF animation 


// First Section h2 change
var h2s = document.querySelectorAll("#title h2")
var i = 0
setInterval(() => {
	h2s.forEach(itmes => {
		itmes.classList.remove("h2_change")
	})
	h2s[i].nextElementSibling.classList.add("h2_change")
	i ++
	if (i >= h2s.length - 1) {
		i = 0
	}
}, 1500);

//Burger Button
var  btn = document.querySelector(".burger_btn")
var nav = document.querySelector("#nav_cntr")
var lines = document.querySelectorAll(".burger_lines")
var index = true
btn.addEventListener("click", ()=> {
	if (index) {
		nav.style.transform = "translateX(0)"
		lines[0].style.transform = "rotate(45deg) translateY(0)"
		lines[1].style.transform = "rotate(-405deg) translateY(0)"
		lines[2].style.transform = "translateY(2rem)"
		index = false
	}
	else {
		nav.style.transform = "translateX(-110%)"		
		lines[1].style.transform = "rotate(0) translateY(10px)"
		lines[2].style.transform = "translateY(10)"
		lines[0].style.transform = "rotate(0)"
		index = true
	}
})

//NavOne change
var nav_a = document.querySelectorAll("#navOne a")
var underlines = document.querySelectorAll(".underline")
var section = document.querySelectorAll("section")
var div = document.querySelectorAll(".underline")
window.addEventListener("scroll", () => {
	section.forEach((items, i) => {
		if (items.offsetTop < window.pageYOffset +300) {
			nav_a.forEach( items => {
				items.classList.remove("navOne_change")
			})
			div.forEach(items => {
				items.classList.remove("underline_change")
			})
			nav_a[i].classList.add("navOne_change")
			div[i].classList.add("underline_change")
		}
	})
})

// Responsive Button
var desktop_btn = document.querySelector("#desktop_btn") 
var mob_btn = document.querySelector("#mob_btn") 
var device = document.querySelector("#device")
var box1 = document.querySelector("#box1")
var box2 = document.querySelector("#box2")
var box3 = document.querySelector("#box3")
var box4 = document.querySelector("#box4")
var box5 = document.querySelector("#box5")
var box6 = document.querySelector("#box6")
var box_cntr = document.querySelector("#box_cntr")
var cam = document.querySelector("#cam")
mob_btn.addEventListener("click", ()=> {
	device.classList.add("responsive")
	 box3.style.flexFlow = " column nowrap"
	 box3.style.width = "100%"
	 box4.style.width = "100%"
	 box5.style.width = "100%"
	 box_cntr.style.flexFlow = "column nowrap"
	 box2.style.width = "100%"
	 box2.style.height = "20%"
	 cam.style.top = "101.5%"
	 cam.style.borderRadius = "3px"

})
desktop_btn.addEventListener("click", () => {
	device.classList.remove("responsive")
	box3.style.flexFlow = " row wrap"
	box5.style.width = "50%"
	box4.style.width = "50%"
	box5.style.width = "50%"
	box5.style.width = "50%"
	box_cntr.style.flexFlow = "row nowrap"
	box2.style.width = "20%"
	box2.style.height = "100%"
	cam.style.top = "-15px"
	cam.style.borderRadius = "100%"
})

//cards
var card_btn = document.querySelectorAll(".card_btn")
var cards_content = document.querySelectorAll(".cards_content")
var p = document.querySelectorAll(".cards_content p")
card_btn.forEach((items, i) => {
	var btn_index = 1
	items.addEventListener("click", ()=> {
		if (btn_index == 1){
			items.style.transform = "rotate(315deg)"
			p[i].style.transform = "scale(1)"
			p[i].style.transitionDelay = ".3s"
			cards_content[i].style.transform = "scale(1)"
			btn_index = 0
		}
		else {
			items.style.transform = "rotate(0)"
			p[i].style.transform = "scale(0)"
			cards_content[i].style.transform = "scale(0)"
			p[i].style.transitionDelay = "0s"
			cards_content[i].style.transitionDelay = ".2s"
			btn_index = 1
		}
	}
)})

var alrt = document.querySelector("#alert")
var alrt_btn = document.querySelector("#alrt_btn")
setTimeout(() => {
	alrt.style.transform = "scale(1)"
}, 1500);	

alrt_btn.addEventListener("click", () => {
	alrt.style.scale = "0"
})
