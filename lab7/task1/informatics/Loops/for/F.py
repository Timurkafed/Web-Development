x = input()
result = ""

for i in range(len(x) - 1, -1, -1):
    result += x[i]

print(int(result))