def double_char(str):
    res = ""
    for char in str:
        res += char * 2
    return res

def count_hi(str):
    return str.count('hi')

def cat_dog(str):
    return str.count('cat') == str.count('dog')

def count_code(str):
    count = 0
    for i in range(len(str) - 3):
        if str[i:i+2] == 'co' and str[i+3] == 'e':
            count += 1
    return count

def end_other(a, b):
    a = a.lower()
    b = b.lower()
    return a.endswith(b) or b.endswith(a)

def xyz_there(str):
    for i in range(len(str) - 2):
        if str[i:i+3] == 'xyz':
            if i == 0 or str[i-1] != '.':
                return True
    return False