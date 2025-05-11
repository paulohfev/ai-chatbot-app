const styles = {
  messageContainer: (role: string) => ({
    display: 'flex',
    gap: '10px',
    justifyContent: role === 'user' ? 'flex-end' : 'flex-start',
    width: '100%',
  }),
  messagesListWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  messagePaper: (role: string) => ({
    display: 'flex',
    order: role === 'user' ? 1 : 2,
    padding: '5px',
    width: 'fit-content',
  }),
  messageIcon: (role: string) => ({
    alignItems: 'center',
    display: 'flex',
    height: '34px',
    order: role === 'user' ? 2 : 1,
    width: '24px',
  }),
}

export default styles
