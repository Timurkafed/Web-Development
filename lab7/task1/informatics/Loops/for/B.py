# Считываем 4 числа
a = int(input())
b = int(input())
c = int(input())
d = int(input())

# Проходим циклом от a до b включительно
for i in range(a, b + 1):
    # Если остаток от деления числа i на d равен c
    if i % d == c:
        print(i, end=' ')