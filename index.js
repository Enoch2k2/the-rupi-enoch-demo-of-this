// this is a lot like self
// this is a reference keyword that represents something
// unlike self, it can represent more then just an instance or class

const person = {
  name: "Sarah",
  age: 30,
  description: () => {
    console.log('this', this);
  }
}


function clicked() {
  console.log('clicked', this);

  deleteDiv.call(this.parentNode);
}

function deleteDiv() {
  this.remove()
}

document.querySelector('h1').addEventListener('click', clicked);