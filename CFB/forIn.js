

const nomes = ['jardel', 'jeremias', 'jasse', 21]

nomes.map((el, i)=>{

    document.write(el+' Position: '+ i +'<br />')
})

const div = document.querySelector('.nickname')
const newElement = document.createElement('div')
const textNewElement =  document.createTextNode('Mandlate')
newElement.appendChild(textNewElement)
div.appendChild(newElement)


for(i in div){
    console.log('j')
}
/*for(let i = 0; i < nomes.length; i +=2){
    document.write(nomes[i])
}

for(i in nomes){ 
    console.log(nomes[i])
}

for(i of nomes){
    console.log(i)
}*/