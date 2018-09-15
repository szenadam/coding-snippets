collection1 = [1,34,7,54,2,7,4,2,6,2]
collection2 = [1]
collection3 = [1,1,1,1,2,2,2,3,4,5]
collection4 = []

def bubblesort(collection):
    length = len(collection)
    for i in range(length-1):
        swapped = False
        for j in range(length-1-i):
            if collection[j] > collection[j+1]:
                swapped = True
                collection[j], collection[j+1] = collection[j+1], collection[j]
        if not swapped: break
    return collection

print(bubblesort(collection1))
print(bubblesort(collection2))
print(bubblesort(collection3))
print(bubblesort(collection4))