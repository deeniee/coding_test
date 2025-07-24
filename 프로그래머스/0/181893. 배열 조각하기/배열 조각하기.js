function solution(arr, query) {
    let copied = [...arr];

    query.forEach((q, i) => {
        if (i % 2 === 0) {
            copied = copied.slice(0, q + 1);
        } else {
            copied = copied.slice(q);
        }
    });

    return copied;
}