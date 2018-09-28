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

print(quicksort(collection))
