def string_times(str, n):
    return str * n

def front_times(str, n):
    front = str[:3]
    return front * n

def count_xx(str):
    count = 0
    for i in range(len(str)-1):
        if str[i:i+2] == 'xx':
            count += 1
    return count

def double_x(str):
    i = str.find('x')
    if i == -1:
        return False
    if i + 1 >= len(str):
        return False
    return str[i+1] == 'x'

def string_bits(str):
    return str[::2]

def string_splosion(str):
    res = ""
    for i in range(len(str)):
        res += str[:i+1]
    return res

def last2(str):
    if len(str) < 2:
        return 0
    last = str[-2:]
    count = 0
    for i in range(len(str)-2):
        if str[i:i+2] == last:
            count += 1
    return count

def array_count9(nums):
    return nums.count(9)

def array_front9(nums):
    end = len(nums)
    if end > 4:
        end = 4
    for i in range(end):
        if nums[i] == 9:
            return True
    return False

def array123(nums):
    for i in range(len(nums)-2):
        if nums[i:i+3] == [1, 2, 3]:
            return True
    return False

def string_match(a, b):
    shorter = min(len(a), len(b))
    count = 0
    for i in range(shorter - 1):
        if a[i:i+2] == b[i:i+2]:
            count += 1
    return count