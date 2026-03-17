n = int(input())
a = list(map(int, input().split()))

for i in range(n // 2):
    a[i], a[n - 1 - i] = a[n - 1 - i], a[i]

for x in a:
    print(x, end=' ')