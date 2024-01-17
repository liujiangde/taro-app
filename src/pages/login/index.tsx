import { View, Text, Input } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { AtButton, AtInput, AtIcon } from 'taro-ui'
import { FC, useState } from "react";
import './index.scss'

export default function Index() {
  const [userName, setUserName] = useState("小明")
  const [passWord, setPassword] = useState("123456")
  useLoad(() => {
    console.log('Page loaded.')
  })

  function handleChange(type, event) {
    const { value } = event.detail;
    if (type === "userName") {
      setUserName(value);
    } else {
      setPassword(value);
    }
  }
const  navigateChange = () => {
    Taro.navigateTo({ url: '/pages/index/index' })
}


  return (
    <View className='login_container'>
      <View className='login_content'>
        <View className='login_content_item'>
          <AtIcon value='user' size='24' color='#ccc'></AtIcon>
          <Input
            type='text'
            placeholder='用户名'
            className='login_content_input'
            onInput={(e): void => {
              handleChange("userName", e);
            }}
          />
        </View>
        <View className='login_content_item'>
          <AtIcon value='iphone' size='24' color='#ccc'></AtIcon>
          <Input
            type='text'
            placeholder='手机号'
            className='login_content_input'
            onInput={(e): void => {
              handleChange("phone", e);
            }}
          />
        </View>
      </View>
      <AtButton onClick={(e): void => {
              navigateChange();
            }} className='login_content_btn'  type='primary'
      >登录</AtButton>
    </View>
  )
}
