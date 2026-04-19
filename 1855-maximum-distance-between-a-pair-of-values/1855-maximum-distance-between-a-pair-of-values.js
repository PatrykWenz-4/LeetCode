/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = (A, B) => {
    let i, j;

    for (i = 0, j = 1; i < A.length && j < B.length; j++)
        i += A[i] > B[j];

    return j - i - 1;
};