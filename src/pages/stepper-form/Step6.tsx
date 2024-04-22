import { Button, Col, Row } from '@asseco-web/ui/atomic'
import {
  CameraAltOutlined,
  DriveFileRenameOutlineOutlined,
  FingerprintOutlined,
  TextSnippetOutlined,
} from '@mui/icons-material'
import { styled } from '@mui/material'
import { useTranslation } from 'react-i18next'

const LargeIconButton = styled(Button)(({ theme }) => ({
  height: '200px',
  '&:hover': {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.1)',
  },
  '.MuiSvgIcon-root': {
    fontSize: '3rem!important',
  },
}))

LargeIconButton.defaultProps = {
  variant: 'outlined',
  vertical: true,
  color: 'light',
  size: 'large',
}

export const render = () => {
  const { t } = useTranslation()

  return (
    <Col>
      <Row>
        <Col>
          <LargeIconButton startIcon={<CameraAltOutlined />}>{t('images')}</LargeIconButton>
        </Col>
        <Col>
          <LargeIconButton startIcon={<FingerprintOutlined />}>{t('biometry')}</LargeIconButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <LargeIconButton startIcon={<TextSnippetOutlined />}>{t('documents')}</LargeIconButton>
        </Col>
        <Col>
          <LargeIconButton startIcon={<DriveFileRenameOutlineOutlined />}>{t('signatures')}</LargeIconButton>
        </Col>
      </Row>
    </Col>
  )
}
