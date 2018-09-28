collection = [1,4,2,6,2,7,21,0,5,2,4,1]

def quicksort(collection):
    coll_len = len(collection)

    if coll_len <= 1:
        return collection
    else:
        pivot = collection[0]
        greater = [ el for el in collection[1:] if el > pivot ]
        lesser = [ el for el in collection[1:] if el <= pivot ]
        return quicksort(lesser) + [pivot] + quicksort(greater)

# a bit easier to understand
def quicksort2(collection):
    if len(collection) <= 1:
        return collection

    pivot = collection[0]
    greater = []
    lesser = []

    for i in range(1, len(collection)):
        if collection[i] > pivot:
            greater.append(collection[i])
        else:
            lesser.append(collection[i])

    sorted = quicksort2(lesser)
    sorted.append(pivot)
    sorted = sorted + quicksort2(greater)
    return sorted

print(quicksort(collection))
print(quicksort2(collection))
