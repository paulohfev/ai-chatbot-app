import { signOut, useSession } from 'next-auth/react'

import { Avatar, Button, Popover } from '@mui/material'

import PopupState, { bindPopover, bindToggle } from 'material-ui-popup-state'

const UserAvatar: React.FC = () => {
  const { data: session } = useSession()

  return (
    <PopupState variant='popover' popupId='user-avatar-menu'>
      {(popupState) => (
        <>
          <Avatar src={session?.user?.image || ''} {...bindToggle(popupState)} />
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Button onClick={() => signOut()}>Log out</Button>
          </Popover>
        </>
      )}
    </PopupState>
  )
}

export default UserAvatar
