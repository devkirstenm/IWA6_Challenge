const primaryPhone = 'O748105141' // contains letter o, not number 0 
const secondaryPhone = '0219131568' // contains only numbers

// Only change below this line

const primaryValid = typeof primaryPhone == 'string' && !isNaN(primaryPhone) 
const secondaryValid = typeof secondaryPhone == 'string' && !isNaN(secondaryPhone)

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )

// !isNan checks if primaryPhone & secondaryPhone contains only numbers
    // if they do = its 'true' 
    // if not = its 'false'

// primaryPhone contains a letter and numbers = FALSE
// secondaryPhone contains only numbers = so it is TRUE
