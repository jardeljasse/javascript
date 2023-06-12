const elChooseNumber = document.getElementsByTagName("div")[0]

const randomNumbers = (max) => {
    const nr = Math.floor(Math.random() * max) 

    return nr
}
const escolher = 0
//document.write(elChooseNumber.textContent = randomNumbers(2, 0))

if (randomNumbers() === escolher) {
    document.write('YOU WON, You choose number '.concat(escolher, "<br />"))
} else {
    document.write('<br />YOU LOST, You choose number '.concat(escolher))
}

document.write("<br />The random number is > "+randomNumbers(2))
