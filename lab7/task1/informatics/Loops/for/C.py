a = int(input())
b = int(input())

for i in range(a, b + 1):
    root = i ** 0.5
    if root % 1 == 0:
        print(i, end=' ')