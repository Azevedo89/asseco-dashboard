import { NavbarUserMenu } from '@asseco-web/ui'
import { LogoutOutlined } from '@mui/icons-material'
import { useLogoutMutation } from 'api/auth.api'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'react-i18next'

export const UserMenu = () => {
  const { t } = useTranslation()
  const { auth } = useAuth()
  const [logout] = useLogoutMutation()

  return (
    <NavbarUserMenu
      avatarProps={{ children: auth.email?.substring(0, 2).toUpperCase() }}
      menuProps={{
        options: [
          {
            icon: <LogoutOutlined />,
            label: t('signOut'),
            onClick: () => {
              logout(auth.id)
            },
          },
        ],
        noSort: true,
      }}
    />
  )
}
