let student1 = "Tatyana Pozdeeva";
let modIntro = 33;
let modGit = 100;
let modJs = 55;
let averageValue = (modIntro + modGit + modJs) / 3;
averageValue = Math.round(averageValue);

//Метод slice вырезает и возвращает указанную часть массива.
//Первым параметром указывается номер элемента массива, с которого начинается вырезание, а вторым параметром - номер элемента, на котором закончится вырезание (при этом элемент с этим номером не включится в вырезанную часть).

let firstLetterStudent1 = student1.slice(0, 1);

console.log(
  `Средний балл по трём модулям студента ${firstLetterStudent1}: ` +
    averageValue
);
