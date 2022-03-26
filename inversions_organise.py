# count the number of Is in first half of matrix : N1
# count the number of Is in second half of matrix : N2
# answer = | N1 - N2 |

def countNumberOfI(multArray):
  count = 0
  for row in multArray:
      count += row.count('I')
  return count
    
def countDifference(rows, completeArray):
  firstHalfArray = completeArray[:rows]
  secondHalfArray = completeArray[rows:]
  
  difference = abs(countNumberOfI(firstHalfArray) - countNumberOfI(secondHalfArray))
  
  return difference 

def transformInput(rawArray):
  result = map(lambda arr: list(arr[0]), rawArray)
  return result

# Input output handle
if __name__ == "__main__":
  testcases = int(input())

  for caseNr in range(1, testcases + 1):
    rows = int(input())
    array = []
    for _ in range((rows * 2)):
      array.append([input()])
    finalArray = transformInput(array)
    print("Case #%i: %s" % (caseNr, countDifference(rows, finalArray)))