function solution(nums) {
    // 중복제거 = 서로 다른 종류의 수
    const kinds = new Set(nums).size;
    // 선택 가능한 수
    const maxPick = nums.length / 2;
    // 둘 중 작은 값 반환
    return Math.min(kinds, maxPick);
}