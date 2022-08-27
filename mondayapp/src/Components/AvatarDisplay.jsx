import blankAvatar from '../images/blank-profile.png'

const AvatarDisplay = ({ data }) => {
  return (
<div className="avatar-container">
<div className="img-container">
<img src={data.avatar ? data.avatar : blankAvatar} alt={'photo of ' + data.owner} />
</div>
</div>
  )
}

export default AvatarDisplay
