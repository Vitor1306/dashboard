import React from 'react'
import AvatarEditor from 'react-avatar-editor'

class MyEditor extends React.Component {
  render() {
    return (
      <AvatarEditor
        image="http://example.com/initialimage.jpg"
        width={250}
        height={250}
        border={50}
        scale={1.2}
        rotate={0}
      />
    )
  }
}

export default MyEditor