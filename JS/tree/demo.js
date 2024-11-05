// 可以引⼊的库和版本相关请参考 “环境说明”
// Please refer to the "Environmental Notes" for the libraries and versions that can be introduced.
// 实现JSON.stringify()
// list 转 tree
const list = [
    {id: 1, parentId: null, name: 'item1'},
    {id: 2, parentId: 1, name: 'item1.1'},
    {id: 3, parentId: 2, name: 'item1.1.1'},
    {id: 4, parentId: 1, name: 'item1.2'},
    {id: 5, parentId: null, name: 'item2'}
  ]
  
  // [
  //   {id:1, parentId: null, name: 'item1', children: [{
  //     {id: 2, parentId: 1, name: 'item1.1'},
  //     {id: 4, parentId: 1, name: 'item1.2'},
                                                     
  //   }]}
  // ]
const zhankai=(id,parentId)=>{

}