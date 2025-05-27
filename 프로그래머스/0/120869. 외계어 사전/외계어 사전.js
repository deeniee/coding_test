function solution(spell, dic) {
    const sortedSpell = spell.slice().sort().join('');

    for (let i = 0; i < dic.length; i++) {
        const sortedDic = [...dic[i]].sort().join('');
        if (sortedDic === sortedSpell) {
            return 1;
        }
    }

    return 2;
}