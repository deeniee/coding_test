function solution(dartResult) {
  const parts = dartResult.match(/\d{1,2}[SDT][*#]?/g);
  const scores = [];
  const power = { S: 1, D: 2, T: 3 };

  for (let part of parts) {
    const [_, score, bonus, option] = part.match(/(\d{1,2})([SDT])([*#]?)/);
    let num = Math.pow(Number(score), power[bonus]);

    if (option === '*') {
      num *= 2;
      if (scores.length > 0) scores[scores.length - 1] *= 2;
    } else if (option === '#') {
      num *= -1;
    }

    scores.push(num);
  }

  return scores.reduce((a, b) => a + b, 0);
}
