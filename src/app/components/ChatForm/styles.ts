const styles = {
  messageContainer: (role: string) => ({
    display: 'flex',
    justifyContent: role === 'user' ? 'flex-end' : 'flex-start',
    width: '100%',
  }),
  messagesListWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  messagePaper: {
    padding: '5px',
    width: 'fit-content',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
}

export default styles
