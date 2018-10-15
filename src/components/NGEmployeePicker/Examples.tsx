/*
 * @Author: huangying
 * @Date: 2018-09-10 11:53:48
 * @Last Modified by: huangying
 * @Last Modified time: 2018-09-11 20:34:34
 */

import React, { PureComponent } from 'react'
import NGEmployeePicker, { IOptions } from 'components/NGEmployeePicker'
import { FormComponentProps } from 'antd/lib/form'
import { Form, Button } from 'antd'
const FormItem = Form.Item
const initialState = {
  options: [
    {
      value: 'huangying',
      label: '黄莹',
      depart: ['植发科部门植发科部门', '植发科部门植发科部门']
    },
    {
      value: 'huang',
      label: '黄黄英',
      depart: ['植发科部门']
    },
    {
      value: 'zhangsan',
      label: '章三',
      depart: ['脱毛部门', '脱毛部门']
    }
  ]
}
interface IProps {}
interface IState {
  options: IOptions[]
}

class FormNGEmployeePicker extends PureComponent<FormComponentProps, {}> {
  handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const options = [
      {
        value: 'huangying',
        label: '黄莹',
        depart: ['植发科部门植发科部门', '植发科部门植发科部门']
      },
      {
        value: 'huang',
        label: '黄黄英',
        depart: ['植发科部门']
      },
      {
        value: 'zhangsan',
        label: '章三',
        depart: ['脱毛部门', '脱毛部门']
      }
    ]
    const { getFieldDecorator } = this.props.form
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem label="Price">
          {getFieldDecorator('employeePicker', {
            initialValue: [{ key: 'huang', label: '黄黄英' }]
          })(
            <NGEmployeePicker
              attribute={{ labelInValue: true, mode: 'multiple' }}
              options={options}
            />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const FormNGEmployeePickerExa = Form.create()(FormNGEmployeePicker)

export default class Examples extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  }
  readonly state: IState = initialState
  onChange = (e: any) => {
    console.log(e)
  }
  render() {
    const { options } = this.state
    return (
      <div>
        {/* 单选 不需要姓名 */}
        <p>单选</p>
        <NGEmployeePicker
          defaultValue="huang"
          onChange={this.onChange}
          options={options}
        />
        {/* 单选 需要姓名 */}
        <NGEmployeePicker
        className="ml-20"
          defaultValue={{ key: 'huang', label: '黄黄英' }}
          attribute={{ labelInValue: true }}
          onChange={this.onChange}
          options={options}
        />

        {/* 多选 不需要姓名 */}
        <p>多选</p>
        <NGEmployeePicker
          defaultValue={['huang']}
          attribute={{ mode: 'multiple' }}
          onChange={this.onChange}
          options={options}
        />
        {/* 多选 需要姓名 */}
        <NGEmployeePicker
          className="ml-20"
          defaultValue={[{ key: 'huang', label: '黄黄英' }]}
          attribute={{ labelInValue: true, mode: 'multiple' }}
          onChange={this.onChange}
          options={options}
        />
        <FormNGEmployeePickerExa />
      </div>
    )
  }
}
