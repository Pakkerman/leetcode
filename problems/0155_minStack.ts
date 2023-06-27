// 0155 - Min Stack
//https://leetcode.com/problems/min-stack/

// wow, i actually one shot this,

type StackNode = {
  val: number
  currentMin: number
  prev?: StackNode
}

class MinStack {
  private tail?: StackNode

  constructor() {
    this.tail = undefined
  }

  push(val: number): void {
    const node: StackNode = { val, currentMin: val }

    if (!this.tail) {
      this.tail = node
      node.currentMin = val
      return
    }

    node.currentMin = Math.min(this.tail.currentMin, val)
    node.prev = this.tail
    this.tail = node
  }

  pop(): void {
    if (!this.tail) return
    if (!this.tail.prev) {
      this.tail = undefined
      return
    }

    this.tail = this.tail.prev
  }

  top(): number {
    if (!this.tail) return 0
    return this.tail?.val
  }

  getMin(): number {
    if (!this.tail) return 0
    return this.tail?.currentMin
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
