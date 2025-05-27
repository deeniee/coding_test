function solution(dots) {
    const x = dots.map(dot => dot[0]);
    const y = dots.map(dot => dot[1]);
    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}