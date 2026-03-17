import re

if __name__ == '__main__':
    n = int(input())
    
    pattern = r'(?<=[: ])#[0-9a-fA-F]{3,6}(?=[; ,)])'
    
    for _ in range(n):
        line = input()
        matches = re.findall(pattern, line)
        if matches:
            for match in matches:
                if len(match) == 4 or len(match) == 7:
                    print(match)