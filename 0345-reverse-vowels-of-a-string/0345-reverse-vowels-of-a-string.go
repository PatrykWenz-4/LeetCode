import "strings"

func reverseVowels(s string) string {
	b, v := []byte(s), "aeiouAEIOU"
	for i, j := 0, len(b)-1; i < j; {
		if strings.IndexByte(v, b[i]) < 0 { i++; continue }
		if strings.IndexByte(v, b[j]) < 0 { j--; continue }
		b[i], b[j] = b[j], b[i]; i++; j--
	}
	return string(b)
}