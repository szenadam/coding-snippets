collection = [1,4,8,21,6,1,12,5]

def insertion_sort(collection):
    for i in range(1, len(collection)):
        while i > 0 and collection[i-1] > collection[i]:
            collection[i], collection[i-1] = collection[i-1], collection[i]
            i -= 1
    return collection

print(insertion_sort(collection))
