
function MenuItem(props) {
    const {icon : Icon, text, ...restProps} = props
  return (
    <div>
        <button className='btn w-full justify-start p-8'>
            <Icon {...restProps}/>
            {text}
        </button>
    </div>
  )
}

export default MenuItem