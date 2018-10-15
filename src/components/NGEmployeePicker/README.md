/\*

- @Author: huangying
- @Date: 2018-09-10 12:03:22
- @Last Modified by: huangying
- @Last Modified time: 2018-09-10 12:07:25
  \*/

| 参数         | 类型                                                        | 说明                                 | 是否必须 | 默认值 |
| ------------ | ----------------------------------------------------------- | ------------------------------------ | -------- | ------ |
| attribute    | IAttribute | any                                                 | 所有方法                         | false    |        |
| onChange     | function(e: string/LabeledValue)                            | value 时，调用此函数                 | true     |        |
| onBlur       | (): void                                                    | 失去焦点                             | false    |        |
| onDeselect   | (e:string/LabeledValue): void                               | 取消选中时调用, 参数为选中项的 value | false    |        |
| options      | IOptions[]                                                  | 下拉框内容                           | true     |
| width        | number                                                      | 宽度                                 | false    | 200    |
| defaultValue | string/string[]/number/number[]/LabeledValue/LabeledValue[] | 默认值                               | true     |        |
className| string | '' | 类名 | false |

IAttribute 类型
| 参数 | 类型 | 说明 | 是否必须 | 默认值 |
| --------- | ------------------ | ------------- | ------------------ | ------ |
| allowClear | boolean | 支持清除 | false | true |
| dropdownClassName | string | 下拉菜单的 className 属性 | false | |
| labelInValue | boolean | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 {key: string, label: ReactNode} 的格式 | false | false |
| mode | 'multiple'或'' | 是否多选 | false | '' |
| maxTagCount | number | 最多显示多少个 tag | false | |
| placeholder | string | 选择框默认文字 | false | |
| disabled | boolean | 是否禁用 | false | false

IOptions 类型
| 参数 | 类型 | 说明 |
| -- | -- | -- |
| label | string | 姓名
| value | string | ID
| depart | string[] | 部门数组
例子请看 Examples.tsx
