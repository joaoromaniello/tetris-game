const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
const size = 29;

const I = {
    format: [
        1, 1, 1, 1,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
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

const L = {
    format: [
        0, 0, 1, 0,
        1, 1, 1, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
    ],
    color: "orange"
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

const T = {
    format: [
        0, 1, 0, 0,
        1, 1, 1, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
    ],
    color: "purple"
}

const Z = {
    format: [
        1, 1, 0, 0,
        0, 1, 1, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
    ],
    color: "red"
}

const PIECES = [I, J, L, O, S, T, Z];