import { ChatsActionHeaderCategory } from '.'

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    padding: '10px 16px',
  },

  headerButton: {
    height: '40px',
    width: '40px',
  },

  headerIcon: (category: ChatsActionHeaderCategory) => ({
    color: category === ChatsActionHeaderCategory.Navbar ? '#ffffff' : 'inherit',
  }),
}

export default styles
