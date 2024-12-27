let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let pluse = document.getElementById("pluse")
let mine = document.getElementById("mine")
let and = document.getElementById("and")
let or = document.getElementById("or")
let equal = document.getElementById("equal")
let clear = document.getElementById("clear")
let answear = document.getElementById("answear")
let save = document.getElementById("save-number")
let active = false
let activepluse = false
let active_mine = false
let active_slash = false
let active_and = false
let isnull = false
let contain1 = ""
let contain2 = ""
answear.innerText = 0
save.innerText = 0

// ____________________________________________
clear.addEventListener("click", function() {
    answear.innerText = 0
    save.innerText = 0
    active_and = false
    active_slash = false
    active_mine = false
    contain1 = ""
    contain2 = ""
    activepluse = false
    active = false

})

one.addEventListener("click", function() {
    if (!active) {
        contain1 += 1
        answear.innerText = contain1
    } else {
        save.innerText = contain1
        contain2 += 1
        answear.innerText = contain2
    }
})
two.addEventListener("click", function() {
    if (!active) {
        contain1 += 2
        answear.innerText = contain1
    } else {
        save.innerText = contain1
        contain2 += 2
        answear.innerText = contain2
    }
})
three.addEventListener("click", function() {
    if (!active) {
        contain1 += 3
        answear.innerText = contain1
    } else {
        save.innerText = contain1
        contain2 += 3
        answear.innerText = contain2
    }

})
four.addEventListener("click", function() {
    if (!active) {
        contain1 += 4
        answear.innerText = contain1
    } else {
        save.innerText = contain1
        contain2 += 4
        answear.innerText = contain2
    }

})
five.addEventListener("click", function() {
    if (!active) {
        contain1 += 5
        answear.innerText = contain1
    } else {
        save.innerText = contain1
        contain2 += 5
        answear.innerText = contain2
    }

})
six.addEventListener("click", function() {
    if (!active) {
        contain1 += 6
        answear.innerText = contain1
    } else {
        save.innerText = contain1
        contain2 += 6
        answear.innerText = contain2
    }

})
seven.addEventListener("click", function() {
    if (!active) {
        contain1 += 7
        answear.innerText = contain1
    } else {
        save.innerText = contain1
        contain2 += 7
        answear.innerText = contain2
    }

})
eight.addEventListener("click", function() {
    if (!active) {
        contain1 += 8
        answear.innerText = contain1
    } else {
        save.innerText = contain1
        contain2 += 8
        answear.innerText = contain2
    }

})
nine.addEventListener("click", function() {
    if (!active) {
        contain1 += 9
        answear.innerText = contain1
    } else {
        save.innerText = contain1
        contain2 += 9
        answear.innerText = contain2
    }

})
zero.addEventListener("click", function() {
    if (!active) {
        contain1 += 0
        answear.innerText = contain1
    } else {
        save.innerText = contain1
        contain2 += 0
        answear.innerText = contain2
    }

})

pluse.addEventListener("click", function() {
    active = true
    activepluse = true
    answear.innerText += "+"

})
mine.addEventListener("click", function() {
    active = true
    active_mine = true
    answear.innerText += "-"
})
or.addEventListener("click", function() {
    active = true
    active_slash = true
    answear.innerText += "/"
})
and.addEventListener("click", function() {
    active = true
    active_and = true
    answear.innerText += "*"
})
equal.addEventListener("click", function() {
    if (activepluse) {
        answear.innerText = Number(contain2) + Number(contain1)
        save.innerText += "+" + contain2
    }
    if (active_and) {
        answear.innerText = Number(contain2) * Number(contain1)
        save.innerText += "*" + contain2
    }
    if (active_slash) {
        answear.innerText = Number(contain1) / Number(contain2)
        save.innerText += "/" + contain2
    }
    if (active_mine) {
        answear.innerText = Number(contain1) - Number(contain2)
        save.innerText += "-" + contain2
    }
})
