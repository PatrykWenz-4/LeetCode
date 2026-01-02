func repeatedNTimes(nums []int) int {
    seen := make(map[int]bool)

        for _,i := range nums{
            if seen[i]{
                return i
            }
            seen[i] = true
        }
    return -1

}