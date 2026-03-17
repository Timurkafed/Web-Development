def count_evens(nums):
    count = 0
    for n in nums:
        if n % 2 == 0:
            count += 1
    return count

def big_diff(nums):
    return max(nums) - min(nums)

def centered_average(nums):
    nums.sort()
    trimmed = nums[1:-1]
    return sum(trimmed) // len(trimmed)

def sum13(nums):
    total = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i += 2
            continue
        total += nums[i]
        i += 1
    return total

def sum67(nums):
    total = 0
    skip = False
    for n in nums:
        if n == 6:
            skip = True
            continue
        if n == 7 and skip:
            skip = False
            continue
        if not skip:
            total += n
    return total

def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i+1] == 2:
            return True
    return False