/*
 * @Author: huangying
 * @Date: 2018-09-07 15:29:21
 * @Last Modified by: huangying
 * @Last Modified time: 2018-09-28 17:33:46
 */

import React, { PureComponent } from 'react'
import { Select } from 'antd'
import { LabeledValue } from 'antd/lib/select'
const Option = Select.Option
import './index.scss'
export interface IOptions {
  label: string
  value: string
  depart?: string[]
}
interface IAttribute {
  allowClear?: boolean
  dropdownClassName?: string
  labelInValue?: boolean
  maxTagCount?: number
  mode?: 'multiple' | ''
  placeholder?: string
  disabled?: boolean
}

interface IProps {
  filterOption?: boolean
  className?: string
  attribute?: IAttribute | any
  onBlur?(): void
  onChange?(e: string | LabeledValue): void
  onDeselect?(e: string | LabeledValue): void
  onSelect?(e: string | LabeledValue): void
  onSearch?(e: string): void
  options: IOptions[]
  width?: number
  value?: string | string[] | number | number[] | LabeledValue | LabeledValue[],
  defaultValue?:
    | string
    | string[]
    | number
    | number[]
    | LabeledValue
    | LabeledValue[],
    showDepart?: boolean
}
const initialState = {
  searchValue: ''
}
interface IState {
  searchValue: string
}
export default class extends PureComponent<IProps, IState> {
  static defalutPorps = {
    filterOption: true,
    onSelect: () => {},
    showDepart: false
  }
  onSearch = (e: string) => {
    this.setState({ searchValue: e })
    this.props.onSearch && this.props.onSearch(e)
  }
  onBlur = () => {
    this.setState({ searchValue: '' })
    this.props.onBlur && this.props.onBlur()
  }
  onChange = (e: string | LabeledValue) => {
    this.setState({ searchValue: '' })
    this.props.onChange && this.props.onChange(e)
  }
  readonly state: IState = initialState
  getName = (name: string, searchValue: string) => {
    if (!searchValue || !name) {
      return <p className="employeePicker_name">{name}</p>
    }
    const index = name.indexOf(searchValue)
    const beforeStr = name.substr(0, index)
    const afterStr = name.substr(index + searchValue.toString().length)
    const label =
      index > -1 ? (
        <p className="employeePicker_name">
          {beforeStr}
          <span
            style={{ color: '#DE564A' }}
          >
            {searchValue}
          </span>
          {afterStr}
        </p>
      ) : (
        <p className="employeePicker_name">{name}</p>
      )
    return label
  }
  filterOption = (input: string, option: any) => {
    const children = option.props.title.toString()
    return children.indexOf(input) > -1
  }
  getOptions = (options: IOptions[], searchValue: string) => {
    const { showDepart } = this.props
    const title = (label: string, depart: any) => {
      const departs = depart && depart.length > 0 ? `(${depart.join('/')})` : ''
      return showDepart ? label + departs : label
    }
    return (
      options &&
      options.map((item: IOptions) => (
        <Option key={item.value} title={title(item.label, item.depart)}>
          {this.getName(item.label, searchValue)}
          {item.depart &&
            item.depart.length > 0 && (
              <p
                className="employeePicker_depart wes"
                style={{ color: '#C0C5CF' }}
              >
                {item.depart.join('/')}
              </p>
            )}
        </Option>
      ))
    )
  }
  render() {
    const {
      attribute,
      options,
      width = 200,
      className,
      filterOption
    } = this.props
    const { searchValue } = this.state
    const attributes = {
      allowClear: true,
      mode: '',
      labelInValue: false,
      ...attribute
    }
    return (
      <Select
        filterOption={filterOption ? this.filterOption : false}
        style={{ width }}
        {...this.props}
        className={`${className} ngEmployeePicker`}
        showSearch={true}
        optionLabelProp="title"
        {...attributes}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onSearch={this.onSearch}
        getPopupContainer={triggerNode => triggerNode.parentNode}
      >
        {this.getOptions(options, searchValue)}
      </Select>
    )
  }
}
