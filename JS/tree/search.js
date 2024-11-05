/* 树的结构 */
class Node {
    constructor(key) {
        this.key = key // 节点值
        this.left = null // 左节点
        this.right = null // 右节点
    }
}
// 定义枚举
const COMPARE = {
    better: 1,
    lower: -1,
    equal: 0

}
const calcFn = (node, key) => {
    // console.log(node, key);
    if (key === node) {
        return COMPARE.equal
    } else {
        return key > node ? COMPARE.better : COMPARE.lower
    }

}
class BTS {
    constructor() {
        this.root = null // 根节点
    }

    insert(key) {
        // console.log(key)
        // 如果root为空
        if (this.root === null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }
    insertNode(node, key) {
        if (calcFn(node.key, key) === COMPARE.lower) {
            // 如果节点左边为空，说明到头了
            if (node.left === null) {
                // 插入节点
                node.left = new Node(key)
            } else {
                // 递归接着调用
                this.insertNode(node.left, key)
            }
        } else {
            if (node.right === null) {
                // 插入节点
                node.right = new Node(key)
            } else {
                // 递归接着调用
                this.insertNode(node.right, key)
            }
        }
    }
    inorderMap(cb) {
        this.inorderMapNode(this.root, cb)
    }
    inorderMapNode(node, cb) {
        if (node != null) {
            cb(node.key)
            this.inorderMapNode(node.left, cb)

            this.inorderMapNode(node.right, cb)
        }
    }
    min() {
        this.minNode(this.root)
    }
    minNode(node) {
        let current = node
        while (current.left != null) {
            current = current.left
        }
        console.log('@', current)
        return current
    }
    search(key) {

        return this.searchNode(this.root, key)
    }
    searchNode(node, key) {

        if (node === null) {
            return false
        }

        switch (calcFn(node.key, key)) {
            case COMPARE.equal:
                console.log('触发了');
                return true
            case COMPARE.better:
                return this.searchNode(node.right, key)

            case COMPARE.lower:
                return this.searchNode(node.left, key)
        }
    }
    remove(key) {
        this.root = this.removeNode(this.root, key)
    }
    removeNode(node, key) {
        if (node === null) {
            return null
        }
        switch (calcFn(node.key, key)) {
            case COMPARE.better:
                node.right = this.removeNode(node.right, key)
                return node
            case COMPARE.lower:
                node.left = this.removeNode(node.left, key)
                return node
            default:
                if (node.left === null && node.right === null) {
                    node = null;
                    return node
                }
                if (node.left === null) {
                    node = node.right
                    return node
                }
                if (node.right === null) {
                    node = node.left
                    return node
                }
                // 找到右侧最小的节点
                const target = this.minNode(node.right)
                // 将key替换
                node.key = target.key
                node.right = this.removeNode(node.right, target.key)


        }
    }

}

const bts1 = new BTS()

bts1.insert(3)
bts1.insert(2)
bts1.insert(4)
bts1.insert(1)
// bts1.inorderMap((value) => {
//     console.log('@', value);
// })
bts1.min()
// isSearch = bts1.search(1)
// console.log(isSearch);
bts1.remove(1)
console.log(bts1);
// console.log(bts1);


