#  Given this dictionary, print out the key, 
# then iterate through the items in the list and 
# print them out as a bulleted list.
# Hint: This should not take more than 5 lines

elements: dict[str, list[str]] = {
    "todos": [
        "wash dishes",
        "do laundry",
        "wash more dishes",
        "make dinner",
        "wash dishes...again",
    ],
    "assets": ["Axel", "Bjørn"],
    "investors": ["Kylie"],
}
print()
for k, v in elements.items():
    print(k)
    for item in v:
        print(f"* {item}")
    print()

"""
todos
* wash dishes
* do laundry
* wash more dishes
* make dinner
* wash dishes...again

assets
* Axel
* Bjørn

investors
* Kylie
"""
