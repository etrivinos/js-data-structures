class LinkedList {
    head;
    tail;

    constructor () {
        this.head = null;
        this.tail = null;
    }

    append (value) {
        const newNode = { value, next: null };

        if (this.tail) { this.tail.next = newNode; }
        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }
    }

    prepend (value) {
        const newNode = { value, next: this.head };
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    delete (value) {
        if(!this.head) {
            return;
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
            }
            else {
                currentNode = currentNode.next;
            }

        }

        if (this.tail.value === value) {
            this.tail = currentNode;
        }
    }

    find (value) {
        if(!this.head) {
            return;
        }

        let currentNode = this.head;

        while(currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return;
    }

    inserAfter (value, afterValue) {
        const exisitingNode = this.find(afterValue);

        while(exisitingNode) {
            const newNode = { value, next: exisitingNode.next };
            exisitingNode.next = newNode;
        }

        return;
    }

    toArray() {
        const elements = [];
        let currentNode = this.head;

        while(currentNode) {
            // @ts-ignore
            elements.push(currentNode);
            currentNode = currentNode.next;
        }

        return elements;
    }
}
