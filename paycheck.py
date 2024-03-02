while True:
    hours = input( 'How many hours did you work this period ? = ')
    pay = input( 'What is your hourly Rate ? = ')
    tax = input( 'What is your tax % (avg is 86, do not add decimals or % sign) ? = ')
    h = float(hours)
    p = float(pay)
    t = float(tax) / 100
    
    if h == 0.0 :
        ct = input('Check total? ')
        c = float(ct)
        c = c / p
        print('Hours worked ? = ', c)
        quit()
    if p == 0.0 :
        ct = input('Check total ? ')
        c = float(ct)
        c = c / h
        print('Hourly rate = $', c)
        quit()
    if h > 40.0 :
        reg = h * p
        otp = (h - 40.0) * (p * 1.5)
        x = (reg + otp) * t
        print('Regular Total =' , reg , ' + Overtime Total =' , otp , ' Check total = ', "{:.2f}".format(x))
    else :
        x = (h * p) * t
        print('Your paycheck should be ','$', "{:.2f}".format(x))
    while True:
        print('Do you want to check another?')
        c = input(' y or n ? ')        
        if c == 'n':
            print('Thanks for using my Paycheck Calculator')
            quit()
        elif c == 'y':
            break
        else:
            print('Please enter y or n')
