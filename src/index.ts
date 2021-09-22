// class Detail {
//     public count: number = 0
//     public name: string = ""
//     public price: number = 0
//
//     constructor({count, name, price}: Detail) {
//         this.count = count
//         this.name = name
//         this.price = price
//     }
// }
//
// class Src {
//     public a: string = '1'
//     public b: number = 2
//     public status: Array<Detail> = []
//
//     constructor(_a: string, _b: number, _status: Detail[]) {
//         this.a = _a
//         this.b = _b
//         this.status = _status
//     }
// }
//
// const d1 = new Detail({count: 1, name: "test", price: 1000})
// const d2 = new Detail({count: 1, name: "test", price: 1000})
//
// const b = new Src('c', 4, [d1, d2])
//
// console.log(b);
//
// class Class {
//     public count!: number
//
//     // public count: number | undefined
//
//     constructor(public _a: string, public _b: number) {
//         // this.count = count
//     }
//
//     getCount() {
//         console.log([1,2].find(d => d===2));
//
//         return this.count * this._b
//     }
// }
//
// console.log(new Class('22', 33).getCount());

type List = {
    id: number,
    type: string,
    msg: string
}
const list: List[] = [
    {
        id: 1,
        type: 'msg',
        msg: 'hello'
    },
    {
        id: 2,
        type: 'msg',
        msg: 'world'
    }
]

function showMsg(id: number) {
    return list.find(item => item.id === id)
}

const data = (<List>showMsg(2)).msg;
console.log(data);
