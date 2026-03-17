binary_string = input()
decimal_value = 0
power = 0

for i in range(len(binary_string) - 1, -1, -1):
    if binary_string[i] == '1':
        decimal_value += 2 ** power
    power += 1

print(decimal_value)