def front_back(str):
    if len(str) <= 1:
        return str
    
    mid = str[1:-1]  # символы между первым и последним
    
    # последний символ + середина + первый символ
    return str[-1] + mid + str[0]