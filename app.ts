function logName(name: string) {
  console.log(name);
}

logName("younghun");

let student = {
  name: "john",
  course: "typescript",
  score: 100,
  grade: function () {
    console.log("A");
  },
};

student.name = "lee";
student.score = 200;

// 변수의 데이터 타입 명시
let stdId: number = 1111;
let stdName: string = "lee";
let age: number = 20;
let gender: string = "male";
let course: string = "Typescript";
let complete: boolean = false;
/*
컴파일 에러, syntax 에러(문법 오류)
let stdId: number = '1111';
*/

//함수의 데이터 타입 명시(매개변수, 리턴타입)
function Plus(a: number, b: number): void {
  // return a + b;
}

function getInfo(id: number): {
  stdId: number;
  stdName: string;
  age: number;
  gender: string;
  course: string;
  complete: boolean;
} {
    return null;
}
