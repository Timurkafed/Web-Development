def power(a, n):
    res = 1.0
    for _ in range(n):
        res *= a
    return res

a, n = map(float, input().split())
print(power(a, int(n)))