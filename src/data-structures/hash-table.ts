export class HashTable<T> {
  table: [string, T][][]
  constructor(public size: number) {
    this.table = new Array(size)
  }

  hash(key: string) {
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total = key.charCodeAt(i)
    }
    return total % this.size
  }

  set(key: string, value: T) {
    const index = this.hash(key)
    const bucket = this.table[index]

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key)
      if (sameKeyItem) {
        sameKeyItem[1] = value
      } else {
        bucket.push([key, value])
      }
    } else {
      this.table[index] = [[key, value]]
    }
  }

  get(key: string) {
    const index = this.hash(key)
    const bucket = this.table[index]
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key)
      if (sameKeyItem) {
        return sameKeyItem[1]
      }
    }
  }

  remove(key: string) {
    const index = this.hash(key)
    const bucket = this.table[index]
    if (bucket) {
      const filterdBucket = bucket.filter((item) => item[0] !== key)
      this.table[index] = filterdBucket
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      const element = this.table[i]
      if (element) {
        console.log(i, element)
      }
    }
  }
}
