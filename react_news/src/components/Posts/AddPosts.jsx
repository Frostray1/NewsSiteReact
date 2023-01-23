import { Button } from 'antd';
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

const AddPosts = () => {

    const [content, setContent] = React.useState('');
  console.log(content);
  return (
    <div className="posts__block">
      <TextArea
        
        onChange={e=>setContent(e.target.value)}
        value={content}
        placeholder="Что нового?"
        autoSize
      />
      <Button className="postsBtn__create" type="primary">
        Создать пост
      </Button>
    </div>
  )
}

export default AddPosts