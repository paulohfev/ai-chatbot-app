const styles = {
  formContainer: (isChatCreated: boolean) => ({
    ...(isChatCreated && {
      bottom: 0,
      position: 'sticky',
    }),
  }),
  loadingContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  messagesContainer: {
    flex: 1,
    overflowY: 'auto',
    padding: 2,

    '&::-webkit-scrollbar': {
      width: '8px',
    },

    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '4px',

      '&:hover': {
        background: '#666',
      },
    },
  },
  wrapper: (isChatCreated: boolean) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    position: 'relative',

    ...(isChatCreated && {
      height: 'calc(100vh - 115px)',
      justifyContent: 'space-between',
      position: 'relative',
    }),
  }),
}

export default styles
