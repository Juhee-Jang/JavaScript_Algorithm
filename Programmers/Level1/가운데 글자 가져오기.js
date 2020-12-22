function solution(s) {
  var answer = "";
  const word = s.split("");
  const centerNum = Math.floor(word.length / 2);

  word.length % 2 === 0
    ? (answer = word[centerNum - 1] + word[centerNum])
    : (answer = word[centerNum]);
  return answer;
}

solution("abcde");
