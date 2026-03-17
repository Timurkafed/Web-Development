n = int(input())

for i in range(1, n + 1):
    square = i * i
    if square <= n:
        print(square)
    else:
        break