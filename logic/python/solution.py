from functools import reduce

nums = [3,2,1,2,7]

def looper(nums, i=0):
  if ( i >= len(nums)-1 ): return reduce(lambda acc, cur: acc+cur, nums)
  elif( nums.count(nums[i]) > 1 ):    
    nums[i] += 1
    return looper(nums, 0)
  else: return looper(nums, i + 1)

print(looper(nums))