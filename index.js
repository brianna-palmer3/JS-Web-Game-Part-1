function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
}

function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
}

//the function new inventory helps us create the characters and items to appear on the web game without making our code more confusing. It helps to condense our code.

newInventory()
newImage('assets/green-character.gif', 100, 250)
newImage('assets/tree.png', 200, 450)
newImage('assets/pillar.png', 350, 250)
newImage('assets/pine-tree.png', 450, 350)
newImage('assets/crate.png', 150, 350)
newImage('assets/well.png', 500, 575)

newItem('assets/sword.png', 500, 555)
newItem('assets/shield.png', 165, 335)
newItem('assets/staff.png', 600, 250)

// canvas element
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// make it 2d
const ctx = canvas.getContext('2d');

// background images
const skyImg = new Image();
skyImg.src = 'assets/sky.png';

const grassImg = new Image();
grassImg.src = 'assets/grass.png';

//number of tiles horizontally and vertically
const tilesX = Math.ceil(canvas.width / 100);
const tilesY = Math.ceil(canvas.height / 100);

//sky tiles
for (let y = 0; y < tilesY; y++) {
  for (let x = 0; x < tilesX; x++) {
    ctx.drawImage(skyImg, x * 100, y * 100, 100, 100);
  }
}

//grass tiles
for (let y = 0; y < tilesY; y++) {
  for (let x = 0; x < tilesX; x++) {
    ctx.drawImage(grassImg, x * 100, canvas.height - 100 - y * 100, 100, 100);
  }
}
