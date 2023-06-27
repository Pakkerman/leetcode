// 0981 - Time Based Key-Value Store
// https://leetcode.com/problems/time-based-key-value-store/

type TimeMapValue = [string, number]

class TimeMap {
  private data: Map<string, TimeMapValue[]>
  constructor() {
    this.data = new Map()
  }

  set(key: string, value: string, timestamp: number): void {
    const data = this.data.get(key)
    if (!data) {
      this.data.set(key, [[value, timestamp]])
    } else {
      data.push([value, timestamp])
    }
  }

  get(key: string, timestamp: number): string {
    const data = this.data.get(key)
    if (!data) return ""
    // If the first timestamp is already bigger than the timestamp we are trying to get
    // then there's no next smaller item to return
    if (data[0][1] > timestamp) return ""

    // BinarySearch through TimeMapValues to get the idx of exact or next smaller timestamped item
    const idx = this.binarySearch(data, timestamp)
    return data[idx][0]
  }

  private binarySearch(arr: TimeMapValue[], target: number): number {
    // Slightly modified binarySearch
    //  - Middle value is using the timestamp in the 2d array
    //  - Return value is 0 or lo - 1
    // 1, 2, 3, 4, 7, 8, 9 find 5
    // l        m        h
    // l        m        h
    //             l  m  h
    //          ^  l  h
    // lo will stuck on the next value 7, and hi will be closing on lo
    // until the loop break, then lo - 1 is what we want to return
    let lo = 0
    let hi = arr.length

    while (lo < hi) {
      const mid = Math.floor(lo + (hi - lo) / 2)
      const val = arr[mid][1]

      if (val === target) return mid
      if (target < val) {
        hi = mid
      } else {
        lo = mid + 1
      }
    }
    return Math.max(lo - 1, 0)
  }
}

execute(
  ["TimeMap", "set", "set", "get", "set", "get", "get"],
  [
    [],
    ["a", "bar", 1],
    ["x", "b", 3],
    ["b", 3],
    ["foo", "bar2", 4],
    ["foo", 4],
    ["foo", 5],
  ]
)

function execute(instructions: string[], args: any) {
  const a = new TimeMap()
  for (let i = 1; i < instructions.length; i++) {
    switch (instructions[i]) {
      case "set":
        a.set(args[i][0], args[i][1], args[i][2])
        console.log("set")
        break
      case "get":
        console.log(a.get(args[i][0], args[i][1]))
        break
    }
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// Operation	Arguments	Output
// TimeMap
// set	"foo", "bar",   1
// get	"foo", 1	      "bar"
// get	"foo", 3	      "bar"
// set	"foo", "bar2",  4
// get	"foo", 4	      "bar2"
// get	"foo", 5	      "bar2"
