export default [
    {name:'placeholder',explain:'输入框默认占位文本',type:'String',default: '-'},
    {name:'disabled',explain:'是否禁用',type:'Boolean',default: 'false'},
    {name:'debounce',explain:'获取输入建议的去抖延时',type:'Number',default: '300'},
    {name:'placement',explain:'菜单弹出位置 include: top / top-start / top-end / bottom / bottom-start / bottom-end',type:'String',default: 'bottom-start'},
    {name:'popperClass',explain:'Autocomplete 下拉列表的类名',type:'String',default: '-'},
    {name:'selectWhenNnmatched',explain:'在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件',type:'Boolean',default: 'false'},
    {name:'suffixIcon',explain:'输入框尾部图标',type:'String',default: '-'},
    {name:'prefixIcon',explain:'输入框头部图标',type:'String',default: '-'},
    {name:'hideLoading',explain:'是否隐藏远程加载时的加载图标',type:'Boolean',default: 'false'},
    {name:'highlightFirstItem',explain:'是否默认突出显示远程搜索建议中的第一项',type:'Boolean',default: 'false'},
    {name:'triggerOnFocus',explain:'是否在输入框 focus 时显示建议列表',type:'Boolean',default: 'true'},
    {name:'blur',explain:'失去焦点',type:'Function',default: '-'},
    {name:'querySearchAsync',explain:'返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它',type:'Function',default: '-'},
    {name:'handleSelect',explain:'点击选中建议项时触发',type:'Function',default: '-'},
]