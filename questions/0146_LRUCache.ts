// 0146 - LRU Cache
// https://leetcode.com/problems/lru-cache/description/

type N = {
  value: number
  next?: N
  prev?: N
}

class LRUCache {
  private length: number
  private capacity: number
  private head?: N
  private tail?: N
  private lookup: Map<number, N>
  private reverseLookup: Map<N, number>

  constructor(capacity: number = 10) {
    this.length = 0
    this.capacity = capacity
    this.head = this.tail = undefined
    this.lookup = new Map<number, N>()
    this.reverseLookup = new Map<N, number>()
  }

  get(key: number): number {
    const node = this.lookup.get(key)
    if (!node) return -1

    this.detach(node)
    this.prepend(node)

    return node.value
  }

  put(key: number, value: number): void {
    const node = this.lookup.get(key)
    if (!node) {
      const node: N = { value }
      this.length++
      this.prepend(node)
      this.trim()

      this.lookup.set(key, node)
      this.reverseLookup.set(node, key)
    } else {
      node.value = value
      this.detach(node)
      this.prepend(node)
    }
  }

  private prepend(node: N): void {
    if (!this.head) {
      this.head = this.tail = node
      return
    }

    node.next = this.head
    this.head.prev = node
    this.head = node
  }
  private detach(node: N): void {
    if (node.prev) node.prev.next = node.next
    if (node.next) node.next.prev = node.prev

    if (node === this.head) this.head = this.head.next
    if (node === this.tail) this.tail = this.tail.prev

    node.next = undefined
    node.prev = undefined
  }

  private trim(): void {
    if (this.length <= this.capacity || !this.tail) return

    const node = this.tail
    const key = this.reverseLookup.get(node)

    this.detach(node)
    this.lookup.delete(key)
    this.reverseLookup.delete(node)

    this.length--
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
