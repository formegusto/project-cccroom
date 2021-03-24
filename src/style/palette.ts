/*
    https://color.adobe.com/ko/create/color-wheel

    [0] : main ccc like color,
    [1-4] : light ~ dark,
    [5-8] : 유사
    [9-12] : 보색
*/

const yellow: string[] = [
    "#FCEEA8",
    // light ~ dark
    "#F0E3A1",
    "#E3D698",
    "#C9BE87",
    "#635E43",
    "#FCBD51",

    // 유사
    "#F2FE9D",
    "#E6E08E",
    "#E6CE8E",
    "#FEDA9D",

    // 보색
    "#FCEA90",
    "#C2FCDB",
    "#9490FC",
    "#FCA39D",
];

const green: string[] = [
    "#CEDFD2",
    "#DDF0E1",
    "#D1E3D5",
    "#B9C9BD",
    "#5B635D",

    "#CCEBE4",
    "#D5F5E5",
    "#D7F5D5",
    "#D9EBCC",

    "#B6DEBF",
    "#B6BBDE",
    "#DEB6B9",
    "#DED7C1",
];

const ivory: string[] = [
    "#F3F0E8",
    "#F0EDE4",
    "#E3E0D8",
    "#C9C7BF",
    "#63625E",

    "#F9F8E0",
    "#DBD8C5",
    "#DBD3C5",
    "#F9EDE0",

    "#F2E9CE",
    "#CEF2D3",
    "#CED6F2",
    "#F2DAE0",
];

type rtnType = {
    [key: string]: string[];
}

const Palette: rtnType = {
    ivory,
    yellow,
    green,
}

export default Palette