const images = [
  './images/bates-motel.png',
  './images/beast-mask.png',
  './images/chucky.png',
  './images/white-skull.png',
  './images/creepy-clown.png',
  './images/dolls.png',
  './images/dark-mansion.png',
  './images/freddy-kreuger.png',
  './images/haunted-house.png',
  './images/knife-man.png',
  './images/pennywise.png',
  './images/scream.png',
  './images/skull-in-ground.png',
  './images/white-mask.png',
  './images/halloween-michael.png'
]

let i = 0

function placeImage(x, y){

  const nextImage = images[i]

  const img = document.createElement('img')
  img.setAttribute("src", nextImage)
  img.style.left = x + 'px'
  img.style.top = y + 'px'
  img.style.transform = "translate(-50%, -50%) rotate(" + (Math.random() * 30 - 10) + "deg)"

  document.body.appendChild(img)

  i = i + 1

  if(i >= images.length) {
    i = 0
  }

}

document.addEventListener("click", function (event){
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})

document.addEventListener('touchend', function(event){
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})
