import re
import email.utils

if __name__ == '__main__':
    n = int(input())
    
    pattern = r'^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z]+\.[a-zA-Z]{1,3}$'
    
    for _ in range(n):
        line = input()
        parsed = email.utils.parseaddr(line)
        email_address = parsed[1]
        
        if re.match(pattern, email_address):
            print(email.utils.formataddr(parsed))