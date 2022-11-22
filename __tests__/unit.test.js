// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber

test('isPhoneNumber passes a number', () => {
    expect(functions.isPhoneNumber('923-234-4535')).toBe(true);
})

test('isPhoneNumber passes a number', () => {
    expect(functions.isPhoneNumber('923234-4535')).toBe(true);
})

test('isPhoneNumber fails an invalid number', () => {
    expect(functions.isPhoneNumber('1234242423')).toBe(false);
});

test('isPhoneNumber fails an invalid number', () => {
    expect(functions.isPhoneNumber('123 424 2423')).toBe(false);
});


//isEmail
test('isEmail passes an email', () => {
    expect(functions.isEmail('geegee@hotmail.com')).toBe(true);
});

test('isEmail passes an email', () => {
    expect(functions.isEmail('toptop@coocoo.co')).toBe(true);
});

test('isEmail fails an invalid email', () => {
    expect(functions.isEmail('www.google.com')).toBe(false);
});

test('isEmail fails an invalid email', () => {
    expect(functions.isEmail('tomhanks@wagawagea.co.uk')).toBe(false);
});

//isStrongPassword
test('password is strong', () => {
    expect(functions.isStrongPassword('took')).toBe(true);
});

test('password is strong', () => {
    expect(functions.isStrongPassword('asfsd123_')).toBe(true);
})

test('invalid password', () => {
    expect(functions.isStrongPassword('12312_sdafd;')).toBe(false);
});

test('invalid password', () => {
    expect(functions.isStrongPassword('sd')).toBe(false);
})


//isDate
test('isDate is valid', () => {
    expect(functions.isDate('12/02/2002')).toBe(true);
});

test('isDate is valid', () => {
    expect(functions.isDate('01/0/0001')).toBe(true);
});


test('isDate is invalid', () => {
    expect(functions.isDate('1/1/11111')).toBe(false);
});

test('isDate is invalid', () => {
    expect(functions.isDate('11-3-2011')).toBe(false);
});


//isHexColor
test('hexcolor valid', () => {
    expect(functions.isHexColor('AF3')).toBe(true);
});

test('hexcolor valid', () => {
    expect(functions.isHexColor('Dc8')).toBe(true);
});

test('hexcolor invalid', () => {
    expect(functions.isHexColor('Dg8')).toBe(false);
});

test('hexcolor invalid', () => {
    expect(functions.isHexColor('9k1')).toBe(false);
});

