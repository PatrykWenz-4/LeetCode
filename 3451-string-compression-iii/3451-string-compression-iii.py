class Solution:
    def compressedString(self, word: str) -> str:
        comp = ''
        first = word[0]
        count = 1  

        for i in range(1, len(word)):
            if count >= 9:
                comp += str(count) + first
                count = 0
            if ((word[i] != first) & (count != 0)):
                comp += str(count) + first
                first = word[i]
                count = 1
            else:
                count += 1
            if ((word[i] != first)):
                first = word[i]


        comp +=  str(count) + first

        return comp
