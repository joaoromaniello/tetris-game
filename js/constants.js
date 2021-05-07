const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
const size = 29;

//ALL PIECES THAT COITAINS MULTIPLE DECLARITIONS (J1,J2 etc...)
//ARE JUST SIMPLE ROTATIONS OF THE MAIN ONE (J)

const I = {
    format: [
        1, 1, 1, 1,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
    ],
    color: "cyan"
}

const I2 = {
    format: [
        0, 0, 1, 0,
        0, 0, 1, 0,
        0, 0, 1, 0,
        0, 0, 1, 0
    ],
    color: "cyan"
}

const J = {
    format: [
        1, 0, 0, 0,
        1, 1, 1, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
    ],
    color: "blue"
}
const J2 = {
    format: [
        1, 1, 0, 0,
        1, 0, 0, 0,
        1, 0, 0, 0,
        0, 0, 0, 0
    ],
    color: "blue"
}

const J3 = {
    format: [
        1, 1, 1, 0,
        0, 0, 1, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
    ],
    color: "blue"
}

const J4 = {
    format: [
        0, 0, 1, 0,
        0, 0, 1, 0,
        0, 1, 1, 0,
        0, 0, 0, 0
    ],
    color: "blue"
}



const O = {
    format: [
        1, 1, 0, 0,
        1, 1, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
    ],
    color: "yellow"
}

const S = {
    format: [
        0, 1, 1, 0,
        1, 1, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
    ],
    color: "green"
}

const S1 = {
    format: [
        1, 0, 0, 0,
        1, 1, 0, 0,
        0, 1, 0, 0,
        0, 0, 0, 0
    ],
    color: "green"
}



const T = {
    format: [
        0, 1, 0, 0,
        1, 1, 1, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
    ],
    color: "purple"
}

const T1 = {
    format: [
        1, 0, 0, 0,
        1, 1, 0, 0,
        1, 0, 0, 0,
        0, 0, 0, 0
    ],
    color: "purple"
}

const T2 = {
    format: [
        1, 1, 1, 0,
        0, 1, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
    ],
    color: "purple"
}

const T3 = {
    format: [
        0, 0, 1, 0,
        0, 1, 1, 0,
        0, 0, 1, 0,
        0, 0, 0, 0
    ],
    color: "purple"
}



const PIECES = [I, I2 , J , J2, J3, J4 , O, S, S1,T, T1, T2, T3];