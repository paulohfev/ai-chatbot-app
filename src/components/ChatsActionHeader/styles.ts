import { ChatsActionHeaderCategory } from '.'

const styles = {
  header: (category: ChatsActionHeaderCategory) => ({
    backgroundColor: category === ChatsActionHeaderCategory.Navbar ? '#1976d2' : 'inherit',
    display: 'flex',
    height: '64px',
    justifyContent: 'center',
    gap: '10px',
    padding: '10px 16px',
  }),

  headerButton: {
    height: '40px',
    width: '40px',
  },

  headerIcon: (category: ChatsActionHeaderCategory) => ({
    color: category === ChatsActionHeaderCategory.Navbar ? '#ffffff' : 'inherit',
  }),
}

export default styles
